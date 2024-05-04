/* when we get ref which send as argument in parent file then we write two parameter and second parameter get ref 
make sure child component wrap in forwardRef , which we write in bottom

*/


import React,{Component, forwardRef} from 'react'

// const Tut43Child = (props,myref) => {
//   return (
//     <div>
//       <input className='mb-3' type="text" ref={myref}/>
//     </div>
//   )
// }

// export default forwardRef( Tut43Child)


//*********** when we want use forwardRef in class component */

class Tut43Child extends Component {
    render() {
      return (
        <div>
          <input className='mb-3' type="text" ref={this.props.myref} />
        </div>
      );
    }
  }
  
export default forwardRef((props, ref) => <Tut43Child {...props} myref={ref} />);
