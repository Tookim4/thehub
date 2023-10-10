import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {IoHome} from 'react-icons/io5'
import './style.scss';

const NavBar = () => {


  return (
    <div className="main-nav">
      <div className="nav-links">
        <Link to={'/'} className='main-links'>
          <IoHome/>
        </Link>
        <Link to={'pages/AboutsPage'} className='main-links'>
          ABOUT
        </Link>
        <Link to={'pages/ProjectsPage'} className='main-links'>
          PROJECTS
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
