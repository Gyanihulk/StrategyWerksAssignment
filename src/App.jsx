import { useState } from 'react'
import './App.css'
import VirtualScrollList from './components/VirtualScrollList'
import Feed from './components/Feed'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Feed/>
    </>
  )
}

export default App
