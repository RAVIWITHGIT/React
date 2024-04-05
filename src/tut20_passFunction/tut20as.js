import React from 'react'

const Tut20as = (props) => {
  return (
    <div >
      <h2>This is Inner child component</h2>
      {/* <button onClick={props.passfun}>click Me</button> */}
      <button onClick={()=>{props.passfun()}}>click Me</button> {/*  same see upper only diffrent way call function    */}
    </div>
  )
}

export default Tut20as
