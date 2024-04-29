import React, { useMemo, useState } from 'react'

const Tut40 = () => {
    const [currentcount,setcount] = useState(5)
    const [currenitem,setitem] = useState(2)
    // const table = ()=>{
    //     console.log("run table function")
    //     return currentcount*2
    // }

    const table = useMemo(()=>{
        console.log("run useMemo")
        return currentcount*2
    },[currentcount])
  return (
    <div className='text-center'>
      <h3>useMemo in react js</h3>
      <h4>count {currentcount}</h4>
      <h4>item {currenitem}</h4>
      <h5>{table}</h5>
      <button onClick={()=>{setcount(currentcount+5)}}>add count</button>
      <button onClick={()=>{setitem(currenitem*2)}}>add item</button>
    </div>
  )
}

export default Tut40
