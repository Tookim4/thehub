import React from 'react'
import MainFooter from '../components/MainFooter'
import NavBar from '../components/NavBar'
import './style.scss'
import death from '../images/death.png'
import MyResume from '../components/MyResume'

const AboutsPage = () => {
  return (
    <div className='abouts-page'>
        <NavBar/>

        <div className="abouts-div">
          <img src={death} alt="" srcset="" />
            {/* <h3 className="about-header">A</h3> */}
            <p>
            Hello, I'm a front-end developer with a strong passion for JavaScript and its ecosystem, particularly ReactJS. I've mastered React and am currently immersed in mastering the entire MERN stack.
            </p>
            <p>My expertise in ReactJS extends to a wide array of its libraries, enabling me to create interactive, aesthetically pleasing, and marketable websites.</p>
            <p>In addition to development, I have a keen interest in design and editing. I've worked on various corporate and personal design projects, which include logos, flyers, banners, cards, intros, outros, and more. Proficient in Adobe products such as Photoshop, Illustrator, and After Effects, as well as tools like Gimp and Vegas Pro, I'm well-versed in the technology needed to bring creative visions to life.</p>

            <div className="resume-section">
              <MyResume/> 
            </div>
        </div>

        

        <MainFooter/>
    </div>
  )
}

export default AboutsPage