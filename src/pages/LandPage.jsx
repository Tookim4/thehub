import React from 'react'
import './style.scss'
import MainFooter from '../components/MainFooter'
import {FaGithub, FaBehance, FaLinkedinIn} from 'react-icons/fa'
import NavBar from '../components/NavBar'
import sword from '../images/sword.png'

const LandPage = () => {
  return (
    <div>
      <div className="home_page">
       <NavBar/>
       
            <div className="landpage-content">
              <img src={sword} alt="" className='sword-img'/>
              <div className="landpage-text">
                <h2>KIMUTAI TOO | FRONT-END DEVELOPER & DESIGNER</h2>
                <div className="socials-div">
                    <a href="http://"><FaGithub/></a>
                    <a href="http://"><FaBehance/></a>
                    <a href="http://"><FaLinkedinIn/></a>
                </div>
              </div>
            </div>
       <MainFooter/>      
       </div>
    </div>
  )
}

export default LandPage