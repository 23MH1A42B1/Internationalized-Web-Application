export const dynamic = 'force-dynamic';

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const dir = params.locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <div lang={params.locale} dir={dir}>
      {children}
    </div>
  );
}
