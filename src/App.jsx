import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import React from 'react'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import EventDetails from './components/eventDetails/EventDetails.jsx'
import Events from './pages/Events/Events.jsx'
import CompetitionsOverlay from './overlays/overlay-1.jsx'


const App = () => {
  return (
    <main className='bg-slate-300/20 h-full'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/eventDetails" element={<EventDetails />} />
          <Route path="/events" element={<Events />} />
          <Route path="/overlay1" element={<CompetitionsOverlay />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
