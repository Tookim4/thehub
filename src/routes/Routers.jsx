import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LandPage from '../pages/LandPage'
import ProjectsPage from '../pages/ProjectsPage';
import AboutsPage from '../pages/AboutsPage';

const Routers = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={LandPage}/>
                <Route path='pages/ProjectsPage' Component={ProjectsPage}/>
                <Route path='pages/AboutsPage' Component={AboutsPage}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routers