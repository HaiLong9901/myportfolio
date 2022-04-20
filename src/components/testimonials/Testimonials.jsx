import React from 'react'
import './Testimonials.scss'
import AVT from '../../assets/me.jpg'
import { Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
              modules={[Navigation, Pagination]}
              spaceBetween={40}
              slidesPerView={1}
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
      >
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVT} alt="avatar" />
          </div>
          <h5 className='client__name'>Hello world</h5>
          <small className='client__review'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dicta voluptate quaerat suscipit, molestias rem porro dolor voluptatibus quas ducimus.</small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVT} alt="avatar" />
          </div>
          <h5 className='client__name'>Hello world</h5>
          <small className='client__review'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dicta voluptate quaerat suscipit, molestias rem porro dolor voluptatibus quas ducimus.</small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVT} alt="avatar" />
          </div>
          <h5 className='client__name'>Hello world</h5>
          <small className='client__review'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dicta voluptate quaerat suscipit, molestias rem porro dolor voluptatibus quas ducimus.</small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVT} alt="avatar" />
          </div>
          <h5 className='client__name'>Hello world</h5>
          <small className='client__review'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dicta voluptate quaerat suscipit, molestias rem porro dolor voluptatibus quas ducimus.</small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVT} alt="avatar" />
          </div>
          <h5 className='client__name'>Hello world</h5>
          <small className='client__review'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dicta voluptate quaerat suscipit, molestias rem porro dolor voluptatibus quas ducimus.</small>
        </SwiperSlide>
        
      </Swiper>
    </section>
  )
}

export default Testimonials