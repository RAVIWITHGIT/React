import React, { useEffect, useState } from 'react'

const Tut66 = () => {
    const [currentData,setData] = useState([])

    const getapi = async ()=>{
        const reqestOptions = {
            method:"GET"
        }
        const res = await fetch('https://dummyjson.com/todos',reqestOptions)
        const result = await res.json()
        // console.log(result.todos)
        setData(result.todos)
    }

    const deleteData = async (id)=>{
        const res = await fetch(`https://dummyjson.com/todos/${id}`,{
            method:"DELETE"
        })
        const result = await res.json();
        console.log(result)
        getapi()

    }

    useEffect(()=>{
        getapi()
    },[])
  return (
    <div>
      <h2>Delete api</h2>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">s.no</th>
      <th scope="col">Todo</th>
      <th scope="col">status</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {
        currentData.map((value,index)=>{
            return (
                <tr>
      <th scope="row">{value.id}</th>
      <td>{value.todo}</td>
      <td>{value.completed==true?"true":"false"}</td>
      <td onClick={()=>deleteData(value.id)}><button>Delete</button></td>
    </tr>
            )

        })
    }
    
    
  </tbody>
</table>
    </div>
  )
}

export default Tut66
