import React, { createContext,  useState } from 'react'
import Tut72child1 from './Tut72child1'
import Button from './button'

const mycontext = createContext()

const Tut72 = () => {
  const updatefunction = (getcolor)=>{
    setstate({...currentstate,color:getcolor})
  }
  // const getcontext = useContext(currentstate)
  const [currentstate,setstate] = useState({color:"yellow",updatefun:updatefunction})
  return (
    <div>
      <mycontext.Provider value={currentstate}>
      <h2 style={{backgroundColor:currentstate.color}}>Parent file</h2>
      <Tut72child1/>
      <Button/>
      </mycontext.Provider>
    </div>
  )
}

export default Tut72
export {mycontext}
