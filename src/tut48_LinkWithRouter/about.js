import React from 'react'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div className='text-center'>
      <h1>about file</h1>
      <p>want go {<Link to="/">Home</Link>}</p>

    </div>
  )
}

export default About
