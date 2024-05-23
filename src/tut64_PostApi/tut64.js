import React, { useState } from 'react'

const Tut64 = () => {
    const [currentitle,settitle] = useState("")
    const [currenboyd,setbody] = useState("")
    const [curreuserInd,setuserInd] = useState("")

    const sendPost = async ()=>{
        const myobj = {
            method:"POST",
            headers:{
                'Accept':"application/json",
                'Content-type':"application/json"
            },
            body:JSON.stringify({
                "title": currentitle,
    "body": currenboyd,
    "userId": curreuserInd
            })

        }
        const res = await fetch('https://jsonplaceholder.typicode.com/posts',myobj)
        const respon = await res.json();
        console.log(respon)
    }
  return (
    <div>
      <h2 className='text-center'>Post Api in React js</h2>
    <div className="d-flex justify-content-center flex-column">

<div className='d-flex justify-content-center'>
      <input type="text" value={currentitle} onChange={(e)=>{settitle(e.target.value)}}/>

</div>
<div className='d-flex my-4 justify-content-center'>
      <input type="text"  value={currenboyd} onChange={(e)=>{setbody(e.target.value)}}/>

</div>
<div className='d-flex justify-content-center'>
      <input type="text" value={curreuserInd} onChange={(e)=>{setuserInd(e.target.value)}}/>

</div>   
<div className='d-flex my-2 justify-content-center'>
      <button onClick={sendPost}>submit</button>

</div>   
    </div>



    </div>

  )
}

export default Tut64
