import { useState } from 'react'
import Hero from './components/Hero'
import Programs from './components/Programs'
import About from './components/About'
import Services from './components/Services'
import Discount from './components/Discount'
import Schedule from './components/Schedule'

// https://maoritz.github.io/mediyoga/
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <Programs />
      <About />
      <Services />
      <Discount />
      <Schedule />
    </>
  )
}

export default App
