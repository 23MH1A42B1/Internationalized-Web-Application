'use client';

export const dynamic = 'force-dynamic';

import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import I18nProvider from '@/components/I18nProvider';

function Content() {
  const { t } = useTranslation();

  return (
    <main className="p-6 space-y-4">
      <LanguageSwitcher />
      <h1 className="text-2xl font-bold">{t('title')}</h1>
      <p>{t('welcome')}</p>
    </main>
  );
}

export default function Home() {
  return (
    <I18nProvider>
      <Content />
    </I18nProvider>
  );
}
