import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'
import Products from './Products'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'


const App = () => {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
