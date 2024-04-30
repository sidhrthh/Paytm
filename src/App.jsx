import { useState } from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Signin from "./Pages/signin"
import Signup from"./Pages/signup"
import Dashboard from "./Pages/dashboard"
import SendMoney from "./Pages/sendMoney"


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/send' element={<SendMoney />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
