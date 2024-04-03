import React, { useState } from 'react'

const Tut9 = () => {
    const [currentvalue,setvalue]= useState(true)
    // const [currentnumber,setnumber] = useState(3)
    let currentnumber = 3;
    return (
        <div>
            {
                currentvalue?<h1 className='text-center'>this is main page</h1>:<h1 className='text-center'>this is guest page</h1>
            }
            {
                // multiple sondtion
                currentnumber==1?<p className='text-center'>this value of paragraph is 1</p>:
                currentnumber==2?<p className='text-center'>this value of paragraph is 2</p>:
                <p className='text-center'>this value is not one or two , welcome guest</p>

            }
          
        </div>
      )
}

export default Tut9
