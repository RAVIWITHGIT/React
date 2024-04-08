import React, { Component } from 'react'

class Tut23 extends Component{
    constructor(props){
        super(props)
        console.log(this.props)
        this.state ={
            data:"Ravi"
        }
    }
    render(){
        return(
            <h1>Hello {this.state.data}</h1>
        )
    }
}

export default Tut23
