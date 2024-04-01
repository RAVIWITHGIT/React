import React from "react";

class Tut5 extends React.Component{
    constructor(){
        super();
        this.state={
            email:"ravilakshakar336@gmail.com"
        }
    }
    render(){
        console.log(this.props)
        return (
        <div className="text-center">
            <h1> this is tut5 file </h1>
            <p>here we discuss about props with class component</p>
            <h3>name is {this.props.name} which is {this.props.age} year old</h3>
            <h6>email is {this.state.email}</h6>
            <button onClick={()=>{this.setState({email:"raviyt73@gmail.com"})}}>change email</button>
            </div>
        )
    }
}

export default Tut5