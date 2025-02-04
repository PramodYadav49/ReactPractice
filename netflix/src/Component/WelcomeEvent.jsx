import React from 'react'

const WelcomeEvent = (props) => {
   function handleGreeting (){
        console(`hey user, welcome`)
        props.onClick
    }
  return (
    <div>
        <button onClick={props.onClick}>click</button>
        <button onMouseEnter={props.onMouseEnter}>
            Hover me
        </button>

        <button onClick={handleGreeting}>Par click</button>


    </div>
  )
}

export default WelcomeEvent
