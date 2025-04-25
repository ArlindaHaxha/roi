import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoanApplication from "./pages/LoanApplication";
import MainContent from "./pages/MainContent";
import Tarifnik from "./pages/Tarifnik";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LoanApplication />} />
          <Route path="/kako-da-platam" element={<MainContent />} />
          <Route path="/tarifnik" element={<Tarifnik />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
