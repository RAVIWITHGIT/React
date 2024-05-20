import React, { useEffect, useState } from 'react'
import { redirect } from 'react-router-dom'

const Tut63GetMethod = () => {
    const [currentstate,setstate] = useState([])
    const callApi = async ()=>{
        const header = {
            mehtod:"GET",
            redirect:"follow"
        }
        const res = await fetch('https://dummyjson.com/todos',header)
        const respon = await res.json()
        setstate(respon.todos)
    }

    useEffect(()=>{
        callApi()
    },[])

    
  return (
    <div className='text-center'>
      <h1 >get api</h1>
      <table className='table'>
        <thead>
        <tr>
            <td>Id</td>
            <td>userId</td>
            <td>todo</td>
            <td>Status</td>
        </tr>
        </thead>
        <tbody>
            {
                currentstate.map((value,index)=>{
                    return (
                        <tr key={index}>
            <td>{value.id}</td>
            <td>{value.userId}</td>
            <td>{value.todo}</td>
            <td>{value.completed==true?"fulful":"sorry"}</td>
        </tr>
                    )
                })
            }
        </tbody>

      </table>
    </div>
  )
}

export default Tut63GetMethod
