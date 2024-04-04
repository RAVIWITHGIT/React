import React, { useState } from 'react'

const Tut19 = () => {
    const [username,setuser] = useState('')
    const [userpass,setpass] = useState('')
    const [showErr,sethideErr] = useState(false)
    const [passErr,setpassErr] = useState(false)
    const controleForm = (e)=>{
        e.preventDefault()
        if(username.length<3 || userpass.length<3){
            alert("something wrong chekc your form")
        }else{
            alert("ok sign in")
        }
    }

    const controleNameErr = (e)=>{
        let item = e.target.value;
        if(item.length<3){
            sethideErr(true)
        }else{
            sethideErr(false)
        }
        setuser(item)

    }

    const controlePassErr = (e)=>{
        let item = e.target.value;
        if(item.length<3){
            setpassErr(true)
        }else{
            setpassErr(false)
        }
        setpass(item)
        
    }
  return (
    <div className='text-center'>
      <h1 >Sign In</h1>
      <form>
      <input type='text' placeholder='enter your name' onChange={controleNameErr}/>
      {showErr?<span>unvalide name</span>:""}
      <br/><br/>
      <input type='text' placeholder='enter your password' onChange={controlePassErr}/>
      {passErr?<span>unvalide password</span>:""}
      <br/><br/>
      <button onClick={controleForm}>submit form</button>
      </form>
    </div>
  )
}

export default Tut19
