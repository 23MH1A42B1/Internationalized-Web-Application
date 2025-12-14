'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import I18nProvider from '@/components/I18nProvider';

export default function Home() {
  return (
    <I18nProvider>
      <Navbar />
      <Hero />
    </I18nProvider>
  );
}
