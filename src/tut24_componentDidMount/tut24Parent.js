import React, { Component } from 'react'

class Tut24Parent extends Component{
    constructor(){
        super()
        this.state ={
            name:"ravi"
        }
        console.log("constructer")
    }
    componentDidMount(){
        console.log("componetdidmount")
        this.setState({name:"shyam"})
    }
    render(){
        console.log("render method")
        return (
            <div className='text-center' >
                <h1>componentDidMount file</h1>
                <h2>name is {this.state.name}</h2>
                <button onClick={()=>{this.setState({name:"shyam"})}}>change name</button>
            </div>
        )
    }
}

export default Tut24Parent
