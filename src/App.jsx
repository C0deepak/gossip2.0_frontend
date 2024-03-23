/* eslint-disable no-unused-vars */
import React, { lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ProtectRoute from './components/auth/ProtectRoute'

const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const Chat = lazy(() => import('./pages/Chat'))

const App = () => {
  let user = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectRoute user={user} />}>
          <Route path='/chat/:id' element={<Chat />}></Route>
        </Route>
        <Route element={<ProtectRoute user={!user} redirect='/' />}>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Route>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App