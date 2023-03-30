import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     {/* <h1 className="text-4xl underline text-center" >Hello TailwindCSS</h1>
      */}
      <Header></Header>
    </div>
  )
}

export default App
