import React from 'react'
import { Link } from 'react-router-dom';
import mainlogo from '../images/path4.png'
import MyResume from './MyResume'
import { IoHome } from "react-icons/io5";

const NavBarP = () => {
  return (
        <div className="main-nav">
            <div className="nav-links">
                <div className="left-nav-bar">
                    
                </div>

                <div className="page-links">
                    <div className="resume-link">
                        <MyResume/> 
                    </div>
                    <Link to={'/'} className='main-links'>
                        HOME
                    </Link>
                </div>
            </div>
    </div>
  )
}

export default NavBarP