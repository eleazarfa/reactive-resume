import React from 'react';
import { useTranslation } from 'react-i18next';

export const ActionsBar: React.FC = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(nextLang);
  };

  return (
    <div className="no-print actions-bar">
      <span className="actions-title">{t('actions.title')}</span>
      <div className="button-group">
        <button className="lang-btn" onClick={toggleLanguage}>
          {t('actions.switch_lang')}
        </button>
        <button className="download-btn" onClick={() => window.print()}>
          {t('actions.print')}
        </button>
      </div>
    </div>
  );
};