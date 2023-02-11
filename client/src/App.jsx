import { useState } from 'react'
import Landing from './components/landing/Landing'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
		<Landing/>
    </div>
  )
}

export default App
