import React, { Component } from 'react'

class Tut27child extends Component   {

    /*
    1. jab bhee hamaara Component DOM se delete hoga to ComponentWillUnmount() method call hoga
    2. agar delete hua Component vaapas aa jaata hai to us case mein ComponentWillUnmount nahin chalega
    */
    componentWillUnmount(){
        alert("triger only Delete Component")
    }
    render(){
        return (
          <div>
            <h1>child file</h1>
          </div>
        )
    }
}

export default Tut27child
