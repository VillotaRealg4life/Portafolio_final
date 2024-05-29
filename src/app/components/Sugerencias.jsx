import React from 'react';
import { useTranslation } from 'react-i18next';
import imagen2 from '../../assets/imagenes/ale.jpeg';
import imagen3 from '../../assets/imagenes/alejo.jpeg';

const Sugerencias = () => {
  const { t } = useTranslation();

  return (
    <section className="suggestions m-4 md:m-10 md:ml-36 md:mr-40">
      <h1 className="text-3xl text-black font-bold mb-6">{t('sugerencias')}</h1>
      <div className="suggestions-container md:flex-row md:space-x-6">
        <div className="border border-black rounded-lg p-4">
          <Sugerencia imagen={imagen3} titulo={t('julian_escobar')} comentario={t('comentario_julian')} />
          <hr className="border-t border-black" />
          <Sugerencia imagen={imagen2} titulo={t('carlos_alegria')} comentario={t('comentario_carlos')} />
          <hr className="border-t border-black" />
          <Sugerencia imagen={imagen3} titulo={t('Alejrandro ')} comentario={t('comentario_titulo_3')} />
        </div>
      </div>
    </section>
  );
};

const Sugerencia = ({ imagen, titulo, comentario }) => {
  return (
    <div className="suggestion flex flex-col md:flex-row items-center p-5 rounded-lg mb-6 md:mb-0">
      <div className="flex flex-col md:flex-row md:space-x-16 items-center w-full">
        <img src={imagen} alt={titulo} className="suggestion-image w-32 h-32 object-cover rounded-full mx-auto md:mx-0 md:mt-0 md:mb-0" />
        <div className="suggestion-info mt-4 md:mt-0 text-center md:text-left">
          <h2 className="text-lg font-semibold">{titulo}</h2>
          <p className="text-gray-600 mt-2">{comentario}</p>
          <div className="flex justify-center md:justify-start items-center mt-2 text-3xl">
            <span className="text-yellow-500">★★★★★</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sugerencias;
