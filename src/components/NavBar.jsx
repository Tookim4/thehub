import React from 'react';
import { Link } from 'react-router-dom';
import mainlogo from '../images/path4.png'
import './style.scss';
const NavBar = () => {


  return (
    <div className="main-nav">
      <div className="nav-links">

      <Link to={'/'} className='main-links'>
           <img src={mainlogo} alt="" /> 
        </Link>
      
        <Link to={'/pages/AboutsPage'} className='main-links'>
          ABOUT
        </Link>
       
        <Link to={'/pages/ProjectsPage'} className='main-links'>
          PROJECTS
        </Link>

      </div>
    </div>
  );
};

export default NavBar;
