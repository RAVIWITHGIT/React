import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Tut57 from './tut57'
import About from './about'
import Contact from './contact'

const Myrouting = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Tut57/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default Myrouting
