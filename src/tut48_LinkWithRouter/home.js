import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='text-center'>
      <h1>home file</h1>
      <p>want go {<Link to="/about">about</Link>}</p>
    </div>
  )
}

export default Home
