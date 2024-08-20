import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>{count}</div>
        <div>
          <h2>Welcome</h2>
        </div>
        
    </>
  )
}

export default App
