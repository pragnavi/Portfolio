import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
import {BsPatchCheckFill} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>My Technical Suite</h5>
      <h2>Skills</h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>Aritificial Intelligence</h3>
          </div>

          {/* <div className='service__body'> */}
          {/* <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Random text</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Random text random text, random text random text.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Random text random text, random text random text.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Random text random text, random text random text.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Random text random text, random text random text.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Random text random text, random text random text.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Random text random text, random text random text.</p>
            </li>
          </ul> */}
          {/* <article className='experience__details'> */}
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Machine Learning</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Computer Vision</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Scikit-learn</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>OpenCV</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>PyTorch</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Scikit-Image</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>TensorFlow</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>OCR</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Generative AI</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>YOLO</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Deep Learning</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Robotics</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>CNN</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>ROS</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>RNN</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Gazebo</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>GAN</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Unity</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Big Data</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Data Science</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Hadoop</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>SQL</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Spark</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Power BI</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Kafka</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Scala</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>MapReduce</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>R</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Numpy</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Pandas</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Agile Scrum</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Advanced Excel</h4>
            </li>
          </ul>
          {/* </article> */}
          {/* </div> */}
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Mobile & Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>IOS</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Swift</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Objective-C</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>UIKit</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>AutoLayout</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>XCode</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>RESTful API</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Git</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>SwiftUI</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>HTML5</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>CSS3</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Bootstrap</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>JavaScript</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Flask</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>React.js</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Selenium</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>PHP</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>MySQL</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>PostgreSQL</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>MongoDB</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>ASP .NET MVC</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>C#</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>.NET Framework</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>.NET Core</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>JSON</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>XML</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Python</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Java</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>C-language</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>C++</h4>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Information Technology</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Powershell Scripting</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Visual Basic Scripting</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Microsoft SCCM</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Microsoft Intune</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>SMT Ticketing Tool</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Microsoft Azure</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Microsoft SQL Server</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Azure Active Directory</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Jira</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>VMWare</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Device Enrollment</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Software Packaging</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Patching</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Policy Management</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Application Deployment</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Compliance Enforcement</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Task Sequence Management</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Operating System Deployment</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>ITIL</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>Microsoft 365</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>TCP/IP</h4>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <h4>DNS</h4>
            </li>
          </ul>
        </article>
      </div>

    </section>
  )
};

export default Services