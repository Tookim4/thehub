import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import mainlogo from '../images/death.png'

const NavBar = () => {


  return (
    <div className="main-nav">
      <div className="nav-links">

        <div className="left-nav-bar">
            <img src={mainlogo} alt="" />
            <h3>KimToo</h3>
        </div>

        <div className="page-links">
            
            <Link to={'/pages/ProjectsPage'} className='main-links'>
              Code
            </Link> 
            <Link to={'/pages/DesignsPage'} className='main-links'>
              Design
            </Link> 
        </div>

      </div>
    </div>
  );
};

export default NavBar;
