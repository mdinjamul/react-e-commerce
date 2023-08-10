import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNavigation = ({ title }) => {
  return (
    <PageNavigationStyle>
      <NavLink to="/">Home &nbsp; </NavLink> /&nbsp;{title}
    </PageNavigationStyle>
  );
};

const PageNavigationStyle = styled.section`
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3.2rem;
  padding-left: 1.2rem;

  a {
    font-size: 3.2rem;
  }
`;
export default PageNavigation;
