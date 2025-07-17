import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

import Welcome from './pages/Welcome'
import BirthdayMessage from './pages/BirthdayMessage'
import MemmoryGallery from './pages/MemmoryGallery'
import SurpriseEnding from './pages/SurpriseEnding'
import SecretGift from './pages/SecretGift'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/message' element={<BirthdayMessage />} />
        <Route path='/memories' element={<MemmoryGallery />} />
        <Route path='/surprise' element={<SurpriseEnding />} />
        <Route path='/secret' element={<SecretGift />} />
      </Routes>
    </div>
  )
}

export default App
