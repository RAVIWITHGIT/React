/*
1. in react we use Link for linking
2. we can also use anchor tag for linking but when we use anchor tag then refresh page , but in react page not refresh
3. so we use Link

*/

// ************************************ Link
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul class="nav">
        <li class="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          
        </li>
        <li class="nav-item">
            <Link className="nav-link" to="/about">about</Link>
          
        </li>
        
        
      </ul>
    </div>
  );
};


//***************************************  use anchor tag, 
// when we use anchor tag then refresh page , but we not want page refresh

// import React from "react";
// import { Link } from "react-router-dom";

// const Nav = () => {
//   return (
//     <div>
//       <ul class="nav">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="/">
//             Home
//           </a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="/about">
//             About
//           </a>
//         </li>
        
        
//       </ul>
//     </div>
//   );
// };

export default Nav;
