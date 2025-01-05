import React from 'react'
import {Nav, NavLink, Bars, NavMenu} from './NavbarElements'
const Navbar
 = () => {
  return (
    <>
        <Nav>
        <NavLink to="/" end>
        <img src="..\public\asset\logo.svg" alt="logo" />
        </NavLink>
        <Bars />
        <NavMenu>
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
