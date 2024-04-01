import React, { useState } from 'react'

const Tut7 = () => {
    const [currentvalue,setvalue] = useState(true)
  return (
    <div>
        {
            currentvalue?<h1>hello ravi how are you</h1>:null
        }
      
        <button className='btn btn-success' onClick={()=>{setvalue(true)}}>show</button>
        <button className='mx-3 btn btn-primary' onClick={()=>{setvalue(false)}}>hide</button>
        <button className='btn btn-warning' onClick={()=>{setvalue(!currentvalue)}}>togle</button>
    </div>
  )
}

export default Tut7
