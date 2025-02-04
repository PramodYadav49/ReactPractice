import React, { useState } from 'react'

const State = () => {
    const[count, setCount]=useState(0)

    function handleClick(){
            setCount(()=>count+1)
    }
  return (

    <div className='flex justify-center items-center'>
        
        
        <button onClick={handleClick}> Increase</button>
        <h1>{count}</h1>
    </div>
  )
}

export default State