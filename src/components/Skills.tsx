// src/components/Skills.tsx
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getSkillsFromBackend } from '../data/resume.MockService';
import type { SkillCategoryResponse } from '../types/resume';

export const Skills: React.FC = () => {
  const { t } = useTranslation();
  const [categories, setCategories] = useState<SkillCategoryResponse[]>([]);

  useEffect(() => {
    const data = getSkillsFromBackend();
    setCategories(data);
  }, []);

  return (
    <section className="resume-section">
      <h2>{t('sections.skills')}</h2>
      <div className="skills-grid">
        {categories.map((cat) => (
          <div key={cat.id} className="skill-card">
            <strong>{cat.category}:</strong>
            <p>{cat.items.join(', ')}</p>
          </div>
        ))}
      </div>
    </section>
  );
};