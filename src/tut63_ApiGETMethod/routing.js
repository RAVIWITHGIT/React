import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Tut63GetMethod from './tut63GetMethod'
import DynamicData from './DynamicData'

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Tut63GetMethod/>}/>
        <Route path='/id/:name' element={<DynamicData/>}/>
      </Routes>
    </>
  )
}

export default Routing
