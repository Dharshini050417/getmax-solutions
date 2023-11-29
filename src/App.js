import React from 'react'
import { NavBar ,Card } from './components'
import { Hero , About ,Clients,Contact ,Solution ,Team} from "./containers"


const App = () => {
  return (
    <>
    <Hero/>
    <About/>
    <Clients/>
    <Solution/>
    <Team/>
    <Contact/>
    </>
  )
}

export default App
