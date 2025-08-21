import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import ServiceDetails from "./services/ServiceDetails"
import Restaurant from "./Restaurant"
import FineDining from "./restaurant/FineDining"
import BuffetServices from "./restaurant/BuffetServices"
import LocalDelicacies from "./restaurant/LocalDelicacies"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/servicedetails" element={<ServiceDetails />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/restaurant/finedining" element={<FineDining />} />
        <Route path="/restaurant/buffetservices" element={<BuffetServices />} />
        <Route path="/restaurant/localdelicacies" element={<LocalDelicacies />} />
      </Routes>
    </>
  )
}

export default App
