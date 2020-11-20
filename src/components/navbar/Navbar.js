import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../button/Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TRAVEL <i className='fas fa-bus-alt'></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className='nav-items'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-items'>
              <Link
                to='/about-us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className='nav-items'>
              {/* <Link to='/home/#partner' className='nav-links' onClick={closeMobileMenu}>
                Our Partners
              </Link> */}
              <a
                href='/#partner'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Our Partners
              </a>
            </li>
            {/* <li className='nav-items'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Testimonial
              </Link>
            </li> */}
            <li className='nav-items'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Book a Ticket
              </Link>
            </li>
            {/* <li className='nav-items'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                FAQ Page
              </Link>
            </li> */}
            {/* <li className='nav-items'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Account <i class='fas fa-user'></i>
              </Link>
            </li> */}
            <li className='nav-items'>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
