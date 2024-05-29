
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      portfolio: 'Portfolio',
      introduction: 'My name is Jhosept Villota, a software engineering student, and this is my portfolio. I hope you like it!',
      viewPortfolio: 'View Portfolio',
      about_me: 'About Me',
      projects: 'Projects',
      languages: 'Languages',
      suggestions: 'Suggestions',
      sugerencias: 'Suggestions',
      julian_escobar: 'Julian Escobar',
      comentario_julian: 'Impressive work, each project shows a high level of professionalism and creativity. I loved how you approached the challenges and achieved effective and visually appealing results.',
      carlos_alegria: 'Carlos Alegria',
      comentario_carlos: 'I really liked your portfolio, especially the diversity of projects and your ability to tackle different design challenges. However, I think you could improve the description of your projects and the technologies used in each project to provide a more complete view of your approach and skills.',
      titulo_sugerencia_3: 'Suggestion Title 3',
      comentario_titulo_3: 'Excellent variety of projects and attention to detail. It would be useful to include more about the processes and technologies used in each project. Overall, a very interesting portfolio that demonstrates skill and creativity.',
      sobre_mi: 'About Me',
      mi_foto: 'My Photo',
      descripcion_1: 'My name is Jhosept Sebastian. This portfolio will be created and adapted to create an appropriate design with a pleasant tone for others.',
      descripcion_2: 'I study at the Cooperativa de Colombia University, Pasto campus. I am currently in my fifth semester of software engineering.',
      descripcion_3: 'We have focused on different branches of programming and have used various languages which have enriched our professional skills.',
      proyectos: 'Projects',
      buscar_proyectos: 'Search projects',
      proyecto_1: 'Project 1',
      descripcion_proyecto_1: 'Design of an application focused on promoting health and wellness by providing users with information on nutrition, exercise routines, and tracking healthy habits.',
      proyecto_2: 'Project 2',
      descripcion_proyecto_2: 'Complete redesign of an e-commerce website to improve user experience and sales conversions.',
      proyecto_3: 'Project 3',
      descripcion_proyecto_3: 'Creation of a corporate entity, including logo design, color palette, typography, and graphic elements to establish a strong and recognizable brand.',
      aplicaciones_uso: 'Applications in Use',
    },
  },
  es: {
    translation: {
      portfolio: 'Portafolio',
      introduction: 'Mi nombre es Jhosept Villota, estudiante de ingeniería de software y este es mi portafolio. ¡Espero te guste!',
      viewPortfolio: 'Ver portafolio',
      about_me: 'Sobre Mi',
      projects: 'Proyectos',
      languages: 'Lenguajes',
      suggestions: 'Sugerencias',
      sugerencias: 'Sugerencias',
      julian_escobar: 'Julian Escobar',
      comentario_julian: 'Impresionante trabajo, cada proyecto muestra un alto nivel de profesionalismo y creatividad. Me encantó cómo abordaste los desafíos y lograste resultados efectivos y visualmente atractivos.',
      carlos_alegria: 'Carlos Alegria',
      comentario_carlos: 'Me gustó mucho tu portafolio, especialmente la diversidad de proyectos y tu capacidad para abordar diferentes desafíos de diseño. Sin embargo, creo que podrías mejorar la descripción de tus proyectos y las tecnologías utilizadas en cada proyecto para proporcionar una visión más completa de tu enfoque y habilidades.',
      titulo_sugerencia_3: 'Título de la sugerencia 3',
      comentario_titulo_3: 'Excelente variedad de proyectos y atención al detalle. Sería útil incluir más sobre los procesos y tecnologías utilizadas en cada proyecto. En general, un portafolio muy interesante que demuestra habilidad y creatividad.',
      sobre_mi: 'Sobre Mí',
      mi_foto: 'Mi Foto',
      descripcion_1: 'Mi nombre es Jhosept Sebastian. Este portafolio lo realizaremos y buscaremos adaptar y crear un diseño adecuado con una tonalidad agradable para las demás personas.',
      descripcion_2: 'Estudio en la universidad Cooperativa de Colombia campus Pasto, estoy cursando mi quinto semestre de ingeniería de software.',
      descripcion_3: 'Nos hemos enfocado en diferentes ramas de la programación y hemos desempeñado diferentes lenguajes los cuales nos han servido para enriquecer nuestra labor como profesionales.',
      proyectos: 'Proyectos',
      buscar_proyectos: 'Buscar proyectos',
      proyecto_1: 'Proyecto 1',
      descripcion_proyecto_1: 'Diseño de una aplicación centrada en promover la salud y bienestar proporcionando a los usuarios información sobre nutrición, rutinas de ejercicio y seguimiento de hábitos saludables.',
      proyecto_2: 'Proyecto 2',
      descripcion_proyecto_2: 'Rediseño completo de un sitio web de comercio electrónico para mejorar la experiencia del usuario y las conversiones de venta.',
      proyecto_3: 'Proyecto 3',
      descripcion_proyecto_3: 'Creación de una entidad corporativa, incluyendo diseño de logotipo, paleta de colores, tipografía y elementos gráficos para establecer una marca sólida y reconocible.', 
      aplicaciones_uso: 'Aplicaciones de Uso',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', 
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
