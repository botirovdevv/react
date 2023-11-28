import React from 'react'
import './assets/styles/Main.scss'
import Navbar from './layout/header/Navbar'
import Header from './layout/header/Header'
import Services from './layout/main/Services'
import Portfolio from './layout/main/Portfolio'
import Tesminoals from './layout/main/Testimonials'
import Contact from './layout/main/Contact'

function App() {


  return (
    <div className='wrapper'>
        <Navbar/>
        <Header/>
        <Services/>
        <Portfolio/>
        <Tesminoals/>
        <Contact/>
    </div>
  )
}

export default App