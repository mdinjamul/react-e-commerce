import React from "react";
import styled from "styled-components";
import Logo from "../logo/Logo";
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <HeaderStyle>
      <div className="main-header-wrapper">
        <Logo />
        <NavMenu />
      </div>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  .main-header-wrapper {
    padding: 0 4.8rem;
    height: 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }
  .logo {
    height: 5rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .main-header-wrapper {
      padding: 0 2rem;
      height: 10rem;
      background-color: ${({ theme }) => theme.colors.bg};
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
    }
  }
`;
export default Header;
