import React, { useEffect } from 'react'
import 'boxicons'
import AOS from 'aos'

function Footer() {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])
  return (
    <section className="footer">
        <div className="container">
            <h1 className='footer-title' data-aos="fade-down">Let’s be Friends</h1>
            <div className="footer-icons">
                <a href="https://instagram.com/dilmuradov1ch_" data-aos="fade-right">
                    <box-icon type='logo' name='instagram' color='#8643dc'></box-icon>
                </a>
                <a href="https://t.me/mustafo_dv" data-aos="fade-down">
                    <box-icon name='telegram' type='logo' color='#8643dc' ></box-icon>
                </a>

                <a href="https://github.com/botirovdevv" data-aos="fade-left">
                    <box-icon name='github' type='logo' color='#8643dc' ></box-icon>
                </a>
            </div>

            <h1 className='footer-subtitle'>Mustafo botirov | 2023</h1>

        </div>
    </section>
  )
}

export default Footer