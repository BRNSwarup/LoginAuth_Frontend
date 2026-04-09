import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import ForgotPasswordPage from './ForgotPasswordPage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/login/forgotPassword' element={<ForgotPasswordPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
