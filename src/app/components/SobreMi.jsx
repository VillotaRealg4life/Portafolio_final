import React from 'react';
import { useTranslation } from 'react-i18next';
import mi1 from '../../assets/imagenes/jho.jpeg';
import mi3 from '../../assets/imagenes/lenguaje.jpg';
import mi2 from '../../assets/imagenes/ucc.png';
import miFoto from '../../assets/imagenes/yo.png.jpeg';

const SobreMi = () => {
    const { t } = useTranslation();

    return (
        <div className="px-8 md:px-36 py-10 bg-cover bg-center bg-no-repeat">
            <h1 className="text-4xl md:text-6xl text-black font-bold mb-6 text-center md:text-left md:self-start">{t('sobre_mi')}</h1>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between text-gray-600">
                <div className="flex flex-col md:w-3/4 md:pr-8 md:text-left md:self-start">
                    <div className="flex items-center mb-4 mt-10">
                        <div className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center bg-gray-300 mr-4">
                            <img src={mi1} alt={t('mi_foto')} className="w-full h-full object-cover  rounded-lg" />
                        </div>
                        <p className="text-sm md:text-base">{t('descripcion_1')}</p>
                    </div>
                    <div className="flex items-center mb-4 mt-10 text-gray-600">
                        <div className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center bg-gray-300 mr-4">
                            <img src={mi2} alt={t('mi_foto')} className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <p className="text-sm md:text-base">{t('descripcion_2')}</p>
                    </div>
                    <div className="flex items-center mt-10">
                        <div className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center bg-gray-300 mr-4">
                            <img src={mi3} alt={t('mi_foto')} className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <p className="text-sm md:text-base">{t('descripcion_3')}</p>
                    </div>
                </div>
                <div className="w-2/3 md:w-1/4 mx-auto my-8 md:my-20 md:mr-28">
                    <img src={miFoto} alt={t('mi_foto')} className="w-24 h-24 md:w-64 md:h-64 rounded-full shadow-lg mx-auto" />
                </div>
            </div>
        </div>
    );
}

export default SobreMi;
