import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/imagenes/logo.jpeg';
import salud from '../../assets/imagenes/salud.png';
import tienda from '../../assets/imagenes/tineda.jpeg';

const Proyectos = () => {
    const { t } = useTranslation();

    return (
        <div className="px-8 md:px-36 py-10 ">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 md:mb-0 md:self-start text-black">{t('proyectos')}</h1>
                <div className="mb-8 md:mb-0">
                </div>
             </div>

            <div className="flex flex-col justify-center text-gray-600 ml-6 mt-20 md:flex-row md:space-x-24">

                <div className="flex flex-col items-center mb-8 md:mb-0">
                    <img src={salud} alt={t('proyecto_1')} className="w-64 h-64 object-cover mb-4" />
                    <p className="text-center w-64 overflow-wrap break-word bg-green-300 p-4 -mt-4">{t('descripcion_proyecto_1')}</p>
                </div>

                <div className="flex flex-col items-center mb-8 md:mb-0">
                    <img src={tienda} alt={t('proyecto_2')} className="w-64 h-64 object-cover mb-4" />
                    <p className="text-center w-64 overflow-wrap break-word bg-green-300 p-4 -mt-4">{t('descripcion_proyecto_2')}</p>
                </div>

                <div className="flex flex-col items-center">
                    <img src={logo} alt={t('proyecto_3')} className="w-64 h-64 object-cover mb-4" />
                    <p className="text-center w-64 overflow-wrap break-word bg-green-300 p-4 -mt-4">{t('descripcion_proyecto_3')}</p>
                </div>
            </div>
        </div>
    );
}

export default Proyectos;
