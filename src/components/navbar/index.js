import React, {useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons
import {Nav, NavLink, Bars, NavMenu, CloseIcon, IconWrapper} from './NavbarElements'

const Navbar
 = () => {
  const [isOpen, setIsOpen] = useState(false); // Add state for the menu toggle

const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu state
  };
  return (
    <>
        <Nav>
        <NavLink to="/" end>
        <img className='logo' src="/asset/logo.svg" alt="logo" />
        </NavLink>
        
        <IconWrapper>
        {isOpen ? (
          <CloseIcon onClick={toggleMenu}>
            <FaTimes /> {/* Close (X) icon */}
          </CloseIcon>
        ) : (
          <Bars onClick={toggleMenu}>
            <FaBars /> {/* Hamburger menu icon */}
          </Bars>
        )}
      </IconWrapper>
        
        <NavMenu className={isOpen ? 'active' : ''}>
        <NavLink to="/about"end className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
        About
        </NavLink>
        <NavLink to="/services"end className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
        Services
        </NavLink>
        <NavLink to="/gallery"end className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
        Gallery
        </NavLink>
        <NavLink to="/contact"end className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
        Contact
        </NavLink>
        </NavMenu>
        </Nav>
    </>
  )
}

export default Navbar
