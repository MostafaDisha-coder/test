import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ReportsLayout from "./components/ReportsLayout/ReportsLayout"; // Import ReportsLayout
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/profile" element={<ProfileCard />} />
          <Route path="/reports" element={<ReportsLayout />} /> {/* Add route for ReportsLayout */}
          {/* Add other routes as needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;