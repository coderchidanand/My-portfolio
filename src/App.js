// import logo from './logo.svg';
import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About'

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
    </div>
  );
}

export default App;
