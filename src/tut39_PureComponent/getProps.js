import React from 'react'

class GetProps extends React.PureComponent  {
    render(){
        console.log("getpass file")
        return (
          <div>
            <h4>counter {this.props.mycount}</h4>
          </div>
        )

    }
}

export default GetProps
