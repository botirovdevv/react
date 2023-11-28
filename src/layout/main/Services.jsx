import React, { useEffect } from 'react'
import { data } from '../../data/data'
import 'aos/dist/aos.css'
import AOS from 'aos'
function Services() {
    useEffect(() => {
        AOS.init({duration: 1600})
    }, [])
  return (
    <section className="services"  >
        <div className="container">
            <div className="services-content">
                <div className="services-box">
                    <h1 className="services-title" data-aos="fade-left">Services</h1>
                </div>
                <h1 className="services-subtitle">What  actually I love to do</h1>
                <div className="services-info" data-aos="fade-up">
                {
                    data.map((item, key) => (
                        <div key={item.id}>
                            <div className="services-name" >
                                <img src={item.img} alt="icon" className='services-icons' />
                                <h1 className='services-name_title'>{item.title}</h1>
                            </div>
                            <p className="services-text">{item.text}</p>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
