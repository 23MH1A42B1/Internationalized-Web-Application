'use client';

export const dynamic = 'force-dynamic';

import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="p-6 space-y-4">
      <LanguageSwitcher />
      <h1 className="text-2xl font-bold">{t('title')}</h1>
      <p>{t('welcome')}</p>
    </main>
  );
}
