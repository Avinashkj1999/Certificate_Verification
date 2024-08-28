// src/App.js
import React, { useState, useEffect } from 'react';
import { Container, Card, CardContent, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import CertificateForm from './components/CertificateForm';
import UserDetails from './components/UserDetails';
import Header from './components/Header';
import VerifiedCertificate from './components/VerifiedCertificate';

const App = () => {
  return (
    <Router>
      <Header />
      
        <Routes>
          <Route path="/" element={<CertificateFormWrapper />} />
          <Route path="/certificate/:certificateId" element={<CertificateDetails />} />
        </Routes>
      
    </Router>
  );
};

const CertificateFormWrapper = () => {
  const navigate = useNavigate();
  const handleSubmit = (certificateId) => {
    navigate(`/certificate/${certificateId}`);
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <CertificateForm onSubmit={handleSubmit} />
      </CardContent>
    </Card>
  );
};

const CertificateDetails = () => {
  const { certificateId } = useParams();
  const [user, setUser] = useState(null);
  const [showVerifiedCertificate, setShowVerifiedCertificate] = useState(false);
  
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const Api = process.env.REACT_APP_API_URL;
        const response = await fetch(`${Api}?_id=${certificateId}`);
        if (response.ok) {
          const data = await response.json();
          setUser(data);
          setShowVerifiedCertificate(true);
        } else {
          setUser(null);
          alert('User not found');
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
        alert('Failed to fetch user details');
      }
    };

    fetchUserDetails();
  }, [certificateId]);

  return (
    <>
      {showVerifiedCertificate && (
        <>
          <UserDetails user={user} certificateId={certificateId} />
          <VerifiedCertificate user={user} certificateId={certificateId} />
        </>
      )}
    </>
  );
};

export default App;
