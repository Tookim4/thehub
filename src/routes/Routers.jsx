import React, {useState, useEffect} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LandPage from '../pages/LandPage'
import ProjectsPage from '../pages/ProjectsPage';
import { cardio } from 'ldrs'
import DesignsPage from '../pages/DesignsPage';

const Routers = () => {
  const [loading, setLoading] = useState(true);

  cardio.register()

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  })

  return (
    <div>
        {loading ? (
        <div className="loading">
          <l-cardio
            size="75"
            speed="3" 
            stroke='1.5'
            color="#917FB3" 
          />
        </div>
      ) : (
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={LandPage}/>
                <Route path='pages/ProjectsPage' Component={ProjectsPage}/>
                <Route path='pages/DesignsPage' Component={DesignsPage}/>
            </Routes>
        </BrowserRouter>
            )}
    </div>
  )
}

export default Routers