import React from 'react'
import { useLocation } from 'react-router-dom'

const Contact = () => {
    const mylocation = useLocation()
    console.log(mylocation)
  return (
    <div>
      <h1>contact page</h1>
    </div>
  )
}

export default Contact
