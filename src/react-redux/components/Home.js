import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Mobile from '../img/Mobile.png'

const Home = (props) => {
  console.log("Home props",props)
  return (
    <div>
      <h2>Home Page</h2>
      
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Mobile} />
      <Card.Body>
        <Card.Title>Samsang</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={()=>{props.addToCartHandler({price:14000,name:"samsang"})}}>Add Cart</Button>
        <Button variant="secondary" onClick={()=>{props.RemoveToCartHandler()}}>Remove to Cart</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Home
