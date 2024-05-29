import React from 'react'
import { BrowserRouter, Routes ,Route} from "react-router-dom"
import Home from './home'
import About from './about'
import User from './user'


const Sroute = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/:myname" element={<User/>}/>
      </Routes>
    </div>
  )
}

export default Sroute