import React, { useState } from 'react'


/*
 Here this problem is when we update one key then also remove second key . solution in lower code where we use spread oprator
 */


// const Tut71 = () => {
//     const [currentState,setstate] = useState({name:"ravi",age:"22"})
//   return (
//     <div className='text-center'>
//       <h2>State with Props</h2>
//       <input type="text" value={currentState.name} onChange={(e)=>setstate({name:e.target.value})} placeholder='enter your name' />
//       <input type="text" value={currentState.age} onChange={(e)=>setstate({age:e.target.value})} placeholder='enter your age' />
//       <h3>Name {currentState.name}</h3>
//       <h3>Age {currentState.age}</h3>
//     </div>
//   )
// }


// solution of upper code using spread Oprator
// const Tut71 = () => {
//     const [currentState,setstate] = useState({name:"ravi",age:"22"})
//   return (
//     <div className='text-center'>
//       <h2>State with Props</h2>
//       <input type="text" value={currentState.name} onChange={(e)=>setstate({...currentState,name:e.target.value})} placeholder='enter your name' />
//       <input type="text" value={currentState.age} onChange={(e)=>setstate({...currentState,age:e.target.value})} placeholder='enter your age' />
//       <h3>Name {currentState.name}</h3>
//       <h3>Age {currentState.age}</h3>
//     </div>
//   )
// }



//use array
const Tut71 = () => {
    const [currentState,setstate] = useState([1,2,3,4,5])
    const changefirst=(e)=>{
      currentState[0] =e.target.value
      setstate([...currentState])
      console.log(currentState)
    }
    const changesecond=(e)=>{
    currentState[1] = e.target.value
      setstate([...currentState])
    }
  return (
    <div className='text-center'>
      <h2>State with Props</h2>
      <input type="text" value={currentState[0]} onChange={changefirst} placeholder='enter your name' />
      <input type="text" value={currentState[1]} onChange={changesecond} placeholder='enter your age' />
      <h3>first value {currentState[0]}</h3>
      <h3>second value {currentState[1]}</h3>
    </div>
  )
}
export default Tut71
