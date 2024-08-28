// src/components/CertificateForm.js
import React, { useState } from 'react';
import { TextField,Typography, Button, Box, Container } from '@mui/material';


const CertificateForm = ({ onSubmit }) => {
    const [certificateId, setCertificateId] = useState('');
 

    const handleSubmit = (e) => {
        e.preventDefault();
        if (certificateId) {
            onSubmit(certificateId);
            
        }
    };
    
    return (
        <Container>
        <Typography variant="h4" align="center" gutterBottom> 
                Certificate Verification
            </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, borderRadius:30 }}>
            <TextField 
                placeholder='Certificate ID'
                variant="outlined"
                fullWidth
                value={certificateId}
                onChange={(e) => setCertificateId(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary"> 
                Submit
            </Button>
            
        </Box>
        </Container>
        
    );
};

export default CertificateForm;
