import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DynamicData = () => {
    const params = useParams()
    const {name} = params
    const [currentstate,setstate] = useState([])
    const [foundItem,setFoundItem] = useState([])
    const callApi = async ()=>{
        const header = {
            mehtod:"GET",
            redirect:"follow"
        }
        const res = await fetch('https://dummyjson.com/todos',header)
        const respon = await res.json()
        setstate(respon.todos)
    }



    
    let a = [currentstate.find((value)=>{
        return value.id==name
    })]
    useEffect(()=>{
        callApi()
    },[])

    useEffect(() => {
        if (currentstate.length > 0) {
            const item = currentstate.find((value) => value.id == name); // Assuming 'name' is the ID you want to find
            setFoundItem([item]);
        }
    }, [currentstate, name]);
    
  return (
    <div>
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
                foundItem .map((value,index)=>{
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

export default DynamicData
