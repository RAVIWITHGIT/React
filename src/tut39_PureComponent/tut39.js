/* 
************************************* Pure Component   **************************************************
1. Pure Component is feture which present in class Component
2. same in function component which is memo , more discuss in further tutorial
3. Pure component stop rerendring in class component
*/


// import React,{Component} from 'react'

/*
class Tut39 extends Component   {
    constructor(){
        super();
        this.state={
            count:1
        }
    }

    // render(){
    //     console.log("click the button")
    //     return (
    //       <div className='text-center'>
    //         <h1>Here we Discuss about Pure Component</h1>
    //         <h4>counter :{this.state.count}</h4>
    //         <button onClick={()=>{this.setState({count:this.state.count+1})}}>click the button</button>
    //       </div>
    //     )

    // }

    //************  when not change count but render ,which is problem
    render(){
        console.log("click the button")
        return (
          <div className='text-center'>
            <h1>Here we Discuss about Pure Component</h1>
            <h4>counter :{this.state.count}</h4>
            <button onClick={()=>{this.setState({count:this.state.count})}}>click the button</button>
          </div>
        )

    }
}
*/





// ************** use pure component
/*
import React from 'react'

class Tut39 extends React.PureComponent   {
    constructor(){
        super();
        this.state={
            count:1
        }
    }

    // render(){
    //     console.log("click the button")
    //     return (
    //       <div className='text-center'>
    //         <h1>Here we Discuss about Pure Component</h1>
    //         <h4>counter :{this.state.count}</h4>
    //         <button onClick={()=>{this.setState({count:this.state.count+1})}}>click the button</button>
    //       </div>
    //     )

    // }

    //************  when not change count not render ,which is solution
    render(){
        console.log("click the button")
        return (
          <div className='text-center'>
            <h1>Here we Discuss about Pure Component</h1>
            <h4>counter :{this.state.count}</h4>
            <button onClick={()=>{this.setState({count:this.state.count})}}>click the button</button>
          </div>
        )

    }
}
*/

//*********8888888888888 
import React,{Component} from 'react'
import GetProps from './getProps';

class Tut39 extends React.PureComponent   {
    constructor(){
        super();
        this.state={
            count:1
        }
    }

    render(){
        return (
          <div className='text-center'>
            <h1>Here we Discuss about Pure Component</h1>
            <GetProps mycount={this.state.count}/>
            <button onClick={()=>{this.setState({count:this.state.count+1})}}>click the button</button>
          </div>
        )

    }
}


export default Tut39
