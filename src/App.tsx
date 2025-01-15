// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {Route, Routes} from 'react-router-dom'
import './App.css'
import Login from './pages/LogIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import ContinueToLogin from './pages/ContinueToLogin'
import ResetPassword from './pages/ResetPassword'
import VerifyEmail from './pages/VerifyEmail'

function App() {

  return (
     <>
     <Routes>
    <Route path='/signup' element={<SignUp />} />
    <Route path='/login' element={<Login />} />
    <Route path='/forgotpassword' element={<ForgotPassword />} />
    <Route path='/continuetologin' element={<ContinueToLogin />} />
    <Route path='/resetpassword' element={<ResetPassword />} />
    <Route path='/verifyemail' element={<VerifyEmail />} />
    </Routes>
    </>
  )
}

export default App
