import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import weather from '../../assets/images/weather.jpg'
import game from '../../assets/images/game.jpg'
import todo from '../../assets/images/todo-list.png'
import logo from '../../assets/images/logo.png'
import email from '../../assets/images/email.jpg'



function Portfolio() {

    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])

  return (
    <section className="portfolio" id='portfolio'>
        <div className="container">
            <h1 className='portfolio-title'>Portfolio</h1>
            <div className="portfolio-items">
                <h1 className="portfolio-subtitle">All Creative Projects</h1>
            </div>
            <div className="portfolio-images">
                <a href="https://onlineweather.vercel.app" data-aos="fade-up">
                    <img src={weather} className='portfolio-image' alt="weather-app photo" />
                </a>
                <a href="https://bygame.netlify.app" data-aos="fade-up">
                    <img src={game} className='portfolio-image' alt="game-app photo" />
                </a>
                <a href="https://bytodo.vercel.app" data-aos="flip-right">
                    <img src={todo} className='portfolio-image' alt="game-app photo" />
                </a>
                <a href="https://botirovdev.vercel.app" data-aos="flip-left">
                    <img src={logo} className='portfolio-image' alt="game-app photo" />
                </a>

                <a href="https://emailchesk.netlify.app" data-aos="zoom-in">
                    <img src={email} className='portfolio-image' alt="game-app photo" />
                </a>

    
            </div>
        </div>
    </section>
  )
}

export default Portfolio