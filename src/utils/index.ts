export function formatDate(date: string): string {
  const d = new Date(date);
  return d.toLocaleDateString('es-PY', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getYearsOld(date: string): number {
  const d = new Date(date);
  const now = new Date();
  return now.getFullYear() - d.getFullYear();
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('es-PY', {
    style: 'currency',
    currency: 'PYG',
  }).format(value);
}