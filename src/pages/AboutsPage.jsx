import React from 'react'
import MainFooter from '../components/MainFooter'
import NavBar from '../components/NavBar'
import './style.scss'
import death from '../images/death.png'

const AboutsPage = () => {
  return (
    <div className='abouts-page'>
        <NavBar/>

        <div className="abouts-div">
          <img src={death} alt="" srcset="" />
            {/* <h3 className="about-header">A</h3> */}
            <p>
            Hi, I'm a front-end developer, Passionate about JavaScript and its ecosystem. I've mastered REACTJS and currently immersed in mastering the entire MERN stack.
            </p>
            <p>I have extensive knowledge of ReactJS and majority of it's libraries. I will create interactive, beautiful and marketable websites for you.  </p>
            <p>Design and Editing is also an interest of mine. Having done several corporate and personal designs, including logos, flyers, banners, cards, intros & outros etc., I am conversant with related tech. This include Adobe products (Photoshop, Illustrator & After Effects), Gimp, Vegas Pro etc.</p>
        </div>

        <MainFooter/>
    </div>
  )
}

export default AboutsPage