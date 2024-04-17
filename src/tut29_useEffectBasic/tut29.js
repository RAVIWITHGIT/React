/* 
1.here we discuss about UseEffect 
2.useEffect is combination of lifecycle method of componentDidMount,componentDidUpdate and ComponentWillUnmount
3. when component render then call useEffect,update props then call useEffect ,when remove any component then call useEffect 
4. Mean any change of component then call UseEffect
5. we can also control UseEffect using condition
6. useEffect take two parameter
  I. callback function
  II. blank array which work as conditonal and handle useEffect

*/

import React, { useEffect, useState } from 'react'

const Tut29 = () => {

    // run when Render file
    // useEffect(()=>{
    //     alert("useEffect run")
    // })


    // run when update file
    const [currentvalue,setvalue] = useState(0)
    useEffect(()=>{
        alert("useEffect run when update file")
        
    })
  return (
    <div>
      <h1>useEffect file {currentvalue}</h1>
      <button onClick={()=>{setvalue(currentvalue+1)}}>update count</button>
    </div>
  )
}

export default Tut29
