import React from 'react';
import { useTranslation } from 'react-i18next';

export const ActionsBar: React.FC = () => {
  const { i18n } = useTranslation();

  const isSpanish = i18n.resolvedLanguage?.startsWith('es');

  const toggleLanguage = () => {
    const nextLang = isSpanish ? 'en' : 'es';
    i18n.changeLanguage(nextLang);
  };

  return (
    <div className="no-print actions-bar">
      <button className="action-btn" onClick={toggleLanguage}>
        {isSpanish ? 'EN' : 'ES'}
      </button>
      <button className="action-btn" onClick={() => window.print()}>
        PDF
      </button>
    </div>
  );
};