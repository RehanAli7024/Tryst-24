import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import './fonts.css';
import { useState } from "react";
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
import EventMain from "./pages/Events/eventmain.jsx";
import Login from "./pages/login/login.jsx";
import UserProfile from "./components/UserProfile/UserProfile.jsx";
import UserCard from "./components/userCard/UserCard.jsx";
import Signup from "./pages/signup/signup.jsx";
import Dashboard from "./pages/dashboard/dashboard.jsx";
import AdminLogin from "./pages/admin-login/admin-login.jsx";
import LandingPage from "./pages/landing-page/landing-page.jsx";
import { useEffect } from "react";
import axios from "axios";
import { DOMAIN } from "./domain.js";
import Accomodation from "./pages/accomodation/accomodation.jsx";


const App = () => {
  const [eventarray, setEventarray] = useState([]);
  useEffect(() => {
    axios.get(`${DOMAIN}allevents/`)
      .then((response) => {
        setEventarray(response.data);
        console.log(response.data.competitions);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <main className="main-bg">
      <Router>
        <Navbar />
        {/* {window.location.pathname !== "/mainpage" ? <Navbar /> : null}   */}
        <Routes>
          <Route path="/GuestLectureEvent" element={<GuestLectureEvent />} />
          {/*           <Route path="/" element={<LandingPage />} /> */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact us" element={<ContactUs />} />
          <Route path="/admin/events" element={<MainPage />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<EventMain />} />
          <Route path="/guests" element={<ComingSoon />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/usercard" element={<UserCard />} />
          <Route path="/pronites" element={<ComingSoon />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/accomodation" element={<Accomodation />} />
          {eventarray.competitions && eventarray.competitions.map((event, index) => {
            return <Route path={`/events/${event.title}`} key={index} element={<EventPage event={event} />} />
          })}
          {/* <Route path="/event12" element={<EventPage />} /> */}
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
