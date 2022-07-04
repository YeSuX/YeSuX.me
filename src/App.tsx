import { useState } from 'react'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Footer/>
    </div>
  )
}

export default App
