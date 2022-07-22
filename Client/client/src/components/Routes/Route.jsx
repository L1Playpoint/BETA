import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Showcases from '../../pages/Showcases'

export default function PageRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Showcases/>} />
        </Routes>
  )
}
