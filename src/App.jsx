import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ColorModeSwitcher from './ColorModeSwitcher'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Videos from './components/Videos'
import Upload from './components/Upload'
import Login from './components/Login'
import Signup from './components/Signup'


const App = () => {
  return (
<Router>
  <Header/>
  <ColorModeSwitcher />
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/videos' element={<Videos/>} />
    <Route path='/upload' element={<Upload/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/signup' element={<Signup/>} />


  </Routes>
  <Footer/>
</Router>

    )
}

export default App