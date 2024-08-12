import React from 'react'
import CV from '../../assets/Pragnavi_RavuluriSaiDurga.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download='Pragnavi_RavuluriSaiDurga.pdf' className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA