import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import EventDetails from './components/GuestLectureEvent/EventDetails.jsx'
import WorkshopEvent from './components/WorkshopEvents/WorkshopEvent.jsx'
import CompetitionEvent from './components/CompetitonEvent/CompetitionEvent.jsx'
import AddNewField from './overlays/overlays/add-new-field/AddNewField.jsx'
import Event from './overlays/overlays/add-new-field/OverlayTest.jsx'
import Login from './pages/Login';
import Registeration from './components/Registration/Registration.jsx'
import MainPage from './pages/main page/MainPage.jsx';

const App = () => {
  return (
    <main className='bg-slate-300/20 h-full'>
      <Router> 
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/eventDetails" element={<EventDetails />} />
          <Route path="/workshopevent" element={<WorkshopEvent />} />
          <Route path="/competitionevent" element={<CompetitionEvent />} />
          <Route path="/addnewfield" element={<AddNewField/>} />
          <Route path="/overlaytest" element={<Event/>} />
          <Route path="/registration" element={<Registeration/>} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
