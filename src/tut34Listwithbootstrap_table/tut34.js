import React from 'react'
import Table from 'react-bootstrap/Table';

const data = [
    {name:"ravi",place:"bassi",age:20},
    {name:"shiv",place:"jaipur",age:21},
    {name:"shyam",place:"bassi",age:23},
    {name:"ram",place:"jodhpur",age:19},
]

const Tut34 = () => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
        <tr>
            <th>id</th>
            <th>name</th>
            <th>place</th>
            <th>age</th>
        </tr>
        </thead>
        <tbody>
        {
            //**************** */ make without condition
            data.map((value,i)=>{
                return (
                <tr key={i}>
                    <td>1</td>
                    <td>{value.name}</td>
                    <td>{value.place}</td>
                    <td>{value.age}</td>
                </tr>
                )
            })

            //******************* */ with condition,we can two way write
            // data.map((value,i)=>{
            //     return (
            //         value.age>20?<tr key={i}>
            //         <td>1</td>
            //         <td>{value.name}</td>
            //         <td>{value.place}</td>
            //         <td>{value.age}</td>
            //     </tr>:null
            //     )
            // })

            // ******************* second way
            // data.map((value,i)=>
            //         value.age>20?<tr key={i}>
            //         <td>1</td>
            //         <td>{value.name}</td>
            //         <td>{value.place}</td>
            //         <td>{value.age}</td>
            //     </tr>:null
            // )
        }
        </tbody>
        
      </Table>
    </div>
  )
}

export default Tut34
