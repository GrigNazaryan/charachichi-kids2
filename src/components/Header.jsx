import React, { useState } from "react";
import { useLanguage } from "../translations/LanguageContext.jsx";
import { NavLink } from "react-router-dom";

function Header() {
  const { t, lang, setLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.services, path: '/services' },
    { name: t.nav.gallery, path: '/gallery' },
    { name: t.nav.pricing, path: '/pricing' },
    { name: t.nav.contacts, path: '/contacts' },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <a href="">
        <div className="logo"></div>
      </a>
      <nav className={menuOpen ? 'open' : ''}>
        {navItems.map(({ name, path }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={closeMenu}
          >
            {name}
          </NavLink>
        ))}
      </nav>
      <nav>
        <select value={lang} onChange={e => setLang(e.target.value)}>
          <option value="en">English</option>
          <option value="ru">Русский</option>
          <option value="hy">Հայերեն</option>
        </select>
      </nav>
      <button className="burger" onClick={toggleMenu} aria-label="Toggle menu">
        ☰
      </button>
    </header>
  );
}

export default Header;
