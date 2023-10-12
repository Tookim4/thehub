import React from 'react'
import './style.scss'
import MainFooter from '../components/MainFooter'
import {FaGithub, FaBehance, FaLinkedinIn} from 'react-icons/fa'
import {LuMailPlus} from 'react-icons/lu'
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
                    <a target='_blank' href="https://github.com/Tookim4"><FaGithub/></a>
                    <a target='_blank' href="https://www.behance.net/tookim4eeec"><FaBehance/></a>
                    <a target='_blank' href="https://www.linkedin.com/in/kimutai-too-33336414b/"><FaLinkedinIn/></a>
                    {/* <a href="mailto:tookim4@gmail.com" target='_blank'><LuMailPlus/></a> */}
                </div>
              </div>
            </div>
       <MainFooter/>      
       </div>
    </div>
  )
}

export default LandPage