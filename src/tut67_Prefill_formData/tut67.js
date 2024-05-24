import React, { useEffect, useState } from 'react'

const Tut67 = () => {
    const [currentData,setData] = useState([])
    const [currentid,setid] = useState("")
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
                <input type="text" value={currentid} className='d-block mb-3 mt-5' placeholder='s.no'/>
                <input type="text" value={currentodo} className='d-block' placeholder='todo'/>
                <input type="text" value={currentstatus} className='d-block my-3'  placeholder='status' />
                <button>update user</button>
            </div>
        </div>
      </div>
     
    </div>
  )
}

export default Tut67



/* **************************** here we make not 3 state for 3 input we work only one state

import React, { useEffect, useState } from 'react'

const Tut67 = () => {
    const [currentData,setData] = useState([])
    const [currentid,setid] = useState({})
    

    const getapi = async ()=>{
        const reqestOptions = {
            method:"GET"
        }
        const res = await fetch('https://dummyjson.com/todos',reqestOptions)
        const result = await res.json()
        setData(result.todos)
        setid({id:result.todos[0].id,todo:result.todos[0].todo,status:result.todos[0].completed})
        console.log(currentid)
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
        setid({id:currentData[myindx].id,todo:currentData[myindx].todo,status:currentData[myindx].completed})
        


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
                <input type="text" value={currentid.id} className='d-block mb-3 mt-5' placeholder='s.no'/>
                <input type="text" value={currentid.todo} className='d-block' placeholder='todo'/>
                <input type="text" value={currentid.status} className='d-block my-3'  placeholder='status' />
                <button>update user</button>
            </div>
        </div>
      </div>
     
    </div>
  )
}

export default Tut67
*/

