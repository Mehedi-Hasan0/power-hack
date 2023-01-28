import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <p>header</p>
      <p>
        <Link to="/login">Login</Link>
      </p>
    </>
  );
};

export default Header;
