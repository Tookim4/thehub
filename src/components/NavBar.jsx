import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const NavBar = () => {
  return (
    <div className='main-nav'>
        <div className="nav-links">
            <Link to={'/'} className='main-links'>H</Link>
            <Link to={'pages/AboutsPage'} className='main-links'>About</Link>
            <Link to={'pages/ProjectsPage'} className='main-links'>Projects</Link>
        </div>
    </div>
  )
}

export default NavBar