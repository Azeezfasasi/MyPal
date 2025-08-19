import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import Register from "./Register"
import ForgetPassword from "./ForgetPassword"
import ServiceDetails from "./services/ServiceDetails"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/servicedetails" element={<ServiceDetails />} />
        <Route path="/login" element={<Register />} />
        <Route path="/login" element={<ForgetPassword />} />
      </Routes>
    </>
  )
}

export default App
