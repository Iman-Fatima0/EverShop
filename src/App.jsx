import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom' 
import Home from './Pages/Home'
import About from './Pages/About'
import NavBar from './Components/Navbar'
import Footer from './Components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Home' element={<Home />}/>
      <Route path='/About' element={<About/>}/>
    
    </Routes>
    <Footer/>
      


    </>
  )
}

export default App