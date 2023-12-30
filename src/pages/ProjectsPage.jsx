import React from 'react'
import NavBar from '../components/NavBar'
import MainFooter from '../components/MainFooter'
import rickimg from '../images/pngwing.png'
import hoverimg from '../images/death.png'

const ProjectsPage = () => {
  return (
    <div className='projects-div'>
      <NavBar/>

        {/* we will have an easy navbar here */}

        <div className="code-projects">

          <a target='_blank' href="https://rick-and-morty-api-sigma.vercel.app/">
              <div className="code-content">
                  <div class="image-container">
                    <img src={rickimg} alt="" className='project-logo' />
                    </div>

                    <div className="project-title">
                      <h4 className="project-name">Rick & Morty-api</h4>
                      <hr />
                      <p className="tech">REACTJS | JS | CSS </p>
                      <p className="year">2020</p>
                  </div>

                  <div className="hoverimg-div">
                     <img src={hoverimg} alt="" className="hover-img" />
                  </div>
              </div>
            </a>

            <a target='_blank' href="https://afreative.com">
              <div className="code-content">
                  <div class="image-container">
                    <img src={rickimg} alt="" className='project-logo' />
                    </div>

                    <div className="project-title">
                      <h4 className="project-name">Afreative</h4>
                      <hr />
                      <p className="tech">REACTJS | JS | SASS | </p>
                      <p className="year">2020</p>
                  </div>

                  <div className="hoverimg-div">
                     <img src={hoverimg} alt="" className="hover-img" />
                  </div>
              </div>
            </a>

            <a target='_blank' href="https://rick-and-morty-api-sigma.vercel.app/">
              <div className="code-content">
                  <div class="image-container">
                    <img src={rickimg} alt="" className='project-logo' />
                    </div>

                    <div className="project-title">
                      <h4 className="project-name">Kratos Dungeon</h4>
                      <hr />
                      <p className="tech">REACTJS | JS | CSS </p>
                      <p className="year">2020</p>
                  </div>

                  <div className="hoverimg-div">
                     <img src={hoverimg} alt="" className="hover-img" />
                  </div>
              </div>
            </a>

        </div>


      <MainFooter/>
    </div>
  )
}

export default ProjectsPage