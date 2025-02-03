import React from 'react'

export const EvenHandling = () => {
    function handleButtonClick(event){
        console.log(event)
        alert("hey I am onClick even")

    }
    function handleWelcome(name){
        console.log(`hello ${name}`)
    }
  return (
    <div>
        <button className="border  rounded-sm bg-red-900" onClick={handleButtonClick}> click me</button>
        <br></br>
        <button onClick={(event)=>handleButtonClick(event)}>Click me 2</button>
        <button onClick={(event)=>alert('inline event andler')+console.log(event)}>inline arr fun</button>
        <br />
        <button onClick={handleWelcome("Pramod")}>Click pramod</button>
    </div>
  )
}
