import React, { useState } from 'react'
import PrivousProps from './PrivousProps'

const Tut70 = () => {
    const [currentvalue,setvalue] = useState(0)
  return (
    <div className='text-center'>
      <PrivousProps count={currentvalue}/>
      <button onClick={()=>setvalue(currentvalue+1)}>update value</button>
    </div>
  )
}

export default Tut70
