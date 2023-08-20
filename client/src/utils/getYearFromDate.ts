export function getYearFromDate(dateString: string): number | null {
  const parts = dateString.split('-');
  if (parts.length === 3) {
    const year = parseInt(parts[0], 10);
    if (!isNaN(year)) {
      return year;
    }
  }
  return null;
}