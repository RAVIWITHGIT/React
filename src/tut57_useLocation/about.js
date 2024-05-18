import React from 'react'
import { useLocation } from 'react-router-dom'

const About = () => {
  const mylocation = useLocation()
  console.log(mylocation)
  return (
    <div className='text-center'>
      <h1>about page</h1>
    </div>
  )
}

export default About
