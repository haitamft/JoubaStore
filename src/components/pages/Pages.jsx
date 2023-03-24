import React from "react"
import { Header } from "../homepage/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "../home/Home"
import { Footer } from "../homepage/Footer"
import { Details } from "../home/details/Details"

export const Pages = ({ cartItems }) => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home cartItems={cartItems} />} />
          <Route exact path='/cart/:id' element={<Details />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
