import type { HeaderProfileResponse, JobResponse, SkillCategoryResponse, LanguageItemResponse } from '../types/resume';

const normalizeLanguage = (lang: string): 'en' | 'es' => {
  return lang.toLowerCase().startsWith('es') ? 'es' : 'en';
};

export const getProfileHeaderFromBackend = (lang: 'en' | 'es'): HeaderProfileResponse => {
  const normalizedLang = normalizeLanguage(lang);

  if (normalizedLang === 'es') {
    return {
      name: "Eleazar Femenías Alfaro",
      role: "Ingeniero Front End Senior & Especialista UI/UX",
      email: "eleazarfa@gmail.com",
      phone: "(506) 8615-1234",
      location: "San José, Costa Rica",
      githubUrl: "https://github.com/eleazarfa",
      linkedinUrl: "https://www.linkedin.com/in/eleazarfa/"
    };
  }

  return {
    name: "Eleazar Femenías Alfaro",
    role: "Senior Front End Engineer & UI/UX Specialist",
    email: "eleazarfa@gmail.com",
    phone: "(506) 8615-1234",
    location: "San José, Costa Rica",
    githubUrl: "https://github.com/eleazarfa",
    linkedinUrl: "https://www.linkedin.com/in/eleazarfa/"
  };
};

export const getExperienceFromBackend = (lang: 'es' | 'en'): JobResponse[] => {
  const normalizedLang = normalizeLanguage(lang);

  if (normalizedLang === 'es') {
    return [
      {
        id: "exp-1",
        role: "Front-End Developer & UI Specialist (Freelance)",
        company: {
          name: "Consultoría Independiente / Proyectos Propios",
          location: "Costa Rica (Remoto)"
        },
        period: "jun. 2026 - Presente",
        highlights: [
          "Desarrollo Front-End de una plataforma transaccional de Centro de Pagos (Payment Center), implementando validaciones en tiempo real, integración segura de pasarelas de pago y diseño responsivo enfocado en conversión.",
          "Diseñé y desplegué una aplicación web interactiva (Interactive Resume) en React 19, TypeScript y Vite, aplicando arquitectura modular, soporte multi-idioma (i18next) y estilización con @media print para exportación limpia a PDF.",
          "Responsable de la consultoría técnica integral, prototipado de interfaces en Figma y entrega de código modular optimizado para rendimiento web (WPO) y accesibilidad."
        ]
      },
      {
        id: "exp-2",
        role: "Lead Front End Developer & UI/UX",
        company: {
          name: "Sysco Consultores de Sistemas",
          location: "Costa Rica"
        },
        period: "oct. 2019 - may. 2026",
        highlights: [
          "Diseñé y construí desde cero una arquitectura de componentes modulares en React y JavaScript (ES6+)/HTML5/CSS3 para software de gestión empresarial y portales de clientes.",
          "Desarrollo Front-End de herramientas interactivas: motor de maquetación web (page builder), módulo de firma digital y calculadora de emisiones.",
          "Encargado de la configuración de empaquetado y optimización de assets con Webpack para mejorar la reutilización de código.",
          "Estandarización de prototipos de alta fidelidad en Figma y mentoría técnica en maquetación Front-End para desarrolladores junior y empresas aliadas.",
          "Responsable de la gestión de dominios, migración de hosting y soporte técnico a plataformas corporativas en WordPress y React."
        ]
      },
      {
        id: "exp-3",
        role: "Webmaster",
        company: {
          name: "My Costa Rica",
          location: "Costa Rica"
        },
        period: "sept. 2018 - sept. 2019",
        highlights: [
          "Lideré la migración de servidor e infraestructura para el portal CostaRica.Org en WordPress.",
          "Responsable de la integración de flujos de marketing y automatización con HubSpot CRM.",
          "Gestión y ejecución de estrategias de SEO técnico y SEM para maximizar la captación orgánica de clientes."
        ]
      },
      {
        id: "exp-4",
        role: "Front-End Developer & CMS Specialist (Freelance)",
        company: {
          name: "Desarrollo Independiente / Proyectos para Agencias",
          location: "Costa Rica (Remoto)"
        },
        period: "sept. 2017 - ago. 2018",
        highlights: [
          "Desarrollé y personalicé plantillas a medida para Shopify (Liquid, CSS responsivo) y plataformas web basadas en requerimientos técnicos directos.",
          "Construcción del Front-End para una aplicación web de check-in y acreditación en tiempo real orientada a conferencias y eventos masivos.",
          "Responsable de la entrega de maquetaciones pixel-perfect, optimización de velocidad de carga y compatibilidad cross-browser en entregas multi-cliente."
        ]
      },
      {
        id: "exp-5",
        role: "Diseñador y Desarrollador Web",
        company: {
          name: "My Costa Rica",
          location: "Costa Rica"
        },
        period: "sept. 2016 - ago. 2017",
        highlights: [
          "Lideré la migración integral de CMS (Joomla a WordPress), desarrollando plantillas y temas a medida con Advanced Custom Fields (ACF) y Custom Post Types.",
          "Encargado de la reestructuración de URLs y corrección de incidencias críticas de enrutamiento (loops de redirección, códigos 301 y 404).",
          "Desarrollo de plataformas web regionales (Panamá y Nicaragua) y dirección del equipo editorial durante la carga de contenidos."
        ]
      },
      {
        id: "exp-6",
        role: "Diseñador UI/UX & Consultor Front-End",
        company: {
          name: "Smartsoft / Soy Sentinel",
          location: "San José, Costa Rica"
        },
        period: "oct. 2015 - sept. 2016",
        highlights: [
          "Diseñé interfaces de usuario (UI/UX) y flujos de navegación para la plataforma bancaria de prevención de fraude (Sentinel).",
          "Responsable de la documentación técnica y funcional de pantallas en Microsoft Word para equipos Front-End y Back-End.",
          "Soporte especializado en maquetación HTML/CSS y trabajo colaborativo bajo marco metodológico Scrum en Jira."
        ]
      },
      {
        id: "exp-7",
        role: "Web Developer",
        company: {
          name: "My Costa Rica",
          location: "Costa Rica"
        },
        period: "sept. 2013 - abr. 2015",
        highlights: [
          "Responsable del mantenimiento integral de portales en Joomla, optimización del código del tema y depuración de incidencias.",
          "Encargado de la resolución de enlaces rotos y reestructuración de la navegación para asegurar la continuidad operativa del sitio.",
          "Elaboración de material gráfico publicitario y piezas de diseño para la identidad de marca."
        ]
      },
      {
        id: "exp-8",
        role: "Web Designer & Front-End Developer",
        company: {
          name: "Pixel Design Costa Rica",
          location: "Costa Rica"
        },
        period: "nov. 2010 - nov. 2012",
        highlights: [
          "Diseñé conceptos visuales y desarrollé temas a medida sobre CMS (WordPress, Drupal, Joomla) y sitios web dinámicos en PHP/HTML/CSS/JS.",
          "Desarrollo de minijuegos interactivos y aplicaciones promocionales para activaciones corporativas y eventos.",
          "Supervisión del flujo de trabajo del equipo de desarrollo y control de tiempos de entrega."
        ]
      },
      {
        id: "exp-9",
        role: "Desarrollador Web & Diseñador Gráfico",
        company: {
          name: "Publicidad MG",
          location: "Costa Rica"
        },
        period: "sept. 2009 - oct. 2010",
        highlights: [
          "Implementé maquetaciones web interactivas con HTML, CSS y jQuery a partir de requerimientos aprobados por clientes.",
          "Responsable del diseño y desarrollo de catálogos digitales interactivos y piezas publicitarias ATL mediante Adobe Creative Suite."
        ]
      }
    ];
  }

  return [
    {
      id: "exp-1",
      role: "Front-End Developer & UI Specialist (Freelance)",
      company: {
        name: "Independent Contractor / Self-Employed",
        location: "Costa Rica (Remote)"
      },
      period: "Jun 2026 - Present",
      highlights: [
        "Engineered the front-end core for an enterprise Payment Center platform, integrating secure transactional checkout flows, input validations, and responsive layouts.",
        "Architected and deployed an Interactive Resume web app in React 19, TypeScript, and Vite, featuring modular component architecture, i18n localization, and print-ready PDF export via native CSS.",
        "Delivered end-to-end technical consulting, translating Figma prototypes into accessible, high-performance web components aligned with Core Web Vitals standards."
      ]
    },
    {
      id: "exp-2",
      role: "Lead Front-End Developer & UI/UX",
      company: {
        name: "Sysco Consultores de Sistemas",
        location: "Costa Rica"
      },
      period: "Oct 2019 - May 2026",
      highlights: [
        "Architected and implemented a reusable, modular component library from scratch using React and JavaScript (ES6+)/HTML5/CSS3 for enterprise platforms and client portals.",
        "Engineered the front-end core for custom interactive solutions, including a page builder engine, digital signature modules, and carbon emission calculators.",
        "Configured build and bundling pipelines using Webpack, improving asset reusability and load performance.",
        "Standardized high-fidelity prototypes in Figma and mentored junior developers on modern front-end best practices.",
        "Managed hosting migrations, domain infrastructure, and maintained production deployments across WordPress and React apps."
      ]
    },
    {
      id: "exp-3",
      role: "Webmaster",
      company: {
        name: "My Costa Rica",
        location: "Costa Rica"
      },
      period: "Sep 2018 - Sep 2019",
      highlights: [
        "Led server migrations and infrastructure setup for the main CostaRica.Org WordPress platform.",
        "Integrated sales and marketing automation workflows connecting the web portal with HubSpot CRM.",
        "Executed technical SEO and SEM strategies to scale organic traffic and lead acquisition."
      ]
    },
    {
      id: "exp-4",
      role: "Front-End Developer & CMS Specialist (Freelance)",
      company: {
        name: "Independent Contractor / Agency Collaborations",
        location: "Costa Rica (Remote)"
      },
      period: "Sep 2017 - Aug 2018",
      highlights: [
        "Built and customized bespoke Shopify themes (Liquid, responsive CSS) and multi-client web platforms based on detailed agency technical briefs.",
        "Engineered the front-end interface for an automated attendee check-in and accreditation web application for large-scale corporate conferences.",
        "Delivered pixel-perfect layouts, cross-browser compatibility, and load performance optimizations across client deliverables."
      ]
    },
    {
      id: "exp-5",
      role: "Web Designer & Developer",
      company: {
        name: "My Costa Rica",
        location: "Costa Rica"
      },
      period: "Sep 2016 - Aug 2017",
      highlights: [
        "Led full CMS platform migration (Joomla to WordPress), developing custom themes via Advanced Custom Fields (ACF) and custom post types.",
        "Restructured URL hierarchy and fixed critical routing issues (redirection loops, 301 redirects, and 404 errors) for technical SEO health.",
        "Engineered multi-region web instances (Panama & Nicaragua) and directed content workflows during site launches."
      ]
    },
    {
      id: "exp-6",
      role: "UI/UX Designer & Front-End Consultant",
      company: {
        name: "Smartsoft / Soy Sentinel",
        location: "San José, Costa Rica"
      },
      period: "Oct 2015 - Sep 2016",
      highlights: [
        "Designed UI/UX interfaces and core user workflows for enterprise banking fraud prevention software (Sentinel).",
        "Collaborated with software architects to deliver detailed UI/UX specifications for front-end and back-end engineering teams.",
        "Provided front-end layout troubleshooting (HTML/CSS) and operated in Scrum sprints using Jira."
      ]
    },
    {
      id: "exp-7",
      role: "Web Developer",
      company: {
        name: "My Costa Rica",
        location: "Costa Rica"
      },
      period: "Sep 2013 - Apr 2015",
      highlights: [
        "Maintained and restructured core portal architecture in Joomla, debugging legacy issues and cleaning up theme layouts.",
        "Resolved critical routing bottlenecks, redirect loops, and broken links to improve site uptime and usability.",
        "Designed brand collateral and visual assets for multi-channel marketing campaigns."
      ]
    },
    {
      id: "exp-8",
      role: "Web Designer & Front-End Developer",
      company: {
        name: "Pixel Design Costa Rica",
        location: "Costa Rica"
      },
      period: "Nov 2010 - Nov 2012",
      highlights: [
        "Designed UI mockups and developed custom CMS themes (WordPress, Drupal, Joomla) alongside PHP/HTML/CSS/JS websites.",
        "Programmed interactive digital experiences and promotional mini-games for corporate events.",
        "Supervised development sprint deliveries and coordinated client technical requirements with creative directors."
      ]
    },
    {
      id: "exp-9",
      role: "Web Developer & Graphic Designer",
      company: {
        name: "Publicidad MG",
        location: "Costa Rica"
      },
      period: "Sep 2009 - Oct 2010",
      highlights: [
        "Implemented interactive web layouts using HTML, CSS, and jQuery based on approved client design briefs.",
        "Built interactive digital product catalogs and designed print/ATL advertising assets using Adobe Creative Suite."
      ]
    }
  ];
};

