const data = [
  {
    id: 1,
    year: '2024',
    date: '22/03/2024',
    category: 'WEB DESIGN',
    title: 'Mi Portfolio',
    image: 'portfolioWhite.png',
    technologies: [
      'PWA',
      'React',
      'CSS Modules',
      'Responsive',
      'Neumorphism',
      'Netlify',
      'HTML',
      'JS',
      'react-transition-group',
      'Formspree',
      'Eslint',
      'Prettier',
    ],
    desc: `Mi sitio web personal estilo Neumorfismo.
     Este proyecto me tomo mucho trabajo solo para poder expresar lo que hago y lo que me gusta hacer. 
     Este portafolio es una PWA, asi que puedes instalar la aplicacion en tu dispositivo.`,
    links: {
      code: 'https://github.com/aleegrr/portfolio',
      page: 'https://alejandrogil.netlify.app/',
    },
  },
  {
    id: 2,
    year: '2020',
    date: '19/06/2020',
    category: 'FULLSTACK',
    title: 'TattooMax',
    image: 'tattoomax.png',
    technologies: [
      'npm',
      'Mongodb',
      'Next.js',
      'Responsive',
      'HTML',
      'CSS',
      'JavaScript',
      'Eslint',
      'Prettier',
    ],
    desc: `Este proyecto fue realizado para el TFG del grado superior de DAW. Fue mi primer proyecto grande, full-stack. Este proyecto me sirvió para aprender lenguajes distintos y para mejorar mi logica de programación. Para hacer el front-end he usado Next.js, y para el back-end he usado la base de datos de MongoDB. Es un proyecto que me costó mucho esfuerzo realizarlo por mi poca experiencia realizando proyectos de tan alta dificultad. Tiene algunos fallos, pero es normal para haber sido el primero, desde entonces he aprendido mucho y he mejorado mi lógica de programación y mi escalabilidad y limpieza a la hora de codificar`,
    links: {
      code: 'frontend: https://github.com/aleegrr/TattooMax-frontend, backend: https://github.com/aleegrr/TattooMax-backend',
      page: 'https://tattoomax.netlify.app/',
    },
  },
  {
    id: 3,
    year: '2024',
    date: '30/01/2024',
    category: 'IA',
    title: 'ChatBot',
    image: 'chatBot.png',
    technologies: [
      'Python',
      'Gradio',
      'Langchain',
      'Langchain OPENAI',
      'Langfuse',
      'Wikipedia API',
      'News API',
      'HuggingFace',
      'Eslint',
      'Prettier',
    ],
    desc: `Este es un proyecto de clase, en el que teníamos que realizar un ChatBot usando modelos de Inteligencia Artificial. Este proyecto me ayudó a aprender a usar modelos de IA en proyectos para poder usar todas las funcionalidades para el mismo. Aprendí y mejoré la lógica de usar modelos y cómo tienen que usarse para sacar todo el partido y que funcionen correctamente. En este caso, el proyecto trata de un ChatBot, el cual responde las preguntas que hagamos sacando los datos de unos documentos a los que tiene acceso, estos documentos tratan sobre reglamento de baloncesto. También tiene la opción de buscar en wikipedia, escribiendo "Busca en Wikipedia: " antes de lo que queremos buscar o la opción de buscar últimas noticias sobre baloncesto, exribiendo "Últimas noticias" en el input.
    `,
    links: {
      code: 'https://github.com/aleegrr/chatBotBasket',
      page: 'https://huggingface.co/spaces/aleegr/chatBotBasket',
    },
  },
];

export default data;
