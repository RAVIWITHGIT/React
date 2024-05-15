import React from 'react'
import Nav from './nav'
import { useParams } from 'react-router-dom'

const User = () => {
    const parames = useParams();
    // console.log(parames)
    const {myname} = parames
    console.log(myname)
  return (
    <div className='text-center'>
        <Nav/>
      <h1>{myname} User page</h1>
    </div>
  )
}

export default User
