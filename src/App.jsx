import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import React from 'react'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import EventDetails from './components/eventDetails/EventDetails.jsx'
import Events from './pages/Events/Events.jsx'
import CompetitionsOverlay from './overlays/event-details/EventDetails.jsx'
import AddNewField from './overlays/add-new-field/AddNewField.jsx'


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
          <Route path="/addnewfield" element={<AddNewField />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
