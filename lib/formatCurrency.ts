export function formatCurrency(value: number, locale: string) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: locale === 'ja' ? 'JPY' : 'USD'
  }).format(value);
}
