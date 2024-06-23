<<<<<<< HEAD
import React, { useState } from 'react';
import "./navbar.css";
=======
import React, { useState } from "react";
import "./Navbar.css";
>>>>>>> refs/remotes/origin/main
import asquaredlogo from "../../assets/logo-Asquared.png";
import { MdLogin } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";

const Navbar = () => {
  const [active, setActive] = useState('navBar');
  const [dropdown, setDropdown] = useState(false);

  // Function to toggle Navbar
  const showNav = () => {
    setActive('navBar activeNavbar');
  }

  const removeNav = () => {
    setActive('navBar');
  }

  const handleMouseEnter = () => {
    setDropdown(true);
  }

  const handleMouseLeave = () => {
    setDropdown(false);
  }

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="/" className="logo flex">
            <img src={asquaredlogo} alt="logo" />
          </a>
        </div>

        <div className={active}>
          <ul className='navLists flex'>
            <li className='navItem'>
              <a href="/" className='navLink'>Buy</a>
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

            <li className='navItem'>
              <a href="/" className='navLink'>Contact</a>
            </li>

            <li className='navItem dropdown' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <a href="#" className='navLink'>More <TiArrowSortedDown className='dropdownIcon' /></a>
              {dropdown && (
                <ul className='dropdownMenu' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <li className='dropdownItem'>
                    <a href="/" className='dropdownLink'>About Us</a>
                  </li>
                  <li className='dropdownItem'>
                    <a href="/" className='dropdownLink'>Mortgages</a>
                  </li>
                  <li className='dropdownItem'>
                    <a href="/" className='dropdownLink'>Communities</a>
                  </li>
                  <li className='dropdownItem'>
                    <a href="/" className='dropdownLink'>Developers</a>
                  </li>
                </ul>
              )}
            </li>


            <button className='btn loginbtn'>
              <a href="/"><MdLogin className='login-icon'/></a>
              <a href="/" className='login'> Log In</a>
            </button>
          </ul>

          <div onClick={removeNav} className='closeNavbar'>
            <IoIosCloseCircle className='icon' />
          </div>
        </div>

        <div onClick={showNav} className='toggleNavbar'>
          <TiArrowSortedDown className='icon' />
        </div>
      </header>
    </section>
  );
}

export default Navbar;
