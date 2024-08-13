import React from 'react'
import { ReactTyped } from 'react-typed'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h4>Hello, I'm</h4>
            <h1>Pragnavi Ravuluri Sai Durga</h1>
            {/* <h5 className='text-light'>Data Scientist</h5> */}
            <h2>
            <ReactTyped
              strings={["IOS Developer", "DevOps Engineer", "Data Scientist", "Full Stack Developer", "SCCM Administrator", "Automation Systems Engineer", ".Net Developer", "Machine Learning Engineer"]}
              typeSpeed={100}
              loop
              backSpeed={20}
              showCursor={true}
            />
            </h2>
            <CTA />
            <HeaderSocials />

            <div className="me">
                <img src={ME} alt='me' />
            </div>

            <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
};

export default Header