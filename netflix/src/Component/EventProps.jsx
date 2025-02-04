import React from 'react'
import WelcomeEvent from './WelcomeEvent'

export const EventProps = () => {

    function handleHover(user){
        alert(`Hey , ${user}`);
    }
    function HandleWelcomeUser(user){
        alert(`Hey , ${user}`);
    }
  return (
    <div>
        <WelcomeEvent onClick={()=>HandleWelcomeUser("pramod")} onMouseEnter={handleHover}>ChildClick</WelcomeEvent>

    </div>
  )
}

