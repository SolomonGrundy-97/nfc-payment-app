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
import Dashboard from './pages/Dashboard'
import Transactions from './pages/Transactions'
import NewCard from './pages/NewCard'
import NewBank from './pages/NewBank'

function App() {

  return (
     <>
     <Routes>
     <Route path='/' element={<ContinueToLogin />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/forgotpassword' element={<ForgotPassword />} />
      <Route path='/resetpassword' element={<ResetPassword />} />
      <Route path='/verifyemail' element={<VerifyEmail />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/transactions' element={<Transactions />} />
      <Route path='/newcard' element={<NewCard onClose={() => console.log("Modal closed")}/>} />
      <Route path='/newbank' element={<NewBank onClose={() => console.log("Modal closed")}/>} />
    </Routes>
    </>
  )
}

export default App
