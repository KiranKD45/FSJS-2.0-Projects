import React from 'react';
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from './components/Checkout';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"


function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout"element={[<Header />,<Checkout/>]}/> 
          <Route path="/" element={[<Header />, <Home />]}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
