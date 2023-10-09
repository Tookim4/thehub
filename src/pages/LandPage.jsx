import React from 'react'
import './style.scss'
import MainFooter from '../components/MainFooter'
import NavBar from '../components/NavBar'

const LandPage = () => {
  return (
    <div>
      <div className="home_page">
       <NavBar/>
       
            <div className="landpage-content">
              <h1 className="main-header">DeathStroke</h1>
              <p>KIMUTAI TOO | FRONT-END DEVELOPER & DESIGNER</p>
            </div>
       <MainFooter/>      
       </div>
    </div>
  )
}

export default LandPage