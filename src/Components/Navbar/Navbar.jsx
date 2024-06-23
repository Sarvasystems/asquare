import React, { useState } from "react";
import "./Navbar.css";
import asquaredlogo from "../../assets/logo-Asquared.png";
import { MdLogin } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [active, setActive] = useState("navBar");
  // Function to toggle Navbar
  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  const removeNav = () => {
    setActive("navBar");
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="/" className="logo flex">
            <img src={asquaredlogo} alt="logo" />
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="/" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem">
              <a href="/" className="navLink">
                Buy
              </a>
            </li>

            <li className="navItem">
              <a href="/" className="navLink">
                Rent
              </a>
            </li>

            <li className="navItem">
              <a href="/" className="navLink">
                Commercial
              </a>
            </li>

            <li className="navItem">
              <a href="/" className="navLink">
                Residential
              </a>
            </li>

            <li className="navItem">
              <a href="/" className="navLink">
                OffPlan
              </a>
            </li>

            <li className="navItem">
              <a href="/" className="navLink">
                About
              </a>
            </li>

            <li className="navItem">
              <a href="/" className="navLink">
                Contact
              </a>
            </li>

            <button className="btn loginbtn">
              <a href="/">
                <MdLogin className="login-icon" />
              </a>
              <a href="/" className="login">
                {" "}
                Log In
              </a>
            </button>
          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <IoIosCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
