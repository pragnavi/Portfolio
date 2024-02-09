import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BiLogoGmail} from 'react-icons/bi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com/in/pragnavirsd' target='_blank' rel='noreferrer'><BsLinkedin /></a>
        <a href='https://github.com/pragnavi' target='_blank' rel='noreferrer'><FaGithub /></a>
        <a href='mailto:pragnavi1398@gmail.com?cc=pr2370@nyu.edu' target='_blank' rel='noreferrer'><BiLogoGmail /></a>
    </div>
  )
}

export default HeaderSocials