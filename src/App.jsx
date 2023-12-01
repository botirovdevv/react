import React, { useEffect, useState } from 'react'
import './assets/styles/Main.scss'
import Navbar from './layout/header/Navbar'
import Header from './layout/header/Header'
import Services from './layout/main/Services'
import Portfolio from './layout/main/Portfolio'
import Tesminoals from './layout/main/Testimonials'
import Contact from './layout/main/Contact'
import {  ThreeDots } from 'react-loader-spinner'

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  },[])

  return (


    <div className='wrapper'>
      {
        loading ? 
        <div className='loader'>
          <ThreeDots 
            height="90" 
            width="90" 
            radius="9"
            color="red" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />

        </div>
          :
          <div>

            <Navbar/>
            <Header/>
            <Services/>
            <Portfolio/>
            <Tesminoals/>
            <Contact/>
          </div>
      }

    </div>
  )
}

export default App