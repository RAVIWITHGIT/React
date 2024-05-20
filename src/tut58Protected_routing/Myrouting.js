import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home'
import About from './About'
import Contact from './Contact'
import Login from './login'
import Mynav from './Mynav'
import Protected from './protected'
import Logout from './logout'

const Myrouting = () => {
  return (
    <>
    <Mynav/>
      <Routes>
        <Route path='/' element={<Protected Component={Home} />}/>
        <Route path='/about' element={<Protected Component={About}/>}/>
        <Route path='/contact' element={<Protected Component={Contact} />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>}/>
      </Routes>
    </>
  )
}

export default Myrouting
