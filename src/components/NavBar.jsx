import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import MyResume from './MyResume'
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
            <div className="resume-link">
                <MyResume/> 
            </div>
            
            <Link to={'/pages/ProjectsPage'} className='main-links'>
              Projects
            </Link> 
        </div>

      </div>
    </div>
  );
};

export default NavBar;
