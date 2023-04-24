import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import logo from "./assets/logo.png"
import styles from './NavBar.modules.css'

import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className='iconoPagina'>
        <Link to="/"><img src={logo} className={styles.logo} alt="LOGO" /></Link>
      </div>
      <ul className="secciones">
        <li className="itemSecciones">
          <NavLink to="/Category/Celulares" className="navLink"> Celulares </NavLink>
        </li>
        <li className="itemSecciones">
          <NavLink to="/Category/Notebooks" className="navLink"> Notebooks </NavLink>
        </li>
        <li className="itemSecciones">
          <NavLink to="/Category/Televisores" className="navLink"> Televisores </NavLink>
        </li>
        <CartWidget />
    </ul>        
   </nav>
    </>
  );
};

export default Navbar;
