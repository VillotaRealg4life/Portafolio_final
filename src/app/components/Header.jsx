import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { t } = useTranslation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="text-black mr-10 flex justify-end items-center">
      {isMobile ? (
        <button onClick={toggleMenu} className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      ) : (
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/sobre-mi" className="hover:text-black bg-red-500 px-4 py-2 rounded">{t('about_me')}</Link>
            </li>
            <li>
              <Link to="/proyectos" className="hover:text-gray-400 bg-green-500 px-4 py-2 rounded">{t('projects')}</Link>
            </li>
            <li>
              <Link to="/lenguajes" className="hover:text-gray-400 bg-blue-500 px-4 py-2 rounded">{t('languages')}</Link>
            </li>
            <li>
              <Link to="/sugerencias" className="hover:text-gray-400 bg-yellow-500 px-4 py-2 rounded">{t('suggestions')}</Link>
            </li>
          </ul>
        </nav>
      )}
      {isMobile && menuOpen && (
        <nav>
          <ul className="flex flex-col space-y-2">
            <li>
              <Link to="/sobre-mi" className="hover:text-black">{t('about_me')}</Link>
            </li>
            <li>
              <Link to="/proyectos" className="hover:text-black">{t('projects')}</Link>
            </li>
            <li>
              <Link to="/lenguajes" className="hover:text-black">{t('languages')}</Link>
            </li>
            <li>
              <Link to="/sugerencias" className="hover:text-black">{t('suggestions')}</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
