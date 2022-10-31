import { useState } from 'react'
import './App.css'
import QuizApp from './componets/QuizApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h2>QuizApp Game!</h2>
      <QuizApp />
    </div>
  )
}

export default App
