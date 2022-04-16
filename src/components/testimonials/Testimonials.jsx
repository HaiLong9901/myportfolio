import React from 'react'
import './Testimonials.scss'
import AVT from '../../assets/me.jpg'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVT} alt="avatar" />
          </div>
          <h5 className='client__name'>Hello world</h5>
          <small className='client__review'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dicta voluptate quaerat suscipit, molestias rem porro dolor voluptatibus quas ducimus.</small>
        </article>
        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVT} alt="avatar" />
          </div>
          <h5 className='client__name'>Hello world</h5>
          <small className='client__review'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dicta voluptate quaerat suscipit, molestias rem porro dolor voluptatibus quas ducimus.</small>
        </article>
        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVT} alt="avatar" />
          </div>
          <h5 className='client__name'>Hello world</h5>
          <small className='client__review'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dicta voluptate quaerat suscipit, molestias rem porro dolor voluptatibus quas ducimus.</small>
        </article>
        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVT} alt="avatar" />
          </div>
          <h5 className='client__name'>Hello world</h5>
          <small className='client__review'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dicta voluptate quaerat suscipit, molestias rem porro dolor voluptatibus quas ducimus.</small>
        </article>
        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVT} alt="avatar" />
          </div>
          <h5 className='client__name'>Hello world</h5>
          <small className='client__review'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dicta voluptate quaerat suscipit, molestias rem porro dolor voluptatibus quas ducimus.</small>
        </article>
        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVT} alt="avatar" />
          </div>
          <h5 className='client__name'>Hello world</h5>
          <small className='client__review'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dicta voluptate quaerat suscipit, molestias rem porro dolor voluptatibus quas ducimus.</small>
        </article>
      </div>
    </section>
  )
}

export default Testimonials