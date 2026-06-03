import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getExperienceFromBackend } from '../data/resume.MockService';
import type { JobResponse } from '../types/resume';

export const Experience: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [jobs, setJobs] = useState<JobResponse[]>([]);

  useEffect(() => {
    const currentLang = i18n.language as 'en' | 'es';
    const data = getExperienceFromBackend(currentLang);
    setJobs(data);
  }, [i18n.language]);

  return (
    <section className="cv-section">
      <h2>{t('sections.experience')}</h2>
      <div className="timeline">
        {jobs.map((exp) => (
          <div key={exp.id} className="cv-item">
            <div className="item-header">
              <h3>{exp.role}</h3>
              <span className="date">{exp.period}</span>
            </div>
            
            <p className="company">
              <strong>{exp.company.name}</strong> 
              <span className="location"> — {exp.company.location}</span>
            </p>
            
            <ul className="highlights-list">
              {exp.highlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};