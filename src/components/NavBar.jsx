import React from 'react';
import { Link } from 'react-router-dom';
import mainlogo from '../images/path4.png'
import './style.scss';
import MyResume from './MyResume'

const NavBar = () => {


  return (
    <div className="main-nav">
      <div className="nav-links">

        <div className="left-nav-bar">
            <div className="resume-link">
              <MyResume/> 
            </div>

            {/* <div className='email-div' > */}
             
            {/* </div> */}
        </div>

        <ul className="page-links">
        <Link to={'/'} className='main-links'>
            Home /
          </Link>
        
          <Link to={'/pages/ProjectsPage'} className='main-links'>
            Projects /
          </Link>
           
        </ul>
      
      </div>
    </div>
  );
};

export default NavBar;
