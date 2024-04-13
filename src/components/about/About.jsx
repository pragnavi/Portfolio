import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa';
import {FaUser} from 'react-icons/fa';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        {/* <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt='About Image' />
          </div>
        </div> */}
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Academic Experience</h5>
              <small>9+ Years</small>
            </article>
            <article className='about__card'>
              <FaUser className='about__icon'/>
              <h5>Industry Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Technical Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>

          <p>
          As a multifaceted software developer with a Master's degree from New York University, I specialize in delivering innovative solutions across diverse platforms including iOS, web, and machine learning. With a robust background in iOS app development using Swift, data analytics through Python and R, and secure software architecture with .NET, my skill set is well-rounded and dynamic. My proficiency is further enhanced by expertise in PowerShell for efficient process automation.
          </p>

          
        </div>

        <div className='about__text'>
          <p>
          During my two-year tenure at Robert Bosch, I not only contributed to software development but also excelled as an SCCM and Intune administrator, managing and optimizing enterprise-wide systems. This role deepened my understanding of network and system administration, reinforcing my technical versatility.
          Additionally, my experience as a Teaching Assistant for a Computer Vision course at NYU has cemented my knowledge in artificial intelligence, equipping me with the necessary skills to transform complex challenges into groundbreaking technological advancements. I am driven to leverage this expertise to innovate and lead in the field of software development.
          </p>
          <a href='#contact' className='btn btn-primary'>Contact Me</a>
        </div>

      </div>
    </section>
  )
};

export default About