import React from 'react'
import {FaGithub, FaBehance, FaLinkedinIn} from 'react-icons/fa'
import './style.scss'

const MainFooter = () => {
  return (
    <div className='footer-div'>
        <div className="socials-div">
            <a href="http://"><FaGithub/></a>
            <a href="http://"><FaBehance/></a>
            <a href="http://"><FaLinkedinIn/></a>
        </div>
    </div>
  )
}

export default MainFooter