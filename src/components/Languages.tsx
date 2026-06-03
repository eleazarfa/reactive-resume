// src/components/Languages.tsx
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getLanguagesFromBackend } from '../data/resume.MockService';
import type { LanguageItemResponse } from '../types/resume';

export const Languages: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [items, setItems] = useState<LanguageItemResponse[]>([]);

  useEffect(() => {
    const currentLang = i18n.language as 'en' | 'es';
    const data = getLanguagesFromBackend(currentLang);
    setItems(data);
  }, [i18n.language]);

  return (
    <section className="resume-section half-width">
      <h2>{t('sections.languages')}</h2>
      <ul className="languages-list">
        {items.map((lang) => (
          <li key={lang.id}>
            <strong>{lang.name}:</strong> {lang.level}
            {lang.credentialUrl && (
              <span className="credential-link">
                {" "}(<a href={lang.credentialUrl} target="_blank" rel="noreferrer">Verify Credential</a>)
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};