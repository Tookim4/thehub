import React from 'react'
import './style.scss'
import MainFooter from '../components/MainFooter'
import {FaGithub, FaBehance, FaLinkedinIn} from 'react-icons/fa'
import {LuMailPlus} from 'react-icons/lu'
import NavBar from '../components/NavBar'
import mypicture from '../images/mainimg.png'
import ProjectSection from '../components/ProectSection'
import { RiGitCommitLine } from "react-icons/ri";
import MainDock from '../components/MainDock'
import { Link } from 'react-router-dom';

const LandPage = () => {



  return (
    <div>
       {/* <NavBar/> */}
      <div className="home_page">
          <NavBar/>
                <div className="landpage-content">
                  <div className="landpage-text">

                    <div className="landpage-headers">
                      <h1>YOUR VISION IS <Link to={'/pages/ProjectsPage'} className="my-craft">MY CRAFT</Link></h1>
                    </div>

                     <div className="landpage-texts">
                         <p className='page-header'>DESIGN & DEVELOPMENT STUDIO</p>
                            <p>
                            I design and develop minimalistic websites using Figma and ReactJs. 
                           
                            I also create aesthetic UI/UX designs using Figma, Photoshop and use ReactJs to bring my client's vision into reality while provide them with an impactful and effective piece of artwork. 
                          </p>
                    </div>
                     
                    
                    <div className="socials-div">
                        <a target='_blank' rel='noreferrer' href="https://github.com/Tookim4"><FaGithub/></a>
                        <a target='_blank' rel='noreferrer' href="https://www.behance.net/tookim4eeec"><FaBehance/></a>
                        <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/kimutai-too-33336414b/"><FaLinkedinIn/></a>
                        <a href="mailto:tookim4@gmail.com" target='_blank' rel='noreferrer'><LuMailPlus/></a>
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
           <div className="about-image">
             <img src={mypicture} alt=""/>
            </div>
            <div className="about-text">
              <h5 className="about-title"><RiGitCommitLine style={{paddingRight: '5px'}}/> ABOUT ME</h5>
              <p>
              Hi, I'm Brian Kimutai, a Kenyan and a tech enthusiast who lives and breathes the digital world. Whether I'm coding up sleek, responsive front-end experiences or crafting pixel-perfect designs in Figma, I'm all about creating things that look great and work even better.
              </p>
              <p>
              Graphic design is also my creative playground—I love bringing ideas to life with a splash of color and a dash of imagination. Whether it's a logo, a banner, or something totally out-of-the-box, I'm always up for the challenge.
              </p>
              <p>
              When I'm not knee-deep in code or tweaking a design, you'll probably find me leveling up in my favorite games.
              </p>
            </div>
            
          </div>

          <div className="skills-section">
            <div className="skills-header">
            </div>
            <div className="skills-div">
              <p>FRONT-END DEV</p>
              <p>UI DESIGN</p>
              <p>UX DESIGN</p>
              <p>GRAPHIC DESIGN</p>
              <p>BRANDING</p>
              <p>ADOBE SUITE</p>
              <p>FIGMA</p>
              <p>INKSCAPE</p>
              <p>GITHUB + GIT</p>
            </div>
          </div>

        </div>

        <ProjectSection/>

        

        <MainFooter/>

        <MainDock/>

    </div>
  )
}

export default LandPage