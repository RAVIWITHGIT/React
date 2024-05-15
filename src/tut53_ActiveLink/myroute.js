import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home'
import About from './about'
import Contact from './contact'

const Myroute = () => {
  return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
  )
}

export default Myroute
