import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Mobile from '../img/Mobile.png'
import Cart from '../img/Cart.png'

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <div className='card_div d-flex justify-content-end' >
        <img className='img-fluid ' style={{width:"70px"}} src={Cart}/>
      </div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Mobile} />
      <Card.Body>
        <Card.Title>Samsang</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Add Cart</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Home
