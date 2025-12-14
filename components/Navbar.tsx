'use client';

import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { t } = useTranslation('common');


  return (
    <header className="flex items-center justify-between px-10 py-5">
      <div className="flex items-center gap-2 text-white font-bold text-xl">
        <span className="w-3 h-3 bg-purple-500 rounded-full" />
        MultiLang
      </div>

      <nav className="hidden md:flex gap-8 text-white/80">
        <a>{t('nav.home')}</a>
        <a>{t('nav.about')}</a>
        <a>{t('nav.contact')}</a>
      </nav>

      <LanguageSwitcher />
    </header>
  );
}
