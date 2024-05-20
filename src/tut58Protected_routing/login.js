import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navi = useNavigate()
  const setvalue = ()=>{
    localStorage.setItem('login',true)
    navi('/')

  }
    useEffect(()=>{
        let login = localStorage.getItem("login")
        console.log(login)
        console.log(typeof login)
        if(login){
            navi('/')
        }
    })
  return (
    <div className='text-center'>
      <h1>login</h1>
        <form action="">
            <div>
            <label htmlFor="">enter your email</label>
            <input type="text" />
            </div>
            <div className='mt-2'>
            <label htmlFor="">enter Password</label>
            <input type="password" />
            </div>
            <button className='ms-3 mt-3' onClick={()=>setvalue()}>submit form</button>

        </form>
    </div>
  )
}

export default Login
