import React from 'react'

export const EvenHandling = () => {
    function handleButtonClick(event){
        console.log(event)
        alert("hey I am onClick even")

    }
  return (
    <div>
        <button className="border  rounded-sm bg-red-900" onClick={handleButtonClick}> click me</button>
    </div>
  )
}
