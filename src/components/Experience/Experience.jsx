import React from 'react'
import './Experience.scss'
import { ImHtmlFive2 } from 'react-icons/im'
import { IoLogoCss3 } from 'react-icons/io'
import { FaSass, FaNodeJs, FaBootstrap, FaReact } from 'react-icons/fa'
import { DiJavascript1 } from 'react-icons/di'
import { SiFigma } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have?</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <ImHtmlFive2 className='experience__details--icon' />
              <div><h4>Html</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className="experience__details">
              <IoLogoCss3 className='experience__details--icon' />
              <div><h4>Css</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className="experience__details">
              <FaSass className='experience__details--icon' />
              <div><h4>Sass</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className="experience__details">
              <DiJavascript1 className='experience__details--icon' />
              <div><h4>JavaScript CS6</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className="experience__details">
              <FaReact className='experience__details--icon' />
              <div><h4>ReactJs</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className="experience__details">
              <SiFigma className='experience__details--icon' />
              <div><h4>Figma</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className="experience__details">
              <FaBootstrap className='experience__details--icon' />
              <div><h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <FaNodeJs className='experience__details--icon' />
                <div><h4>NodeJs</h4>
                <small className='text-light'>Experienced</small></div>
              </article>
              <article className="experience__details">
                <GrMysql className='experience__details--icon' />
                <div><h4>MySql</h4>
                <small className='text-light'>Experienced</small></div>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience