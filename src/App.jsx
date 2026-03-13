import { useState } from 'react'
//import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './exam folder/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    </BrowserRouter>
    </>
  )
}

export default App
