/* ********************************* useNavigation hook ************************
1. usenavigation hook use for nevegation page

*/


import React from 'react'
import { useNavigate } from 'react-router-dom'

const UseNev = () => {
  const mynav = useNavigate()
  return (
    <div>
      <button onClick={()=>mynav("/home")}>go to home page</button>
      <button onClick={()=>mynav("/about")}>go to about page</button>
    </div>
  )
}

// *************** navigation on function calling
// const UseNev = () => {
//   const mynav = useNavigate()
//   const changenav = (getpath)=>{
//     mynav(getpath)
//   }
//   return (
//     <div>
//       <button onClick={()=>changenav('/home')}>go to home page</button>
//       <button onClick={()=>changenav('/about')}>go to about page</button>
//     </div>
//   )
// }

export default UseNev
