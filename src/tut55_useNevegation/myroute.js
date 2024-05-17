import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Tut55 from './tut55home'
import Tut55about from './tut55about'
import UseNev from './useNev'

const Myroute = () => {
  return (
    <>
     <Routes>
        <Route path='/' element={<UseNev/>}/>
        <Route path='/home' element={<Tut55/>}/>
        <Route path='/about' element={<Tut55about/>}/>
     </Routes>
    </>
  )
}

export default Myroute
