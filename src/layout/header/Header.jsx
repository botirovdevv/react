import React, { useEffect } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import 'aos/dist/aos.css'
import AOS from 'aos'

function Header() {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])
  return (
    <header className='header' id='home'>
        <div className="container">
            <div className="header-content"> 
                <div className='header-items'>
                    <h3 className='header-text' data-aos="flip-down">Hello</h3>
                    <h1 className='header-name_text' data-aos="flip-down">Mustafo Botirov</h1>
                    <h1 className='header-info'>
                    i am{' '}
                    <span>
                        <Typewriter
                            words={['Frontend', 'Developer']}
                            loop={Infinity}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                    </h1>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header