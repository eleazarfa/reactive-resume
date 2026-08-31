// src/App.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ActionsBar } from './components/ActionsBar';
import { Header } from './components/Header';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Languages } from './components/Languages';
import './index.css';

export const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="resume-container">
      {/* Barra de control de idioma e impresión */}
      <ActionsBar />

      <main className="resume-paper">
        <Header />

        <section className="resume-section">
          <h2>{t('sections.summary')}</h2>
          <p>{t('summaryText')}</p>
        </section>

        <Experience />

        <Skills />

        <Languages />

        <section className="resume-section">
          <h2>{t('sections.learning')}</h2>
          <ul className="certifications-list">
            <li>
              {t('learningText')}{' '}
              <a
                href="https://www.codecademy.com/profiles/eleazarfa"
                target="_blank"
                rel="noreferrer"
              >
                {t('actions.viewProfile')}
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};