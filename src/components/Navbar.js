import React from 'react';
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
// import { Link } from "react-router-dom";

class Navbar extends React {
  // Set state
  // Make Handleclick Function

  render() {
    return (
      <nav className="NavbarItems">
        <h1 classname="navbar_logo"> Trippy </h1>
        <ul class="nav_menu"> </ul>
        <li>

          <a> <i class="fa-solid fa-house"></i>Home </a>
        </li>
      </nav>
    );
  }
}

export default Navbar;
