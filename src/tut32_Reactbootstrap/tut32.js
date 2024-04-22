/*
1. Here we discuss about how to install react bootstrap
2. React Bootstrap same as Normal bootstrap 
3. command for install --> npm install react-bootstrap bootstrap
4. add css file in index.js file -->  import 'bootstrap/dist/css/bootstrap.min.css';

*/

import React from 'react'
import Button from 'react-bootstrap/Button';

const Tut32 = () => {
  return (
    <div>
      <Button variant="primary" onClick={()=>{alert("click the button")}}>Primary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}

export default Tut32
