import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NetflixSeries from './Component/NetflixSeries'
import { EvenHandling } from './Component/EvenHandling'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    {/* <NetflixSeries></NetflixSeries> */}
    <EvenHandling ></EvenHandling>
    </>

   
  )
}

export default App
