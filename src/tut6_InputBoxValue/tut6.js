import React, { useState } from 'react'

const Tut6 = () => {
    const [currentvalue,setvalue] = useState(null)
    const [currentp,setp] = useState(false)
    const changevalue =(e)=>{
        // console.log(e.target.value)
        setvalue(e.target.value)
        setp(false)

    }
    const hht=(e)=>{
        console.log(e.target.value)
    }
  return (
    <div className='text-center'>
        {currentp?<h1>{currentvalue}</h1>:null}
      
      <input type='text' onChange={changevalue}/>
      <button onClick={()=>{setp(true)}}>print value</button><br/>
      <input type="checkbox" id="vehicle1" onChange={hht} name="vehicle1" value="Bike"/>
    </div>
  )
}

export default Tut6
