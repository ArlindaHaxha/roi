import React from 'react';
import Header from './components/Header';
// import MainContent from './pages/MainContent';
import Footer from './components/Footer';
import LoanApplication from './pages/LoanApplication';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <MainContent /> */}
      <LoanApplication></LoanApplication>
      <Footer />
    </div>
  );
}

export default App;
