/***************************************   SearchParams    ***********************************
1. The useSearchParams hook is used to read and modify the query string/query Params in the URL
2. When we write in URL like http://localhost:3000/filter?age=50 then this is called query string , exa age then use SearchParams for get value
3. multiple query params --> age=50&city="jaipur"
4. we can set search Params in second varaible name in array

*/


import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Tut54 = () => {
  const [currentsParames,setSearchParams] = useSearchParams()

    // ******** single query params  --> age=50 , write in URL
    const age = currentsParames.get("age")

    //******** multie query params  -->  age=50&city=jaipur , write in url
    // const age = currentsParames.get("age")
    // const city = currentsParames.get("city")

  return (
    <div className='text-center'>
      <h2>Search Parames hook</h2>
      <h2>age is {age}</h2>
      {/* <h2>city is {city}</h2> */}    //use for multi query params
      <button onClick={()=>setSearchParams({age:30,city:"bassi"})}>set Search Params</button>
    </div>
  )
}

export default Tut54
