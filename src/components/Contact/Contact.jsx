import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import './Contact.scss'
import { HiOutlineMail } from 'react-icons/hi'
import { BsMessenger } from 'react-icons/bs'
import { SiZalo } from 'react-icons/si'

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7xtiaew', 'template_wkhtkki', form.current, 'VpLnM9ZL-b7IoQgpO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>dohailong9901@gmail.com</h5>
            <a href="mailto:dohailong9901@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsMessenger className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Hải Long</h5>
            <a href="https://m.me/" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <SiZalo className='contact__option-icon' />
            <h4>Zalo</h4>
            <h5>0356789100</h5>
            <a href="https://chat.zalo.me/">Send a message</a>
          </article>
        </div>

        <form action="" ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder='Enter your full name' name='name' required />
          <input type="email" placeholder='Enter your email' name='email' required />
          <textarea name="message" rows="7" placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact