import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { swiperData } from '../../data/swiperData';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import AOS from 'aos'
import 'aos/dist/aos.css'

import billGates from '../../assets/images/billGates.jpg'
import steveJobs from '../../assets/images/steveJobs.jpg'
import elonMusk from '../../assets/images/elonMusk.jpg'
import mark from '../../assets/images/markZuckerberg.jpg'

function Tesminoals() {
  useEffect(() => {
      AOS.init({duration: 2000})
  }, [])
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-content">
          <h1 className="testimonials-title" data-aos="fade-right">Testimonials</h1>
          <h2 className='testimonials-subtitle'>What People Says</h2>
          <div className="testimonials-info">
            <img src={elonMusk} data-aos="fade-right" className='testimonials-image1' alt="" />
            <img src={mark} data-aos="fade-right" className='testimonials-image2' alt="" />
            <img src={billGates} data-aos="zoom-in" className='testimonials-image3' alt="" />
            <img src={steveJobs} data-aos="fade-left" className='testimonials-image4' alt="" />
           <Swiper
            slidesPerView={1}
            spaceBetween={100}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {
              swiperData.map((item, key) => (
                  <SwiperSlide  key={key} >
                    <div className='testimonials-items' data-aos="flip-down">
                      <img src="./src/assets/images/img.png" className='testimonial-images' alt="" />
                      <p className="testimonials-text">{item.text}</p>
                      <img src={item.img} className='testimonials-famous' alt={item.name} />
                      <h1 className='testimonials-name'>{item.name}</h1>
                    </div>
                  </SwiperSlide>
              ))
            }
          </Swiper> 
          </div>

            

        </div>
      </div>
    </section>
  )
}

export default Tesminoals