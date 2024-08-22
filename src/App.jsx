import { useState } from 'react'
import Hero from './components/Hero'
import Programs from './components/Programs'
import About from './components/About'
import Services from './components/Services'
import Discount from './components/Discount'
import Schedule from './components/Schedule'
import Gallery from './components/Gallery'

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
      <Gallery />
    </>
  )
}

export default App
