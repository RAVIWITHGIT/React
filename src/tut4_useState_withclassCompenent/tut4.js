import React, { Component } from 'react'

// class Tut4 extends Component{

//     constructor(){
//         super();
//         this.state={
//             data:"ravi"
//         }
//     }
//     apple(){
//         this.setState({data:"shyam"})
//         // alert("click the button")
//     }
//     render(){
//         return (
//             <div>
//                 <h1>we use usestate in class Component</h1>
//                 <h2>{this.state.data}</h2>
//                 {/* <button className='btn btn-primary' onClick={this.apple}>change name</button> */}
//                 <button className='btn btn-primary' onClick={()=>{this.apple()}}>change name</button>
//             </div>
//         )
//     }
// }



// --------------+++++++++++++++++++++ make a counter using class component
class Tut4 extends Component{

    constructor(){
        super();
        this.state={
            data:0
        }
    }
    apple(){
        this.setState({data:this.state.data+1})
    }
    render(){
        return (
            <div>
                <h1>we use usestate in class Component</h1>
                <h2>{this.state.data}</h2>
                {/* <button className='btn btn-primary' onClick={this.apple}>change name</button> */}
                <button className='btn btn-primary' onClick={()=>{this.apple()}}>change number</button>
            </div>
        )
    }
}

export default Tut4
