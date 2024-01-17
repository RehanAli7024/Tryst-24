import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import EventDetails from './components/eventDetails/EventDetails.jsx';

const App = () => {
  return (
    <main className='bg-slate-300/20 h-full'>
      <Router> 
        {window.location.pathname !== "/login" ? <Navbar /> : null}
        
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/eventDetails" element={<EventDetails />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
