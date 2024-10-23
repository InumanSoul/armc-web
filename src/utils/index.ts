export function formatDate(date: string): string {
  const d = new Date(date);
  return d.toLocaleDateString('es-PY', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}