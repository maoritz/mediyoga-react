import { useState } from 'react'
import Hero from './components/Hero'
import Programs from './components/Programs'
import About from './components/About'
import Services from './components/Services'

// https://maoritz.github.io/mediyoga/
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <Programs />
      <About />
      <Services />
    </>
  )
}

export default App
