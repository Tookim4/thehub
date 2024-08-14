import React from 'react';
import { Link } from 'react-router-dom';
import mainlogo from '../images/path4.png'
import './style.scss';
import MyResume from './MyResume'
import { IoHome } from "react-icons/io5";

const NavBar = () => {


  return (
    <div className="main-nav">
      <div className="nav-links">

        <div className="left-nav-bar">
            <div className="resume-link">
              <MyResume/> 
            </div>
        </div>

        <div className="page-links">
            <Link to={'/'} className='main-links' style={{fontSize: '25px'}}>
              <IoHome />
            </Link>
          
            <Link to={'/pages/ProjectsPage'} className='main-links'>
              Projects
            </Link> 
        </div>
      
      </div>
    </div>
  );
};

export default NavBar;
