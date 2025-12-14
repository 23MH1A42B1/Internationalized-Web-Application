'use client';

import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center text-center text-white px-6 py-24">
      {/* Badge */}
      <span className="mb-6 rounded-full bg-white/10 px-4 py-2 text-sm">
        {t('badge')}
      </span>

      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl">
        {t('hero.title')}
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-lg text-white/80 max-w-2xl">
        {t('hero.subtitle')}
      </p>

      {/* Buttons */}
      <div className="mt-10 flex gap-4">
        <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-semibold">
          {t('hero.start')} →
        </button>

        <button className="bg-white/10 px-6 py-3 rounded-xl font-semibold">
          ▶ {t('hero.demo')}
        </button>
      </div>

      {/* Stats */}
      <div className="mt-20 grid grid-cols-3 gap-12">
        <Stat value="50K+" label={t('stats.clients')} />
        <Stat value="120+" label={t('stats.projects')} />
        <Stat value="99%" label={t('stats.satisfaction')} />
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-bold">{value}</p>
      <p className="text-white/70">{label}</p>
    </div>
  );
}
