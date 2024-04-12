import React, { Component } from 'react'
import Tut27child from './tut27child'

class Tut27Parent extends Component  {
    constructor(){
        super()
        this.state={
            value:true
        }
    }
    
    render(){
        return (
          <div className='text-center'>
            <h1>parent file</h1>
            {
                this.state.value?<Tut27child/>:<h1>change text</h1>
            }
            
            <button onClick={()=>{this.setState({value:!this.state.value})}}>change text</button>
          </div>
        )
    }
}

export default Tut27Parent
