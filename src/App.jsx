import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import GuestLectureEvent from './components/GuestLectureEvent/GuestLectureEvent.jsx'
import WorkshopEvent from './components/WorkshopEvents/WorkshopEvent.jsx'
import CompetitionEvent from './components/CompetitonEvent/CompetitionEvent.jsx'
import AddNewField from './overlays/overlays/add-new-field/AddNewField.jsx'
import Event from './overlays/overlays/add-new-field/OverlayTest.jsx'
import Login from './pages/Login';
import Registeration from './components/Registration/Registration.jsx'
import MainPage from './pages/main page/MainPage.jsx';
import PopupContainer from './overlays/popups/PopupContainer.jsx'

const App = () => {
  return (
    <main className='bg-slate-300/20 h-full'>
      <Router> 
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/GuestLectureEvent" element={<GuestLectureEvent />} />
          <Route path="/workshopevent" element={<WorkshopEvent />} />
          <Route path="/competitionevent" element={<CompetitionEvent />} />
          <Route path="/addnewfield" element={<AddNewField/>} />
          <Route path="/overlaytest" element={<Event/>} />
          <Route path="/registration" element={<Registeration/>} />
          <Route path="/popup" element={<PopupContainer />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
