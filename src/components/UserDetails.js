// src/components/UserDetails.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const UserDetails = ({ user, certificateId }) => {

    function formatDate(dateNumber) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateNumber);
        return date.toLocaleDateString('en-US', options);
      }
      const issuedDate = formatDate(user.workshop_Date);
    return (
      <Card variant="outlined">
        <CardContent>
          <Typography>
            <strong>Name:</strong> {user.name}
          </Typography>
          <Typography>
            <strong>Email:</strong> {user.email}
          </Typography>
          <Typography>
            <strong>Certificate ID:</strong> {certificateId}
          </Typography>
          <p>Issued by Microsoft on {issuedDate}</p>
        </CardContent>

        {/* <div className="issue_date" data-test-id="credential-issuance">
          <p>Issued by Microsoft on {issuedDate}</p>
          <div className="userinfo">
            <img className="AvatarImage" alt="" src=""></img>
            <div className="Userinfo">
              <a href="">
                <h3 className=""></h3>
              </a>
            </div>
          </div>
        </div> */}
      </Card>
    );
};

export default UserDetails;
