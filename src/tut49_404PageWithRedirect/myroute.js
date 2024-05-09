import React from 'react'
import { BrowserRouter, Routes ,Route, Navigate} from "react-router-dom"
import Home from './home'
import About from './about'

import Fzf from './fzf'

/*
1. make 404 page use /*
2. when match any url then /* work and show component which we write
 */
const Myroute = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/*" element={<Fzf/>}/>
            
      </Routes>
    </div>
  )
}

/****************************************************************** 
1. when we want redirect when not match url , then use Navigater component
2. so here when match url then redirect home page
*/
// const Myroute = () => {
//     return (
//       <div>
        
//         <Routes>
//           <Route path="/" element={<Home/>}/>
//           <Route path="/about" element={<About/>}/>
//           <Route path="/*" element={<Navigate to="/"/>}/>
              
//         </Routes>
//       </div>
//     )
//   }

export default Myroute
