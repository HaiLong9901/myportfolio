import React from 'react'
import './About.scss'
import me from '../../assets/me.jpg'
import { RiAwardLine } from 'react-icons/ri'
import { FaGraduationCap } from 'react-icons/fa'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me--image">
            <img src={me} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <RiAwardLine className='about__icon' />
              <h5>Experience</h5>
              <small>3+</small>
            </article>

            <article className='about__card'>
              <FaGraduationCap className='about__icon' />
              <h5>Education</h5>
              <small>3+</small>
            </article>

            <article className='about__card'>
              <RiAwardLine className='about__icon' />
              <h5>Experience</h5>
              <small>3+</small>
            </article>

            <article className='about__card'>
              <RiAwardLine className='about__icon' />
              <h5>Experience</h5>
              <small>3+</small>
            </article>
          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis neque accusantium expedita officia accusamus vero, harum dolores earum iste omnis laborum eos deserunt, doloremque incidunt, molestiae aut fugit quisquam vel?
            Quam quos minus ut. Ipsum voluptatibus possimus magnam ab doloribus soluta libero vel, vero sint facere animi tempore earum tenetur quidem, placeat nostrum, commodi illo ipsam adipisci necessitatibus iure id?
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About