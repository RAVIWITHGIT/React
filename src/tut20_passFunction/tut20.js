import React from 'react'
import Tut20as from './tut20as'

const Tut20 = () => {
    function alertFun(){
        alert("This Alert Pass From Super Child")
    }
  return (
    <div className='text-center'>
      <h1>This is Super Child component</h1>
      <Tut20as passfun = {alertFun}/>
    </div>
  )
}

export default Tut20
