import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NetflixSeries from './Component/NetflixSeries'
import { EvenHandling } from './Component/EvenHandling'
import { EventProps } from './Component/EventProps'
import { EventPropagation } from './Component/EventPropagation'
import State from './Component/Hooks/State'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    {/* <NetflixSeries></NetflixSeries> */}
    {/* <EvenHandling ></EvenHandling> */}

    {/* <EventPropagation></EventPropagation> */}
    <State></State>
    </>

   
  )
}

export default App
