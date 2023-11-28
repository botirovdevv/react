import React, { useState } from 'react'
import { linksData } from '../../data/linksData'
import { Link } from 'react-scroll'
import logo from '../../assets/images/logo.png'

function Navbar() {
    const [active, setActive] = useState("navbar-links")
    const [toggleIcon, setToggleIcon] = useState("navbar-toggler")

    const navToggleClose = () => {
        setActive('navbar-links');
        setToggleIcon('navbar-toggler')

    }

    const navToggle = () => {
         if(active === "navbar-links"){
            setActive('navbar-links navbar-active')
        } else{
            setActive('navbar-links')
        }

        toggleIcon === 'navbar-toggler' ? setToggleIcon('navbar-toggler toggle') : setToggleIcon('navbar-toggler')
    }
  return (
    <nav className='navbar'>
        <div className="navbar-container">
            <div>
                <a href="/">
                    <img className="navbar-logo" src={logo} alt="logo" />
                </a>
            </div>
            <div className={active}>
                {
                    linksData.map((item, key) => (
                        <Link key={item.id} className='navbar-link' onClick={navToggleClose} to={item.title} smooth={true} offset={0} duration={600}>{item.title}</Link>
                    ))
                }
            </div>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar