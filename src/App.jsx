import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import './fonts.css';
import MainPage from "./pages/mainpage/MainPage.jsx";
import GuestLectureEvent from "./components/GuestLectureEvent/GuestLectureEvent.jsx";
import WorkshopEvent from "./components/WorkshopEvents/WorkshopEvent.jsx";
import CompetitionEvent from "./components/CompetitonEvent/CompetitionEvent.jsx";
import AddNewField from "./overlays/overlays/add-new-field/AddNewField.jsx";
import Event from "./overlays/overlays/add-new-field/OverlayTest.jsx";
import PopupContainer from "./overlays/popups/PopupContainer.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import ComingSoon from "./components/ComingSoon/ComingSoon.jsx";
import GuestRegistration from "./components/Registration/GuestRegistration.jsx";
import Sponsors from "./pages/sponsors/sponsors.jsx";
import About from "./pages/aboutus/aboutus.jsx";
import ContactUs from "./pages/contactus/contactus.jsx";
import EventPage from "./pages/Events/eventpage.jsx";

const App = () => {
  return (
    <main className="main-bg">
      {/* <Navbar></Navbar> */}
      <Router>
        {/* <ParallaxStars /> */}



        {window.location.pathname !== "/login" ? <Navbar /> : null}



        <Routes>
          {/* <Route path="/GuestLectureEvent" element={<GuestLectureEvent />} /> */}
          <Route path="/" element={<ComingSoon />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/GuestLectureEvent" element={<GuestLectureEvent />} />
          <Route path="/workshopevent" element={<WorkshopEvent />} />
          <Route path="/competitionevent" element={<CompetitionEvent />} />
          <Route path="/addnewfield" element={<AddNewField />} />
          <Route path="/overlaytest" element={<Event />} />
          <Route path="/registration" element={<GuestRegistration />} />
          <Route path="/popup" element={<PopupContainer />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<EventPage />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
