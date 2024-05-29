import React from 'react';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../../assets/imagenes/c.png';
import image2 from '../../assets/imagenes/java.png';
import image3 from '../../assets/imagenes/javas.png';
import image5 from '../../assets/imagenes/python.png';
import image4 from '../../assets/imagenes/react.png';

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
];

const Lenguajes = () => {
  const { t } = useTranslation();

  return (
    <section className='flex flex-col items-center justify-center m-4 md:m-10'>
      <h1 className='text-black font-bold text-4xl py-6'>{t('aplicaciones_uso')}</h1>
      <div className='w-full max-w-md'>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          loop
          autoplay={{ delay: 3000 }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="py-6 px-6 mt-20 flex justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80  rounded-lg overflow-hidden">
                  <img src={image} alt={`Slide ${index + 1}`} className='w-full h-full object-contain' />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Lenguajes;
