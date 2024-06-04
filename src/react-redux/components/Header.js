import React from 'react'
import Cart from '../img/Cart.png'
import './Header.css'


const Header = (props) => {
    // console.log("headers props",props.data)
  return (
    <div>
      <div className='card_div d-flex justify-content-end' >
        <span className='card_span text-white'>{props.data.length}</span>
        <img className='img-fluid ' style={{width:"70px"}} src={Cart}/>
      </div>
    </div>
  )
}

export default Header
