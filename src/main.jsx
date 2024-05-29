
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '../src/index.css';
import App from './App.jsx';
import './i18n.js';


createRoot(document.getElementById('root')).render( 
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
