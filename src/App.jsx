import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Contacts from './Contacts.jsx';
import Gallery from './Gallery.jsx';
import Header from './Header.jsx';
import Services from './Services.jsx';
import Pricing from './Pricing.jsx';


export default function App() {
  return (
    <>
     
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
        <footer>© {new Date().getFullYear()} Charachichi Kids</footer>
    </>
  );
}