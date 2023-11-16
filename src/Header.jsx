import React from "react";
import logo from "./logo1.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="" width="90" height="80" /> <b>HP Keep</b>
      </div>
    </>
  );
};

export default Header;
