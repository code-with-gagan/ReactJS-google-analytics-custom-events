import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import ReactGA from 'react-ga';

const App = () => {
  useEffect(() => {
    ReactGA.initialize('UA-215686322-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  })
  return (
    <>
      <Router>
        <Link to="/">Home</Link> <span> &nbsp; </span>
        <Link to="/about">About</Link> <span> &nbsp; </span>
        <Link to="/contact">Contact</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
