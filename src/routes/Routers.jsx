import React, {useState, useEffect} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LandPage from '../pages/LandPage'
import ProjectsPage from '../pages/ProjectsPage';
import AboutsPage from '../pages/AboutsPage';
import { quantum } from 'ldrs'

const Routers = () => {
  const [loading, setLoading] = useState(true);

  quantum.register()

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
          <l-quantum
            size="75"
            speed="2.5" 
            color="#917FB3" 
          />
        </div>
      ) : (
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={LandPage}/>
                <Route path='pages/ProjectsPage' Component={ProjectsPage}/>
                <Route path='pages/AboutsPage' Component={AboutsPage}/>
            </Routes>
        </BrowserRouter>
            )}
    </div>
  )
}

export default Routers