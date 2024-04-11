import React, { Component } from 'react'

class Tut25 extends Component {
    constructor(){
        super()
        console.log("constructer")
        // this.state ={
        //     name:"ravi"
        // }
        this.state = {
            count:0
        }
    }
    componentDidUpdate(preProps,preState,snapshot){
        // console.log("componentDidUpdate")

        // prestate provide previous state value
        // preProps provide previous Props value
        console.log("componentDidUpdate",this.state.count,preState.count)
    }
    render(){
        console.log("render")
        return (
          <div className='text-center'>
            <h1>Component Did update</h1>
            {/* <h2>name is {this.state.name}</h2> */}
            {/* <button onClick={()=>{this.setState({name:"shyam"})}}>change name</button> */}
            <h3>counter {this.state.count}</h3>
            <button onClick={()=>{this.setState({count:this.state.count+1})}}>update counter</button>
          </div>
        )

    }
}

export default Tut25
