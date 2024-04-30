/* **************************************** Ref with Class Component **************************
1. ref manipulate dom , mean we can direct target dom using ref
2. but react js not recommended use ref
3. only when we want most necessary then you use ref

*/

import React, { Component, createRef } from 'react'

class Tut41 extends Component {
    constructor(){
        super();
        this.myref = createRef();
        this.myref2 = createRef();
    }
    targetdom(){
        console.log(this.myref.current.value)
        this.myref.current.style.color ="white"
        this.myref.current.style.backgroundColor ="blue"
    }
    render(){
        return (
          <div className='text-center'>
            <h3>ref in react</h3>
            <input type="text" ref={this.myref} />
            <button onClick={()=>{this.targetdom()}}>click me</button>
          </div>
        )

    }
}

export default Tut41
