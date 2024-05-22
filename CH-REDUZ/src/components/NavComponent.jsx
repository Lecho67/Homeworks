// NavComponent.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css' 

const NavComponent = () => {
  return (
    <>
      <NavLink to='/' exact className='nav-link' activeClassName='active'>
        Home
      </NavLink>
      <NavLink to='/about' className='nav-link' activeClassName='active'>
        About
      </NavLink>
      <NavLink to='/login' className='nav-link' activeClassName='active'>
        Login
      </NavLink>
    </>
  );
};

export default NavComponent;
