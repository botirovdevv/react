import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'

function Contact() {
    useEffect(() => {
        AOS.init({duration: 1600})
    }, [])
  return (
    <section className="contact" id='contact' >
      <div className="container">
        <div className="contact-content">
          <h1 className='contact-title' >Contact Me</h1>
          <div className="contact-items">
            <p className='contact-subtitle' data-aos="flip-left">
              Let me know if you want to talk 
              about a potential collaboration.
              I'm available for freelance work.
            </p>
            <a href="#" className='contact-link'>botirovdev7@mail.com</a>
          </div>
          <form className='contact-form'>
            <input type="text" maxLength={45} data-aos="flip-up" placeholder='What’s your name?' className='contact-input' />
            <input type="text" maxLength={50} data-aos="flip-up"  placeholder='Your email' className='contact-input' />
            <input type="text" maxLength={250} data-aos="flip-up" placeholder='Tell me about your project' className='contact-input' />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact