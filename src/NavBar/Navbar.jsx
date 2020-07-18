import React from "react";
import MaskPic from "../assets/mask1.png";
import "./Navbar.css";
import Logout from "./Logout/Logout";
const Navbar = () => {
  return (
    <nav>
      <img id="logo" src={MaskPic} alt="" />
      <Logout />
    </nav>
  );
};

export default Navbar;
