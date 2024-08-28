import React from 'react';
import { Button } from '@mui/material';
import './VerifiedCertificate.css'

const VerifiedCertificate = ({ user, certificateId }) => {
  
  const handleDownload = () => {
    // Implement your download logic here (e.g., using a library or file generation)
    alert('Download functionality is currently under development.');
  };
  
  function formatDate(dateNumber) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateNumber);
    return date.toLocaleDateString('en-US', options);
  }
  const issuedDate = formatDate(user.workshop_Date);
  return (
    <section>
      <div className="certificate-container">
        <div className="column-is-three-quarters-tablet">
          <section className="certificate">
            <div className="certificate-bg">
              <img src="https://learn.microsoft.com/media/profile/certificate-background.svg?branch=main"></img>
              <div className="credential-hero-background-inner">
                <div className="Logo">
                  <img
                    src="https://skillnation.ai/wp-content/uploads/2023/08/SN_logo-17-1024x415.png"
                    alt="Logo"
                  ></img>
                </div>
                <div className="credential-hero-body">
                  <h2>{user.name}</h2>
                  <p>has successfully passed all requireemnt for</p>
                  <h3>{user.workshop_name}</h3>
                </div>
                <div className="credential-hero-footer">
                  <div className="Certificate_Information">
                    <p>Certification ID: {certificateId}</p>
                    {/* <p>Certification number: 55291E-8A1T45</p> */}
                    <p>Earned on: {issuedDate}</p>
                    {/* <div>
                      <span class="tag background-color-primary-light border-radius-rounded is-small font-weight-normal">
                        <span class="docon docon-check margin-right-xxs"></span>
                        Online Verifiable
                      </span>
                    </div> */}
                  </div>
                  <div className="courselogo">
                    <div className="courselogoimage">
                      <img src="https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg"></img>
                    </div>
                  </div>
                  {/* <div className="signature">
                    <figure>
                      <img src="https://learn.microsoft.com/media/profile/achievement-signature.png?branch=main"></img>
                    </figure>
                  </div> */}
                </div>
              </div>
            </div>
          </section>
        </div>
        
        <div className="column-is-one-quarters-tablet">
          <div className="credentials-verification">
          <div className="courselogoimg">
                <img src="https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg"></img>
            </div>
            <ol className="list-style-none">
              <li className="CertificatecredentialsInformation">
                <div>
                  status {user.status}
                  <span></span>
                  <span></span>
                </div>
              </li>
              <li className="CertificatecredentialsInformation">
              Certification ID: {certificateId}
              </li>
              {/* <li className="CertificatecredentialsInformation">
                Certification number: 55291E-8A1T45
              </li> */}
              <li className="CertificatecredentialsInformation">
                Earned on: {issuedDate}
              </li>
            </ol>
          </div>
        </div>
        <div>
        <Button variant="contained" onClick={handleDownload}>
                  Download
                </Button>
        </div>
      </div>
    </section>
  );
};

export default VerifiedCertificate;