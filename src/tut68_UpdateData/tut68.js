import React, { useEffect, useState } from 'react'

const Tut68 = () => {
    const [currentData,setData] = useState([])
    const [currentid,setid] = useState(null)
    const [currentodo,settodo] = useState("")
    const [currentstatus,setstatus] = useState("")

    const getapi = async ()=>{
        const reqestOptions = {
            method:"GET"
        }
        const res = await fetch('https://dummyjson.com/todos',reqestOptions)
        const result = await res.json()
        // console.log(result.todos)
        setData(result.todos)
        setid(result.todos[0].id)
        settodo(result.todos[0].todo)
        setstatus(result.todos[0].completed)
    }

    const deleteData = async (id)=>{
        const res = await fetch(`https://dummyjson.com/todos/${id}`,{
            method:"DELETE"
        })
        const result = await res.json();
        console.log(result)
        getapi()

    }

    const updateData = (id)=>{
        const myindx = id-1;
        setid(currentData[myindx].id)
        settodo(currentData[myindx].todo)
        setstatus(currentData[myindx].completed)


    }
    const updateUser = async ()=>{
        console.log(currentid,currentodo,currentstatus)
        const res = await fetch(`https://dummyjson.com/todos/${currentid}`,{
            method:"PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                "completed":currentstatus
            })
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
      <h2 className='text-center'>Pre fill form data</h2>
      <div className='container'>
        <div className='row'>
            <div className='col-6'>
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
      <td onClick={()=>updateData(value.id)}><button>Update</button></td>
    </tr>
            )

        })
    }
    
    
  </tbody>
</table>
            </div>
            <div className='col-6 d-flex flex-column align-items-center '>
                <input type="text" value={currentid} onChange={(e)=>setid(e.target.value)} className='d-block mb-3 mt-5' placeholder='s.no'/>
                <input type="text" value={currentodo} onChange={(e)=>settodo(e.target.value)} className='d-block' placeholder='todo'/>
                <input type="text" value={currentstatus} onChange={(e)=>setstatus(e.target.value)} className='d-block my-3'  placeholder='status' />
                <button onClick={()=>updateUser()}>update user</button>
            </div>
        </div>
      </div>
     
    </div>
  )
}

export default Tut68



