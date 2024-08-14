import React from 'react'
import rick from '../images/rickand morty.webp'
import afreative from '../images/afreative.webp'
import creative from '../images/creative.webp'
import medics from '../images/medicsonboard.webp'
import kratos from '../images/kratos.webp'
import { RiGitCommitLine } from "react-icons/ri";
import { Link } from 'react-router-dom'
import { LiaExternalLinkAltSolid } from "react-icons/lia";

const ProjectSection = () => {
  return (
    <div className='projects-container'>
        <div className="projects-content">
          <h5 className="projects-title"><RiGitCommitLine style={{paddingRight: '5px'}}/> RECENT PROJECTS</h5>

          <div className="projects-grid">
            <div className="grid-item">
                <a href="https://rick-and-morty-api-sigma.vercel.app/">
                <img src={rick} alt="" srcset="" />
                <h4 className="item-title">Rick and Morty Cast API</h4> 
                </a>
            </div>
            <div className="grid-item">
                <a href="https://afreative.com/">
                <img src={afreative} alt="" srcset="" />
                <h4 className="item-title">Afreative Landpage</h4>
              </a>
            </div>
            <div className="grid-item">
                <a href="https://creative-touch.vercel.app/">
                <img src={creative} alt="" srcset="" />
                <h4 className="item-title">Creative Touch</h4>
              </a>
            </div>
            <div className="grid-item">
                <a href="https://medicsonair.vercel.app/">
                <img src={medics} alt="" srcset="" />
                <h4 className="item-title">Medics On Air</h4>
              </a>
            </div>
          </div>

          <div className="more-projects-container">
           <Link className='projects-link' to={'/pages/ProjectsPage'}>MORE PROJECTS <LiaExternalLinkAltSolid style={{paddingLeft: '5px'}}/></Link>
          </div> 
        </div>
    </div>
  )
}

export default ProjectSection