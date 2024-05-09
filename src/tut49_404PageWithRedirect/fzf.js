import React from 'react'
import { Link } from 'react-router-dom'

const Fzf = () => {
  return (
    <div>
      <h1>404 Page</h1>
      <p>Page Not found</p>
      <h3>go to {<Link to="/">Home Page</Link>}</h3>
    </div>
  )
}

export default Fzf
