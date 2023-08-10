import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { PrimaryButton } from "../Buttons/PrimaryButton";
import SubscribForm from "../forms/SubscribForm";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";

const Footer = () => {
  return (
    <FooterStyle>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get Started?</h3>
            <h3>Talk to us today</h3>
          </div>

          <div>
            <NavLink to="/contact">
              <PrimaryButton>Get Started</PrimaryButton>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Tricky Solution</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              magni?
            </p>
          </div>

          <div className="footer-subscribr">
            <h3>Subscribe to get important updates</h3>
            <SubscribForm />
          </div>

          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social--icons">
              <div>
                <NavLink to="#">
                  <FaDiscord className="icons"></FaDiscord>
                </NavLink>
              </div>
              <div>
                <NavLink to="#">
                  <FaInstagram className="icons"></FaInstagram>
                </NavLink>
              </div>
              <div>
                <NavLink to="#">
                  <FaYoutube className="icons"></FaYoutube>
                </NavLink>
              </div>
            </div>
          </div>

          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>
              <a href="tel:+919876543210">
                {" "}
                <IoMdCall className="call-icon" /> +91 9876543210{" "}
              </a>
            </h3>
          </div>
        </div>
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} TrickySolution. All Rights Reserved
            </p>
            <div className="footer-bottom-privacy-section">
              <p>PRIVACE POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </FooterStyle>
  );
};

const FooterStyle = styled.section`
  .contact-short {
    max-width: 63%;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    border-radius: 1rem;
    transform: translateY(50%);

    .grid div:last-child {
      display: flex;
      justify-content: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 3rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
    .footer-bottom--section {
      padding-top: 9rem;

      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
      p {
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
      .footer-bottom-privacy-section {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        flex-direction: column;
      }
    }

    .footer-contact a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.white};

      .call-icon {
        margin-bottom: -5px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 90%;
      padding: 2rem;
      text-align: center;

      .grid div:last-child {
        display: flex;
        justify-content: center;
        align-self: center;
      }
    }
  }
`;
export default Footer;
