import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavComponent from './components/NavComponent'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import LoginPage from './pages/LoginPage'
function App() {
  

  return (
    <>
      <NavComponent />
     <Routes>
        <Route path='/' element ={<HomePage />}></Route>

        <Route path='/about' element ={<AboutPage />}></Route>

        <Route path='/login' element ={<LoginPage />}></Route>

    </Routes>
    </>
  )
}

export default App
