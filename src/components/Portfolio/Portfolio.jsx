import React from 'react'
import './Portfolio.scss'
import IMG from '../../assets/me.jpg'

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item--image">
            <img src={IMG} alt="portfolio" />
          </div>
          <h3>Title</h3>
          <div className="portfolio__item--cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live code</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item--image">
            <img src={IMG} alt="portfolio" />
          </div>
          <h3>Title</h3>
          <div className="portfolio__item--cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live code</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item--image">
            <img src={IMG} alt="portfolio" />
          </div>
          <h3>Title</h3>
          <div className="portfolio__item--cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live code</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item--image">
            <img src={IMG} alt="portfolio" />
          </div>
          <h3>Title</h3>
          <div className="portfolio__item--cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live code</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item--image">
            <img src={IMG} alt="portfolio" />
          </div>
          <h3>Title</h3>
          <div className="portfolio__item--cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live code</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item--image">
            <img src={IMG} alt="portfolio" />
          </div>
          <h3>Title</h3>
          <div className="portfolio__item--cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live code</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item--image">
            <img src={IMG} alt="portfolio" />
          </div>
          <h3>Title</h3>
          <div className="portfolio__item--cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live code</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item--image">
            <img src={IMG} alt="portfolio" />
          </div>
          <h3>Title</h3>
          <div className="portfolio__item--cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live code</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item--image">
            <img src={IMG} alt="portfolio" />
          </div>
          <h3>Title</h3>
          <div className="portfolio__item--cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live code</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item--image">
            <img src={IMG} alt="portfolio" />
          </div>
          <h3>Title</h3>
          <div className="portfolio__item--cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live code</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio