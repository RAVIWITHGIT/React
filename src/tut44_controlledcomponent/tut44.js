/* *************************** controlled component ******************************************
1.controlled component --> jis mein kee input fields hotee hai aur vah state ke dwara control hotee hai.
*/


import React, { Component,useState} from 'react'

const Tut44 = () => {
    const [currentstate,setstate] = useState("ravi")
  return (
    <div className='text-center'>
      <h3>controlled component</h3>
      <input type="text" value={currentstate} onChange={(e)=>{setstate(e.target.value)}} />
      <p>value :{currentstate}</p>
    </div>
  )
}


// class Tut44 extends Component{
//     constructor(){
//         super();
//         this.state = {
//             currentstate:"ravi"
//         }
//     }
//     render(){
//         return (
//           <div className='text-center'>
//             <h3>controlled component</h3>
//             <input type="text" value={this.state.currentstate} onChange={(e)=>{this.setState({currentstate:e.target.value})}} />
//             <p>value :{this.state.currentstate}</p>
//           </div>
//         )

//     }
// }

export default Tut44
