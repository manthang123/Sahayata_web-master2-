import React, { useState, useEffect } from 'react'; // Add this import
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Footer, Navbar } from "./components";
import { ToastContextProvider } from "./context/ToastContext";
import { About, Donation, EventForm, Events, Home, JoinUs, LoadingScreen, PageNotFound, SingleEvent, Success, ContactUs } from "./pages"; // No error now
import Login from "./pages/Login/Login";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import "./styles/Global.css";
import "./styles/Media.css";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <ToastContextProvider>
        {loading ? <LoadingScreen /> :
          <div className="App">
            <Navbar />
            <ToastContainer />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/donation" element={<Donation />} />
              <Route path="/event/:id" element={<SingleEvent />} />
              <Route path="/event/new" element={<EventForm />} />
              <Route path="/admin" element={<Login />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/success" element={<Success />} />
              <Route path="/events" element={<Events />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/join" element={<JoinUs />} />
              <Route path="/contact-us" element={<ContactUs />} /> {/* Corrected the route to match the Contact component */}
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
          </div>
        }
      </ToastContextProvider>
    </>
  );
}

export default App;
