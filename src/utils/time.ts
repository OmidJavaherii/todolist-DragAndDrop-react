export function getElapsedTime(start: string) {
  const diff = Math.floor((Date.now() - new Date(start).getTime()) / 1000);
  const mins = Math.floor(diff / 60);
  const secs = diff % 60;
  return `${mins}m ${secs}s`;
}
export function getDurationBetween(start?: string, end?: string) {
  if (!start || !end) return 'N/A';
  const diff = Math.floor((new Date(end).getTime() - new Date(start).getTime()) / 1000);
  const mins = Math.floor(diff / 60);
  const secs = diff % 60;
  return `${mins}m ${secs}s`;
}
