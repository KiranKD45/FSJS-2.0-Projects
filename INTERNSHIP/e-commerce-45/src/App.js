import React from 'react';
import "./App.css";
import Header from "./components/Header";
// import Home from "./Home";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      {/* <Router>
        {" "}
        <Header />
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                <Checkout />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
