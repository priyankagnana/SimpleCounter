import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="counter">
      <h1>Counter</h1>
      <p className="count">{count}</p>
      <div className="buttons">
        <button onClick={() => setCount((c) => c - 1)}>−</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
      </div>
    </div>
  )
}
