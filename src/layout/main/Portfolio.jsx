import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { projects } from '../../data/projects'

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
                <div className="portfolio-first">
                    {
                        projects.map((item, key) => (
                            <a href={item.address} data-aos="fade-down-right">
                                <img src={item.img} className='portfolio-image' alt="project photo" />
                            </a>
                        ))
                    }
                  
                </div>
                


    
            </div>
        </div>
    </section>
  )
}

export default Portfolio