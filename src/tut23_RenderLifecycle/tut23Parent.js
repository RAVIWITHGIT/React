import React, { Component } from 'react'
import Tut23child from './tut23child'

class Tut23Parent extends Component{
    // constructor(){
    //     super()
    //     this.state={
    //         name:"ravi"
    //     }
    // }
    
    render(){
        console.log("this is parent js file")
        return (
            <div className='text-center'>
              <h1>this is parent Component</h1>
              <Tut23child/>
              {/* <Tut23child name={this.state.name}/> */}
              {/* <button onClick={()=>{this.setState({name:"shiv"})}}>click button</button> */}
            </div>
          )
    }
}


export default Tut23Parent
