import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = () => {
      const location = useLocation()

  useEffect(()=>{

    document.body.scrollIntoView({
      behavior:'smooth',
      block:'start',
    })

  },[location.pathname])
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
     
      <Outlet></Outlet>
     
      <Footer />
    </div>
  )
}

export default MainLayout