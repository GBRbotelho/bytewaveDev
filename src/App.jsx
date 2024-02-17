import React from "react";
import { Routes as Router, Route, Navigate } from "react-router-dom";
import "./App.css";
import Index from "./containers/@Index";

function App() {
  return (
    <Router>
      <Route path="/" element={<Index />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Router>
  );
}

export default App;
