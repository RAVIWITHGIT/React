import React, { useState } from 'react'


const Tut3 = () => {


    const [currentValue, setValue] = useState("ravi")
function cb(){
    setValue("shiv")
}
console.log("___________________________________=====================")

  return (
    <div>
      <h1>this is tutorial 3 and discuss about useState</h1>
      <h2>{currentValue}</h2>
      <button type='button' onClick={cb} className='btn btn-primary'>click btn</button>
    </div>
  )
}

export default Tut3
