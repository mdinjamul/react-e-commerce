import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink to="/">
      <figure>
        <img className="logo" src="./img/logo.png" alt="logo" />
      </figure>
    </NavLink>
  );
};

export default Logo;
