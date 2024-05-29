import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaArrowCircleLeft, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full text-black flex justify-between items-center p-4">
      <div className="flex items-center">
        <FaArrowCircleLeft className="h-10 w-10 mr-2 cursor-pointer" onClick={changeLanguage} />
      </div>
      <div>
        <Link to="/">
          <FaHome className="h-10 w-10" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
