import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { PrimaryButton } from "../components/Buttons/PrimaryButton";

const Error = () => {
  return (
    <ErrorStyle>
      <img src="./img/error.svg" alt="error" />
      <NavLink to="/">
        <PrimaryButton className="btn">Go Back</PrimaryButton>
      </NavLink>
    </ErrorStyle>
  );
};

const ErrorStyle = styled.section`
  padding: 8rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .btn {
    margin-top: 3rem;
    font-size: 1.8rem;
  }
`;

export default Error;
