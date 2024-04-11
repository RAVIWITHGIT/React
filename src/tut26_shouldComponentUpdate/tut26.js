import React, { Component } from 'react'

class Tut26 extends Component {
    constructor(){
        super();
        this.state ={
            count:0
        }
    }

    /* note*****************************
    1. shouldComponentUpdate run after update state
    2. shouldComponentUpdate stop render method , so when update state then shouldComponent update and then stop render method so count no increment
    3 shouldComponentUpdate take a False or true value as return
    4. if we return false then stop rendring
    5. if we return true then not stop rendring

    */
    // shouldComponentUpdate(){
    //     console.log("shouldComponentUpdate")
    //     return false
    // }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate")
        return true
    }
    // shouldComponentUpdate(){
    //     console.log("shouldComponentUpdate",this.state.count)
    //     if(this.state.count>=5 && 10>=this.state.count){
    //         return true
    //     }else{
    //         return false
    //     }
    // }


    render(){
        return (
          <div className='text-center'>
            <h1>ShouldComponentUpdate</h1>
            <h3>count is : {this.state.count}</h3>
            <button onClick={()=>{this.setState({count:this.state.count+1})}}>update count</button>
          </div>
        )
    }
}

export default Tut26
