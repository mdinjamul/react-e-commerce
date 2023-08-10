import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styled from "styled-components";

const ContactForm = () => {
  return (
    <ContactFormStyle>
      <div className="container">
        <div className="contact-form">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "75ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                id="outlined-helperText"
                label="Name"
                type="text"
                defaultValue=""
              />
              <TextField
                id="outlined-helperText"
                label="Email"
                type="email"
                defaultValue=""
              />
              <TextField
                id="outlined-multiline-static"
                label="Type your Message"
                multiline
                rows={4}
              />
              <input type="submit" value="Send" />
            </div>
          </Box>
        </div>
      </div>
    </ContactFormStyle>
  );
};

const ContactFormStyle = styled.section`
  text-align: center;
  .container {
    margin-top: 6rem;
    .contact-form {
      max-width: 50rem;
      margin: auto;

      .MuiBox-root label {
        font-size: 1.4rem;
        background-color: ${({ theme }) => theme.colors.body_bg};
        padding-right: 5px;
      }
      .MuiBox-root input[type="text"],
      .MuiBox-root input[type="email"] {
        padding-bottom: 2rem;
      }
    }
  }
`;

export default ContactForm;
