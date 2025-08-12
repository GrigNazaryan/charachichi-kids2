import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contacts from './components/Contacts.jsx';
import Gallery from './components/Gallery.jsx';
import Header from './components/Header.jsx';
import Services from './components/Services.jsx';
import Pricing from './components/Pricing.jsx';


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