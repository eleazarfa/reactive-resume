// src/components/Header.tsx
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getProfileHeaderFromBackend } from '../data/resume.MockService';
import type { HeaderProfileResponse } from '../types/resume';

export const Header: React.FC = () => {
  const { i18n } = useTranslation();
  const [profile, setProfile] = useState<HeaderProfileResponse | null>(null);

  useEffect(() => {
    const currentLang = i18n.language as 'en' | 'es';
    const data = getProfileHeaderFromBackend(currentLang);
    setProfile(data);
  }, [i18n.language]);

  if (!profile) return null;

  return (
    <header className="resume-header">
      <h1>{profile.name}</h1>
      <p className="subtitle">{profile.role}</p>
      
      <div className="contact-info">
        <a href={`mailto:${profile.email}`}>{profile.email}</a> | 
        <span> {profile.phone}</span> | 
        <span> {profile.location}</span>
      </div>
      
      <div className="social-links">
        <a href={profile.githubUrl} target="_blank" rel="noreferrer">GitHub</a> | 
        <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </header>
  );
};