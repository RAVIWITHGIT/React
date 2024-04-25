import React from 'react'
import Child from './child'

const data = [
    {
        name:"ravi",
        from:"jaipur",
        country:"India"
    },
    {
        name:"ram",
        from:"bassi",
        country:"India"
    },
    {
        name:"shyam",
        from:"delhi",
        country:"India"
    },
]

const Tut36 = () => {
  return (
    <div className='text-center'>
      <h3>Reuse Component with List</h3>
      {
        data.map((value,i)=>{
            return (

                <Child key={i} passvalue={value}/>
            )
        })
      }
    </div>
  )
}

export default Tut36
