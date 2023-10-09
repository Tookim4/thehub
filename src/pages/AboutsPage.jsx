import React from 'react'
import MainFooter from '../components/MainFooter'
import NavBar from '../components/NavBar'
import './style.scss'

const AboutsPage = () => {
  return (
    <div className='abouts-page'>
        <NavBar/>

        <div className="abouts-div">
            <h3 className="about-header">A</h3>
            <p>
            Hi, I'm a front-end developer, Passionate about JavaScript and its ecosystem. I've mastered REACTJS and currently immersed in mastering the entire MERN stack.
            </p>
        </div>

        <MainFooter/>
    </div>
  )
}

export default AboutsPage