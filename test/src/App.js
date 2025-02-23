import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import './App.css';
import logo from './logo.svg'; // Import the logo
import BookingConsultation from './components/InstantConsultationBooking/BookingConsultation'; // Adjust path as needed
import InstantConsultation from './components/InstantConsultationBooking/InstantConsultation'; // Adjust path as needed
import Landing_Page from './components/Landing_Page/Landing_Page'; // Import Landing_Page component

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        {/* Define Routes */}
        <Routes>
          {/* Default route (Home) */}
          <Route path="/" element={<Landing_Page />} />

          {/* Route for Booking Consultation */}
          <Route path="/booking" element={<BookingConsultation />} />

          {/* Route for Instant Consultation */}
          <Route path="/instant-consultation" element={<InstantConsultation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;