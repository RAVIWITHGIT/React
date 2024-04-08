import React, { Component } from 'react'

class Tut23child extends Component {
    constructor(){
        super()
        this.state={
            Email:"ravilak219@gmail.com"
        }
    }
    render(){
        console.log("call child js file")
        return (
          <div>
            <h2>this is child Component</h2>
            {/* <h2>name is {this.props.name}</h2> */}
            <h2>Email is {this.state.Email}</h2>
            <button onClick={()=>this.setState({Email:"ravilakshakakr336@gmail.com"})}>change Email</button>
          </div>
        )

    }
}

export default Tut23child
