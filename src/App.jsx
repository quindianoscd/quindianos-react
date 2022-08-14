import { useState } from 'react';
import Hero from './components/Hero';
import Noticias from './components/Noticias';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <Noticias />
    </>
  )
}

export default App
