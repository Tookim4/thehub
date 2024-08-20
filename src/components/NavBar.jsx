import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import MyResume from './MyResume'

const NavBar = () => {


  return (
    <div className="main-nav">
      <div className="nav-links">

        <div className="left-nav-bar">
            
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
