import React from 'react'
import { RiGitCommitLine } from "react-icons/ri";
import { Link } from 'react-router-dom'
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import rick from '../images/rickand morty.webp'
import afreative from '../images/afreative.webp'
import creative from '../images/creative.webp'
import medics from '../images/medicsonboard.webp'
import kratos from '../images/kratos.webp'
import '../components/style.scss'
import NavBarP from '../components/NavBarP';

const ProjectsPage = () => {
  return (
    <div className='projects-div'>

      <NavBarP/>

      <div className='projects-container'>
        <div className="projects-content">

          <div className="projects-grid">
            <a href="https://rick-and-morty-api-sigma.vercel.app/" style={{border: '1px solid #FDE2F3'}} className="grid-items">
                    <img src={rick} alt="" srcset="" />
                    <h4 className="item-title">Rick and Morty Cast API</h4> 
                    <section className="project-info">
                      <h5><RiGitCommitLine style={{paddingRight: '5px'}}/> Rick & Morty Cast site</h5>
                      <p>Made with ReactJS using Axios to fetch from https://rickandmortyapi.com/</p>
                    </section>
                    
            </a>
            <a href="https://afreative.com/" style={{border: '1px solid #FDE2F3'}} className="grid-items">
                <img src={afreative} alt="" srcset="" />
                <h4 className="item-title">Afreative Landpage</h4>
                    <section className="project-info">
                      <h5><RiGitCommitLine style={{paddingRight: '5px'}}/>Afreative's Landing page</h5>
                      <p>Made with ReactJS</p>
                    </section>
            </a>
            <a href="https://creative-touch.vercel.app/" style={{border: '1px solid #FDE2F3'}} className="grid-items">
                <img src={creative} alt="" srcset="" />
                <h4 className="item-title">Creative Touch</h4>
                    <section className="project-info">
                      <h5><RiGitCommitLine style={{paddingRight: '5px'}}/>Creative Touch</h5>
                      <p>Creative Touch's portfolio using ReactJS & Tailwind CSS</p>
                    </section>
            </a>
            <a href="https://medicsonair.vercel.app/" style={{border: '1px solid #FDE2F3'}} className="grid-items">
                <img src={medics} alt="" srcset="" />
                <h4 className="item-title">Medics On Air</h4>
                    <section className="project-info">
                      <h5><RiGitCommitLine style={{paddingRight: '5px'}}/>Medics On Air</h5>
                      <p>ReactJS portfolio for MOA</p>
                    </section>
            </a>
            <a href="https://kratos-dungeonn.vercel.app/" style={{border: '1px solid #FDE2F3'}} className="grid-items">
                <img src={kratos} alt="" srcset="" />
                <h4 className="item-title">Kratos Dungeon</h4>
                   <section className="project-info">
                      <h5><RiGitCommitLine style={{paddingRight: '5px'}}/> Kratos Dungeon Notebook</h5>
                      <p>Simple notebook made using the MERN stack </p>
                    </section>
            </a>
          </div>

       
        </div>
    </div>

    </div>
  )
}

export default ProjectsPage