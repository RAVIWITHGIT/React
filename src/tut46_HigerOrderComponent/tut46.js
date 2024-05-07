/* ***************************8888 Higher Order Component ****************************
1. a component that takes a component as a props and returns anoter component.

*/

import React, { useState } from 'react'

const Tut46 = () => {
  return (
    <div className='text-center'>
      <h1>HOC(higer order component)</h1>
      <HocRed cmp = {Normalfun}/>
      <HocGreen cmp = {Normalfun}/>
      <Hocyellow cmp = {Normalfun}/>
    </div>
  )
}

const HocRed = (props)=>{
    return (
        <div className='bg-danger d-inline-block p-3 m-3 w-25'>
            <props.cmp/>
        </div>
    )
}
const HocGreen = (props)=>{
    return (
        <div className='bg-success d-inline-block p-3 m-3  w-25'>
            <props.cmp/>
        </div>
    )
}
const Hocyellow = (props)=>{
    return (
        <div className='bg-info p-3 m-3 d-inline-block w-25'>
            <props.cmp/>
        </div>
    )
}

const Normalfun = ()=>{
    const [currentvalue,setvalue] = useState(0)
    return (
        <div>
            <h4>{currentvalue }</h4>
            <button onClick={()=>{setvalue(currentvalue+1)}}>update count</button>
        </div>
    )
}

export default Tut46
