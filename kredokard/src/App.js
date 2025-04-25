import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoanApplication from "./pages/LoanApplication";
import MainContent from "./pages/MainContent";
import Tarifnik from "./pages/Tarifnik";
import GeneralConditions from "./pages/GenConditions";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LoanApplication />} />
          <Route path="/kako-da-platam" element={<MainContent />} />
          <Route path="/tarifnik" element={<Tarifnik />} />
          <Route path="/opsti-uslovi" element={<GeneralConditions />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
