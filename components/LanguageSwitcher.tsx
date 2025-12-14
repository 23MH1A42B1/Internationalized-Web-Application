'use client';

import { usePathname, useRouter } from 'next/navigation';

const languages = ['en', 'es', 'ar', 'ja'];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const changeLang = (lang: string) => {
    const segments = pathname.split('/');
    segments[1] = lang;
    router.push(segments.join('/'));
  };

  return (
    <select onChange={e => changeLang(e.target.value)} className="border p-2">
      {languages.map(l => (
        <option key={l} value={l}>
          {l.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
