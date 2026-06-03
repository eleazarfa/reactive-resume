import type { HeaderProfileResponse, JobResponse, SkillCategoryResponse, LanguageItemResponse } from '../types/resume';

export const getProfileHeaderFromBackend = (lang: 'en' | 'es'): HeaderProfileResponse => {
  if (lang === 'es') {
    return {
      name: "Eleazar Femenías Alfaro",
      role: "Ingeniero Front End Senior & Especialista UI/UX",
      email: "eleazarfa@gmail.com",
      phone: "(506) 8615-1234",
      location: "Heredia, Costa Rica",
      githubUrl: "https://github.com",
      linkedinUrl: "https://linkedin.com"
    };
  }

  return {
    name: "Eleazar Femenías Alfaro",
    role: "Senior Front End Engineer & UI/UX Specialist",
    email: "eleazarfa@gmail.com",
    phone: "(506) 8615-1234",
    location: "Heredia, Costa Rica",
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com"
  };
};

export const getExperienceFromBackend = (lang: 'en' | 'es'): JobResponse[] => {
  if (lang === 'es') {
    return [
      {
        id: "exp-1",
        role: "Especialista UI/UX & Front End / Estratega Digital",
        company: {
          name: "My Costa Rica",
          location: "Costa Rica"
        },
        period: "2019 - Presente",
        highlights: [
          "Lideré la arquitectura front-end y el rediseño de interfaz utilizando React y herramientas modernas, acelerando las métricas de Web Performance.",
          "Diseñé e implementé flujos de trabajo transaccionales complejos, maximizando la conversión mediante pruebas de usabilidad iterativas.",
          "Mantuve total autonomía sobre las funcionalidades del producto, gestionando integraciones full-stack (Node.js/PHP)."
        ]
      },
      {
        id: "exp-2",
        role: "Desarrollador Front End & Webmaster",
        company: {
          name: "My Costa Rica",
          location: "Costa Rica"
        },
        period: "2016 - 2017 / 2018 - 2019",
        highlights: [
          "Diseñé componentes de interfaz de usuario escalables y semánticos, optimizando los cambios de diseño principales (CLS).",
          "Colaboré de forma nativa con equipos de diseño y marketing para establecer estándares limpios de UI."
        ]
      },
      {
        id: "exp-3",
        role: "Diseñador e Ingeniero UI & UX",
        company: {
          name: "SmartSoft S.A.",
          location: "San José, Costa Rica"
        },
        period: "2015 - 2016",
        highlights: [
          "Diseñé y prototipé interfaces críticas para aplicaciones bancarias empresariales enfocadas en prevención de fraudes.",
          "Realicé investigación de usuarios de extremo a extremo, alineando requisitos complejos en componentes de alta fidelidad."
        ]
      },
      {
        id: "exp-4",
        role: "Desarrollador Front End / Webmaster",
        company: {
          name: "My Costa Rica",
          location: "Costa Rica"
        },
        period: "2012 - 2015",
        highlights: [
          "Responsable del mantenimiento completo del sitio, desarrollo de diseños personalizados y optimización de bases de datos (MySQL/PHP)."
        ]
      }
    ];
  }

  return [
    {
      id: "exp-1",
      role: "UI/UX & Front End Specialist / Digital Strategist",
      company: {
        name: "My Costa Rica",
        location: "Costa Rica"
      },
      period: "2019 - Present",
      highlights: [
        "Led the front-end architecture and UI design redesign using React and modern build tooling, accelerating Web Performance metrics.",
        "Designed and implemented complex transactional workflows, maximizing user engagement and conversion rates through iterative usability testing.",
        "Maintained full autonomy over product features, managing full-stack integrations (Node.js/PHP) and cross-browser resilience."
      ]
    },
    {
      id: "exp-2",
      role: "Front End Developer & Webmaster",
      company: {
        name: "My Costa Rica",
        location: "Costa Rica"
      },
      period: "2016 - 2017 / 2018 - 2019",
      highlights: [
        "Engineered scalable, semantic UI components optimizing core layout shifts and improving cross-platform responsiveness.",
        "Collaborated natively with design and marketing teams to establish clean UI standards, refactoring monolithic legacy code to dry practices."
      ]
    },
    {
      id: "exp-3",
      role: "UI & UX Designer & Engineer",
      company: {
        name: "SmartSoft S.A.",
        location: "San José, Costa Rica"
      },
      period: "2015 - 2016",
      highlights: [
        "Designed and prototyped critical user interfaces for enterprise banking applications focused on high-security fraud prevention systems.",
        "Conducted end-to-end user research and wireframing, aligning complex business requirements into high-fidelity components that simplified cognitive load for fraud analysts."
      ]
    },
    {
      id: "exp-4",
      role: "Front End Developer / Webmaster",
      company: {
        name: "My Costa Rica",
        location: "Costa Rica"
      },
      period: "2012 - 2015",
      highlights: [
        "Responsible for full site maintenance, custom layout developments, and database optimization workflows (MySQL/PHP)."
      ]
    }
  ];
};

export const getSkillsFromBackend = (): SkillCategoryResponse[] => {
  return [
    { id: "sk-1", category: "Core / Front End", items: ["JavaScript (ES6+)", "TypeScript", "React", "HTML5", "CSS3 / SCSS", "Responsive Design", "Mobile-First Architecture"] },
    { id: "sk-2", category: "Back End & Data", items: ["Node.js", "Express", "PHP", "MySQL", "REST APIs"] },
    { id: "sk-3", category: "Design & UX/UI", items: ["Figma", "Adobe Creative Suite", "Wireframing", "High-Fidelity Prototyping", "Design Systems"] },
    { id: "sk-4", category: "Methodologies & Tools", items: ["Git / GitHub", "Scrum", "Agile", "Web Performance Optimization (WPO)"] }
  ];
};

export const getLanguagesFromBackend = (lang: 'en' | 'es'): LanguageItemResponse[] => {
  if (lang === 'es') {
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