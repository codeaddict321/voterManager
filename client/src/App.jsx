import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import MainPage from "./pages/MainPage"
import {Routes,Route} from "react-router-dom"
function App() {


  return (
   <div className="App">
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/main' element={<MainPage />} />
    </Routes>

   </div>
  )
}

export default App
