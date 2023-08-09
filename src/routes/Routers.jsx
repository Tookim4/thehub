import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LandPage from '../pages/LandPage'
import ProjectsPage from '../pages/ProjectsPage';

const Routers = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={LandPage}/>
                <Route path='pages/ProjectsPage' Component={ProjectsPage}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routers