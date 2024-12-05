import React from "react";
import "./App.css";
import Login from "./components/Login/Login.js";
import Home from "./components/home/home";
import Ticket from "./components/Ticket/Ticket.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ticket" element={<Ticket />} /> {/* Ticket-Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
