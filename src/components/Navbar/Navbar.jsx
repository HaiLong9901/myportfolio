import React, { useState } from 'react'
import './Navbar.scss'
import { BiHomeAlt } from 'react-icons/bi'
import { FiUser } from 'react-icons/fi'
import { BsBook } from 'react-icons/bs'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" className={activeNav === '#'?'active':''}><BiHomeAlt /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about'?'active':''}><FiUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience'?'active':''}><BsBook /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services'?'active':''}><RiServiceLine /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact'?'active':''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Navbar