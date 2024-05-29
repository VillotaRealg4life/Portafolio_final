import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../src/app/components/Footer';
import Header from '../src/app/components/Header';
import Lenguajes from '../src/app/components/Lenguajes';
import Proyectos from '../src/app/components/Proyectos';
import SobreMi from '../src/app/components/SobreMi';
import Sugerencias from '../src/app/components/Sugerencias';
import Presentacion from '../src/app/components/presentacion';

const App = () => {
  const backgroundStyle = {
    background: 'linear-gradient(135deg, #00C9FF 0%, #92FE9D 100%)',
    minHeight: '100vh',
    color: 'white', 
  };

  return (
    <div style={backgroundStyle} className='min-h-screen'>
      <Routes>
        <Route path="/" element={<Presentacion />} />
        <Route path="/sobre-mi" element={<><Header /><SobreMi /><Footer /></>} />
        <Route path="/proyectos" element={<><Header /><Proyectos /><Footer /></>} />
        <Route path="/lenguajes" element={<><Header /><Lenguajes /><Footer /></>} />
        <Route path="/sugerencias" element={<><Header /><Sugerencias /><Footer /></>} />
      </Routes>
    </div>
  );
}

export default App;