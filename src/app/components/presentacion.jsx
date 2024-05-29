import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import fondo from '../../assets/imagenes/fondo3.png';
import yo from '../../assets/imagenes/yo.png.jpeg';

const Presentacion = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${fondo})` }}>
      <div className="container mt-10 mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-lg md:max-w-2xl md:mr-16 text-center md:text-left text-white mb-8 md:mb-0">
          <h1 className="text-3xl md:text-6xl font-bold mb-10">{t('portfolio')}</h1>
          <p className="text-xl md:text-3xl mb-28">{t('introduction')}</p>
          <Link to="/sobre-mi" className="bg-green-700 text-white text-lg md:text-xl px-6 py-3 rounded-full ">
            {t('viewPortfolio')}
          </Link>
        </div>
        <div className="mt-0 md:mt-0 md:ml-4">
          <img src={yo} alt="Profile" className="w-48 h-96 md:w-96 rounded-full object-cover border-4 border-white" />
        </div>
      </div>
      <div className="container mx-auto flex justify-center mt-32">
        <div className="flex space-x-10 text-5xl">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-500">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-300">
            <FaGithub />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-400">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-300">
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Presentacion;
