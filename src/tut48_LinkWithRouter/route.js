import React from 'react'
import { BrowserRouter, Routes ,Route} from "react-router-dom"
import Home from './home'
import About from './about'
import Nav from './nav'

const MRoute = () => {
  return (
    <>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
            
      </Routes>
    </>
  )
}

export default MRoute
