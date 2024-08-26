import React from 'react'
import rick from '../images/rickand morty.webp'
import afreative from '../images/afreative.webp'
import creative from '../images/creative.webp'
import medics from '../images/medicsonboard.webp'
import { RiGitCommitLine } from "react-icons/ri";
import { Link } from 'react-router-dom'
import { LiaExternalLinkAltSolid } from "react-icons/lia";

const ProjectSection = () => {
  return (
    <div className='projects-container'>
        <div className="projects-content">
          <h5 className="projects-title"><RiGitCommitLine style={{paddingRight: '5px'}}/> RECENT PROJECTS</h5>

          <div className="projects-grid">
            <a href="https://rick-and-morty-api-sigma.vercel.app/" className="grid-item">
                    <img src={rick} alt="" />
                    <h4 className="item-title">Rick and Morty Cast API</h4> 
            </a>
            <a href="https://afreative.com/" className="grid-item">
                <img src={afreative} alt=""  />
                <h4 className="item-title">Afreative Landpage</h4>
            </a>
            <a href="https://creative-touch.vercel.app/" className="grid-item">
                <img src={creative} alt="" />
                <h4 className="item-title">Creative Touch</h4>
            </a>
            <a href="https://medicsonair.vercel.app/" className="grid-item">
                <img src={medics} alt="" />
                <h4 className="item-title">Medics On Air</h4>
            </a>
          </div>

          <div className="more-projects-container">
           <Link className='projects-link' to={'/pages/ProjectsPage'}>MORE PROJECTS <LiaExternalLinkAltSolid style={{paddingLeft: '5px'}}/></Link>
          </div> 
        </div>
    </div>
  )
}

export default ProjectSection