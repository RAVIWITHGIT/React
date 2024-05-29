import React, { useState } from 'react'

const Tut69 = () => {
    const [currentState,setState] = useState(0);
    const [getPrivousState,setPreState] = useState()
    const update = ()=>{
        setState((prv)=>{
            setPreState(prv)
            return Math.floor(Math.random()*10)
        })
    }

    // ----------------------------------------------
    // const update = ()=>{
    //     for(let i=0; i<5; i++){
    //         setState(currentState+1)
    //     }
    // }

    // const update = ()=>{
    //     for(let i=0; i<5; i++){
    //         setState((prv)=>{
    //             return prv+1
    //         })
    //     }
    // }

  return (
    <div className='text-center'>
      <h2 className='text-center'>Privous State {getPrivousState}</h2>
      <h2>current State {currentState}</h2>
      <button onClick={update}>click me</button>
    </div>
  )
}

export default Tut69
