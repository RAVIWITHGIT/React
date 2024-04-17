/*
1. here we discuss about how controll useEffect
2. mean i want run useEffect with specific condition
*/

import React, { useEffect, useState } from 'react'
import Tut30PassProps from './tut30PassProps'

const Tut30 = () => {

    const [count,setcount] = useState(100)
    const [data,setdata] = useState(10)

    // run for all update
    // useEffect(()=>{
    //     console.log('run useeffect')
    // })

    // run specifc conditon
    // useEffect(()=>{
    //     alert('run for count')
    // },[count])

    // useEffect(()=>{
    //     console.warn('run for data')
    // },[data])
  return (
    <div>
      <h1>useEffect file with condition</h1>
      {/* <p>count : {count}</p>
      <p>data : {data}</p> */}

        {/* controle useEffect with props */}
        <Tut30PassProps count={count} data={data}/>

      <button onClick={()=>{setcount(count+1)}}>update count</button>
      <button onClick={()=>{setdata(data+1)}}>update Data</button>
    </div>
  )
}

export default Tut30
