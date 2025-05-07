import React from 'react'
import NavBarD from '../components/NavBarD'
import LogosGrid from '../components/LogosGrid'
import {designProjects} from '../components/ImageArray'
import '../components/style.scss'

const DesignsPage = () => {
  return (
    <div className='designs-page'>
        <NavBarD/>

        <div className="designs-container">

            <div className="logos">
              <p className='design-titles'>Logos</p>
                <div className="logos-grid">
                {designProjects.map((project, index) => (
                    <LogosGrid
                    key={index}
                    images={project.images}
                    title={project.title}
                    />
                ))}
                </div>
            </div>

            {/* <div className="logos">
              <p className='design-titles'>Posters</p>
                <div className="logos-grid">
                {designProjects.map((project, index) => (
                    <LogosGrid
                    key={index}
                    images={project.images}
                    title={project.title}
                    />
                ))}
                </div>
            </div> */}

        </div>
    </div>
  )
}

export default DesignsPage