export const getSkillsFromBackend = (): SkillCategoryResponse[] => {
  return [
    { id: "sk-1", category: "Core / Front End", items: ["JavaScript (ES6+)", "TypeScript", "React", "HTML5", "CSS3 / SCSS", "Tailwind CSS", "Responsive Design", "Mobile-First Architecture"] },
    { id: "sk-2", category: "Back End & Data", items: ["Node.js", "Express", "PHP", "MySQL", "REST APIs"] },
    { id: "sk-3", category: "Design & UX/UI", items: ["Figma", "Adobe Creative Suite", "Wireframing", "High-Fidelity Prototyping", "Design Systems"] },
    { id: "sk-4", category: "Methodologies & Tools", items: ["Git / GitHub", "Scrum", "Agile", "Web Performance Optimization (WPO)"] }
  ];
};

export const getLanguagesFromBackend = (lang: 'en' | 'es'): LanguageItemResponse[] => {
  const normalizedLang = normalizeLanguage(lang);

  if (normalizedLang === 'es') {
    return [
      { id: "lang-1", name: "Inglés", level: "C1 Avanzado (Fluido)", credentialUrl: "https://cert.efset.org/Qi7ABV" },
      { id: "lang-2", name: "Español", level: "Nativo" }
    ];
  }
  return [
    { id: "lang-1", name: "English", level: "C1 Advanced (Fluent)", credentialUrl: "https://cert.efset.org/Qi7ABV" },
    { id: "lang-2", name: "Spanish", level: "Native" }
  ];
};