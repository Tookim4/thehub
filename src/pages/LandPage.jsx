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
import mainlogo from '../images/path4.png'
import mypicture from '../images/profileimg.jpg'
import ProjectSection from '../components/ProectSection'
import { RiGitCommitLine } from "react-icons/ri";

const LandPage = () => {



  return (
    <div>
       {/* <NavBar/> */}
      <div className="home_page">
          <NavBar/>
                <div className="landpage-content">

                  <div className="landpage-text">
                    {/* <div className="main-logo">
                      <img src={mainlogo} alt="" /> 
                    </div> */}
                    <h2>KIMUTAI TOO.</h2>
                    <p>
                      I design and develop minimalistic websites using Figma and ReactJs. 
                      </p>

                      <p>
                      I create aesthetic UI/UX designs using figma and use ReactJs to bring my client's vision into reality while provide them with an impactful and effective piece of artwork. 
                    </p>
                    
                    <div className="socials-div">
                      
                      {/* <div className="circle">
                       <img src={mypicture} alt="" srcset="" />
                      </div> */}
                        

                        <a target='_blank' rel='noreferrer' href="https://github.com/Tookim4"><FaGithub/></a>
                        <a target='_blank' rel='noreferrer' href="https://www.behance.net/tookim4eeec"><FaBehance/></a>
                        <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/kimutai-too-33336414b/"><FaLinkedinIn/></a>
                        <a href="mailto:tookim4@gmail.com" target='_blank'><LuMailPlus/></a>
                    </div>
                  </div>
                </div>

             
       </div>

        <div className="catch-phrase">
              <p className="my-phrase">
               "Innovative Designs, Seamless Web Solutions"
              </p> 
        </div>


        <div className="about-container">
          <div className="about-content">
            <div className="about-text">
              <h5 className="about-title"><RiGitCommitLine style={{paddingRight: '5px'}}/> ABOUT ME</h5>
              <p>
              I'm a front-end developer with a strong passion for JavaScript and its ecosystem, particularly ReactJS. I've mastered React and I'm currently immersed in mastering the entire MERN stack.
              </p>
              <p>
              My expertise in ReactJS extends to a wide array of its libraries, enabling me to create interactive, aesthetically pleasing, and marketable websites.
              </p>
              <p>
              In addition to development, I have a keen interest in design and editing. I've worked on various corporate and personal design projects, which include logos, flyers, banners, cards, intros, outros, and more. Proficient in Adobe products such as Photoshop, Illustrator, and After Effects, as well as tools like Gimp and Vegas Pro, I'm well-versed in the technology needed to bring creative visions to life.
              </p>
            </div>
            <div className="about-image">
             <img src={mypicture} alt="" srcset="" />
            </div>
          </div>
        </div>

        <ProjectSection/>

        <hr />

        <MainFooter/>

    </div>
  )
}

export default LandPage