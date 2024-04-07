import './App.css'


import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Login } from './pages/Login'



import { Route, Routes } from 'react-router-dom'



function App() {

  return (
    <>

      <main className='App'>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />

        </Routes>

      </main>
      
    </>
  )
}

export default App
