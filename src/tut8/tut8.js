import React, { useState } from 'react'

const Tut8 = () => {
    const [disblevalue,setdisable] = useState(true)
    const [textValue,setText] = useState()
    const [getoption,setoption] = useState()
    const [getcondition,setcondtition] = useState()
    const controleForm = (e)=>{
        e.preventDefault()
        console.log(textValue)
        console.log(getoption)
        console.log(getcondition)
    }
  return (
    <div className='text-center'>
        <h1 className='text-center'>file the form</h1>
      <form onSubmit={controleForm} className='text-center' >
        {
            disblevalue?<input type='text'  onChange={(e)=>{setText(e.target.value)}} />:<input type='text'  onChange={(e)=>{setText(e.target.value)}} disabled/>
        }
        <br/><br/>
        <select onChange={(e)=>{setoption(e.target.value)}}>
            <option>car</option>
            <option>bike</option>
            <option>bicycle</option>
        </select><br/><br/>
        <input type='checkbox' onChange={(e)=>{setcondtition(e.target.checked)}}/><span className='ms-2'>are you sure?</span><br/>
        <button>submit</button><br/><br/>
      </form>
        <button onClick={()=>{setdisable(false)}}>disable</button>
        <button onClick={()=>{setdisable(true)}}>unable</button>
    </div>
  )
}

export default Tut8
