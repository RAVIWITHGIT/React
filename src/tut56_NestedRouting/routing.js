import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Tut56 from './tut56'
import Compnay from './compnay'
import Channel from './Channel'
import Other from './Other'

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Tut56/>}>
            <Route path='/company' element={<Compnay/>}/>
            <Route path='/channel' element={<Channel/>}/>
            <Route path='/other' element={<Other/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default Routing
