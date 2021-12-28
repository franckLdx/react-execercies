import { useState } from 'react'
import { LoginForm } from './login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="App">
      <LoginForm />
    </main>
  )
}

export default App
