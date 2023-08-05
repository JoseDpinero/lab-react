import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Error from '../../pages/Error/Error'
import Home from '../../pages/Home/Home'

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}
