import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <img
        className="nav_logo"
        src="https://www.freepnglogos.com/download/2582"
        alt="Netflix Logo"
      />
      <img
        className="nav_avatar"
        src="https://www.pngfind.com/pngs/b/122-1221652_netflix-logo-png.png"
        alt="Logo"
      />
    </div>
  );
};

export default Navbar;
