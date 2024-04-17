import React, { useEffect } from 'react'

const Tut30PassProps = (props) => {
    useEffect(()=>{
        alert("run only update count")
    },[props.count])
  return (
    <div>
      <p>count :{props.count}</p>
      <p>data :{props.data}</p>
    </div>
  )
}

export default Tut30PassProps
