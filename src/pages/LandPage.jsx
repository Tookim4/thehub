import React from 'react'
import './style.scss'
import MainFooter from '../components/MainFooter'
import {FaGithub, FaBehance, FaLinkedinIn} from 'react-icons/fa'
import {LuMailPlus} from 'react-icons/lu'
import { CgWebsite } from "react-icons/cg";
import { MdOutlineWeb } from "react-icons/md";
import { MdOutlineDesignServices } from "react-icons/md";
import NavBar from '../components/NavBar'
import sword from '../images/sword.webp'
import profileimg from '../images/profileimgg.jpg'


const LandPage = () => {



  return (
    <div>
       {/* <NavBar/> */}
      <div className="home_page">
          <NavBar/>
                <div className="landpage-content">
                  {/* <img src={sword} alt="" className='sword-img'/> */}

                  <div className="profile-img">
                    <img src={profileimg} alt="" srcset="" />
                  </div>

                  <div className="landpage-text">
                    {/* <h2>Hi there!</h2> */}
                    <h1 className='my-name'>Kimutai Too</h1>
                    <h2>WEB, UI/UX & GRAPHIC DESIGNER</h2>
                    <div className="socials-div">
                        <a target='_blank' href="https://github.com/Tookim4"><FaGithub/></a>
                        <a target='_blank' href="https://www.behance.net/tookim4eeec"><FaBehance/></a>
                        <a target='_blank' href="https://www.linkedin.com/in/kimutai-too-33336414b/"><FaLinkedinIn/></a>
                        {/* <a href="mailto:tookim4@gmail.com" target='_blank'><LuMailPlus/></a> */}
                    </div>
                  </div>
                </div>

          {/* <MainFooter/>       */}
       </div>

        <div className="catch-phrase">
              <p className="my-phrase">
               "Innovative Designs, Seamless Web Solutions"
              </p> 
        </div>

        <div className="my-services">

          <div className="services-title">
            <h2>My Services</h2>
          </div>

          <div className="main-services">
              <div className="main-service">
                <CgWebsite style={{fontSize: '40px'}}/>
                <h2>Web Apps</h2>
                <p>Transforming ideas into exceptional web app experiences.</p>
              </div>

              <div className="main-service">
                <MdOutlineDesignServices style={{fontSize: '40px'}}/>
                <h2>Graphic Design</h2>
                <p>Transforming ideas into exceptional designs to help market your brand.</p>
              </div>

              <div className="main-service">
                <MdOutlineWeb style={{fontSize: '40px'}}/>
                <h2>UI/UX</h2>
                <p>Designing interfaces that are intuitive, efficient, and enjoyable to use.</p>
              </div>
          </div>

        </div>


    </div>
  )
}

export default LandPage