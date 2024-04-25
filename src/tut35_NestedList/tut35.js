import React from 'react'
import Table from 'react-bootstrap/Table';

const data = [
    {
        name:"ravi",
        email:"ravilak219@gmail.com",
        address:[
            {
            HouseNo:10,
            state:"rajesthan",
            cuntry:"india"
        },
            {
            HouseNo:12,
            state:"delhi",
            cuntry:"india"
        },
            {
            HouseNo:50,
            state:"mumbai",
            cuntry:"india"
        },
    ]

    },
    {
        name:"ram",
        email:"ram219@gmail.com",
        address:[
            {
                HouseNo:10,
                state:"rajesthan",
                cuntry:"india"
            },
                {
                HouseNo:12,
                state:"delhi",
                cuntry:"india"
            },
                {
                HouseNo:50,
                state:"mumbai",
                cuntry:"india"
            },
    ]

    },
    {
        name:"shyam",
        email:"shyam219@gmail.com",
        address:[
            {
                HouseNo:10,
                state:"rajesthan",
                cuntry:"india"
            },
                {
                HouseNo:12,
                state:"delhi",
                cuntry:"india"
            },
                {
                HouseNo:50,
                state:"mumbai",
                cuntry:"india"
            },
    ]

    }
]


const Tut35 = () => {
  return (
    <div>
      <h1 className='text-center'>Nested list</h1>
      <Table striped bordered hover variant='dark'>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {
            data.map((value,i)=>{
                return (
                    <tr>
                        <td>{i+1}</td>
                        <td>{value.name}</td>
                        <td>{value.email}</td>
                        <td>
                            <Table striped hover variant='dark'>
                                <tbody>
                            {
                                value.address.map((md)=>{
                                    return (
                                        <tr>
                                        <td>{md.HouseNo}</td>
                                        <td>{md.state}</td>
                                        <td>{md.cuntry}</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                            </Table>
                        </td>
                    </tr>
                )
            })
        }
      </tbody>
    </Table>
    </div>
  )
}

export default Tut35
