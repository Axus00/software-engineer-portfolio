export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'es';
export const showDefaultLang = false;
export const LANGUAGE_STORAGE_KEY = 'lang';

export const ui = {
  es: {
    'site.name': 'Fer.Dev',
    'nav.toggleLanguage': 'Cambiar idioma',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.connect': 'Conectar',
    'nav.contact': 'Contacto',

    'hero.title.one': 'Construyendo',
    'hero.title.highlight': 'Resiliencia Digital',
    'hero.title.three': 'y Maestría Técnica.',
    'hero.description':
      'Desarrollador Full Stack e IA que construye productos web y agentes LLM escalables, aplicando arquitectura limpia y microservicios para optimizar procesos e impulsar resultados de negocio.',
    'hero.cta.projects': 'Explora mis proyectos',
    'hero.cta.contact': 'Contáctame',

    'trust.heading': 'Empresas con las que he trabajado',

    'messages.items.0.message':
      'Tuve la oportunidad de trabajar con Fernando en diferentes proyectos exitosos donde fue quien lideró e hizo parte crucial en todo el ciclo de vida, aportando en especial medida como Backend. Es un profesional apasionado y dedicado, con humildad por aprender y vocación por enseñar.',
    'messages.items.0.position': 'Software Developer',
    'messages.items.1.message': 'Un profesional integral.',
    'messages.items.1.position': 'Front Developer',
    'messages.items.2.message':
      'Fernando destaca por su atención al detalle y su comunicación asertiva. Totalmente recomendado.',
    'messages.items.2.position': 'Product Manager',
    'messages.items.3.message':
      'Conozco a Fernando desde hace más de 3 años. Estudiamos juntos desarrollo de software y hemos tenido la oportunidad de trabajar a la par, por lo que puedo afirmar que es una persona íntegra, con excelentes capacidades de trabajo y una gran disposición para superar cualquier obstáculo. Ha demostrado un alto rendimiento en cada proyecto en el que participa, impulsado por sus constantes ganas de aprender y de compartir sus experiencias con los demás.',
    'messages.items.3.position': 'Software Developer, Arro y DevOps Blackbird',
    'messages.items.4.message':
      'Pocos profesionales logran esa combinación de técnica sólida y una calidad humana genuina. Fernando ha evolucionado para convertirse en un desarrollador de primer nivel, destacando no solo en IA y Full Stack, sino en la integridad con la que asume cada reto. Es un profesional responsable, que aporta soluciones elegantes y que siempre contribuye a un ambiente de trabajo sano y colaborativo. Un talento excepcional con una visión técnica impecable.',
    'messages.items.4.position': 'QA Lead',
    'messages.items.5.message':
      'He tenido el gusto de trabajar con Fernando y puedo decir que es un desarrollador excepcional. Su capacidad de aprender tecnologías nuevas con rapidez, combinada con su solidez técnica y adaptabilidad, lo hacen un profesional muy valioso para cualquier equipo.',
    'messages.items.5.position': 'Software Engineer - Team Leader',

    'messages.items.action':
      'cerrar',

    'experience.heading': 'Trayectoria Profesional',
    'experience.currentTag': 'ACTUALMENTE',
    'experience.items.0.role': 'Desarrollador Fullstack',
    'experience.items.0.period': '2024 - Actualidad',
    'experience.items.0.description':
      'Participación y liderazgo en proyectos Full Stack dentro de Blackbird Labs, contribuyendo en soluciones de IA, rebranding de productos, diseño de APIs y desarrollo frontend para mejorar experiencia, escalabilidad y resultados de negocio.',
    'experience.items.0.subItems.0.label': 'STAFFING ÉXITO - Actualidad',
    'experience.items.0.subItems.0.content': 'Software Solutions - Soporte de Infraestructura',
    'experience.items.0.subItems.1.label': 'STAFFING ARRO - NG',
    'experience.items.0.subItems.1.content': 'Software Solutions - Rebranding y Soporte Post Desarrollo',
    'experience.items.1.role': 'Desarrollador Backend',
    'experience.items.1.period': '2023 - 2024',
    'experience.items.1.description':
      'Responsable y encargado de la construcción de RiwiTalent tanto en el Backend como en el Frontend, realizando separación de servicios con arquitectura Hexagonal y posteriormente Clean Architecture, gestionando de manera adecuada las peticiones desde el Frontend.',

    'projects.heading': 'Proyectos',
    'projects.description': 'Implementaciones de alto nivel para resolver problemas complejos.',
    'projects.repository': 'Repositorio',
    'projects.demo': 'Demo en vivo',
    'projects.visibility.public': 'Público',
    'projects.visibility.private': 'Privado',
    'projects.comingSoon': 'Proximamente',
    'projects.items.0.description':
      'Creado utilizando herramientas como JavaScript, Html, CSS y Sass. Es una página e-commerce dedicada a mejorar los ingresos de los campesinos, pero también ofreciendo productos frescos y de primera mano para los usuarios.',
    'projects.items.1.description':
      'Aplicación enfocada en la gestión operativa y organizacional, orientada a optimizar procesos internos y facilitar la administración de la información.',
    'projects.items.2.description': 'Aplicación para buscar cualquier Gift que desees.',
    'projects.items.3.description':
      'Asistente inteligente construido con LangGraph y LangChain para automatizar tareas DevOps y Scrum.',
    'projects.items.4.description':
      'Web especializada en acortar links y brindar estadísticas de uso, con un enfoque en la privacidad y seguridad de los usuarios.',

    'presence.openSource.title': 'Trabajo Open Source',
    'presence.openSource.description':
      'Explorando nuevas fronteras de ingeniería a través del conocimiento compartido y el código.',
    'presence.openSource.cta': 'Explorar mi código',
    'presence.network.title': 'Red Profesional',
    'presence.network.description':
      'Construyendo alianzas estratégicas y liderazgo técnico a nivel global.',
    'presence.network.cta': 'Conectemos',

    'contact.heading': '¿Listo para diseñar el futuro?',
    'contact.description':
      'Actualmente disponible para roles senior y consultoría en proyectos de alto impacto.',
    'contact.cta': 'Iniciar contacto',

    'footer.description': 'Fernando Gómez, Software Engineer.',
  },
  en: {
    'site.name': 'Fer.Dev',
    'nav.toggleLanguage': 'Switch language',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.connect': 'Connect',
    'nav.contact': 'Contact',

    'hero.title.one': 'Building',
    'hero.title.highlight': 'Digital Resilience',
    'hero.title.three': 'and Technical Mastery.',
    'hero.description':
      'Full Stack and AI developer building scalable web products and LLM agents, applying clean architecture and microservices to optimize processes and drive business outcomes.',
    'hero.cta.projects': 'Explore my projects',
    'hero.cta.contact': 'Contact me',

    'trust.heading': 'Companies I have worked with',

    'messages.items.0.message':
      'I had the opportunity to work with Fernando on different successful projects where he led and played a crucial role throughout the entire lifecycle, especially contributing as a Backend developer. He is a passionate and dedicated professional, humble about learning and driven to teach.',
    'messages.items.0.position': 'Software Developer',
    'messages.items.1.message': 'A well-rounded professional.',
    'messages.items.1.position': 'Frontend Developer',
    'messages.items.2.message':
      'Fernando stands out for his attention to detail and assertive communication. Highly recommended.',
    'messages.items.2.position': 'Product Manager',
    'messages.items.3.message':
      'I have known Fernando for more than 3 years. We studied software development together and have had the opportunity to work side by side, so I can affirm that he is an upright person with excellent work skills and a great willingness to overcome any obstacle. He has consistently delivered high performance in every project he joins, driven by his constant desire to learn and to share his experiences with others.',
    'messages.items.3.position': 'Software Developer, Arro and DevOps Blackbird',
    'messages.items.4.message':
      'Few professionals achieve that combination of solid technical skill and genuine human quality. Fernando has evolved into a top-level developer, standing out not only in AI and Full Stack, but also in the integrity with which he takes on each challenge. He is a responsible professional who provides elegant solutions and always contributes to a healthy, collaborative work environment. An exceptional talent with impeccable technical vision.',
    'messages.items.4.position': 'QA Lead',
    'messages.items.5.message':
      'I have had the pleasure of working with Fernando, and I can say that he is an exceptional developer. His ability to quickly learn new technologies, combined with his technical expertise and adaptability, make him a highly valuable asset to any team.',
    'messages.items.5.position': 'Software Engineer - Team Leader',

    'messages.items.action':
      'close',

    'experience.heading': 'Professional Journey',
    'experience.currentTag': 'CURRENT',
    'experience.items.0.role': 'Fullstack Developer',
    'experience.items.0.period': '2024 - Present',
    'experience.items.0.description':
      'Participation and leadership in Full Stack projects at Blackbird Labs, contributing to AI solutions, product rebranding, API design, and frontend development to improve experience, scalability, and business outcomes.',
    'experience.items.0.subItems.0.label': 'STAFFING ÉXITO - Present',
    'experience.items.0.subItems.0.content': 'Software Solutions - Infrastructure Support',
    'experience.items.0.subItems.1.label': 'STAFFING ARRO - NG',
    'experience.items.0.subItems.1.content': 'Software Solutions - Rebranding and Post-Development Support',
    'experience.items.1.role': 'Backend Developer',
    'experience.items.1.period': '2023 - 2024',
    'experience.items.1.description':
      'Responsible for building RiwiTalent on both backend and frontend, implementing service separation with Hexagonal Architecture and later Clean Architecture, while handling frontend requests appropriately.',

    'projects.heading': 'Projects',
    'projects.description': 'High-level implementations to solve complex problems.',
    'projects.repository': 'Repository',
    'projects.demo': 'Live Demo',
    'projects.visibility.public': 'Public',
    'projects.visibility.private': 'Private',
    'projects.comingSoon': 'Coming Soon',
    'projects.items.0.description':
      'Built with tools such as JavaScript, HTML, CSS, and Sass. It is an e-commerce site focused on increasing farmers\' income while offering fresh products directly to users.',
    'projects.items.1.description':
      'Application focused on operational and organizational management, aimed at optimizing internal processes and making information administration easier.',
    'projects.items.2.description': 'Application to search for any GIF you want.',
    'projects.items.3.description':
      'Intelligent assistant built with LangGraph and LangChain to automate DevOps and Scrum tasks.',
    'projects.items.4.description':
      'A website specializing in shortening links and providing usage statistics, with a focus on user privacy and security.',

    'presence.openSource.title': 'Open Source Work',
    'presence.openSource.description':
      'Exploring new engineering frontiers through shared knowledge and code.',
    'presence.openSource.cta': 'Explore my code',
    'presence.network.title': 'Professional Network',
    'presence.network.description':
      'Building strategic partnerships and technical leadership globally.',
    'presence.network.cta': 'Let\'s connect',

    'contact.heading': 'Ready to design the future?',
    'contact.description':
      'Currently available for senior roles and consulting on high-impact projects.',
    'contact.cta': 'Start a conversation',

    'footer.description': 'Fernando Gómez, Software Engineer.',
  },
} as const;

export type TranslationKey = keyof (typeof ui)[typeof defaultLang];
