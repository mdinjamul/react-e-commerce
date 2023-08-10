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
              "& .MuiTextField-root": { m: 1, width: "52ch", margin: "0" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField id="outlined-helperText" label="Email" type="email" />
              <input
                className="subscribe-btn"
                type="submit"
                value="SUBSCRIBE"
              />
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
      max-width: 100%;
      margin: auto;

      .MuiBox-root label {
        font-size: 1.4rem;
        background-color: ${({ theme }) => theme.colors.footer_bg};
        padding-right: 5px;
        color: ${({ theme }) => theme.colors.white};
      }

      .MuiBox-root input[type="email"] {
        padding-bottom: 2rem;
        color: ${({ theme }) => theme.colors.white};
        border: 1px solid ${({ theme }) => theme.colors.white};

        &:hover {
          border: 1px solid ${({ theme }) => theme.colors.white};
        }

        &:focus {
          border: 0px solid ${({ theme }) => theme.colors.white};
        }
      }
      .subscribe-btn {
        max-width: 50rem !important;
        padding: 1.2rem 10rem;
      }
    }
  }
`;

export default ContactForm;
