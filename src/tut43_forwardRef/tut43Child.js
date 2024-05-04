/* when we get ref which send as argument in parent file then we write two parameter and second parameter get ref 
make sure child component wrap in forwardRef , which we write in bottom

*/


import React,{forwardRef} from 'react'

const Tut43Child = (props,myref) => {
  return (
    <div>
      <input className='mb-3' type="text" ref={myref}/>
    </div>
  )
}

export default forwardRef( Tut43Child)
