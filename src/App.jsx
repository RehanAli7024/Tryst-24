import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import React from 'react'
import Navbar from './components/Navbar'
import EventDetails from './components/GuestLectureEvent/EventDetails.jsx'
import WorkshopEvent from './components/WorkshopEvents/WorkshopEvent.jsx'
import CompetitionEvent from './components/CompetitonEvent/CompetitionEvent.jsx'



const App = () => {
  return (
    <main className='bg-slate-300/20 h-full'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/eventDetails" element={<EventDetails />} />
          <Route path="/workshopevent" element={<WorkshopEvent />} />
          <Route path="/competitionevent" element={<CompetitionEvent />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
