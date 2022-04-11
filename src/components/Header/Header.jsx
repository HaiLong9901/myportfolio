import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocial from './HeaderSocial'
import './Header.scss'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Hai Long</h1>
        <h5 className='text-light'>Electrical Engineer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <div className="me__image"><img src={ME} alt="me" /></div>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header