import React from 'react'
import Nav from './Components/Nav'
import BreadCrumbs from './Components/BreadCrumbs'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
    <Nav/>
    <BreadCrumbs/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App