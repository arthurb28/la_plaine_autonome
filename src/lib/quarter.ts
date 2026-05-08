export type QuarterNumber = 1 | 2 | 3 | 4;

export function quarterStartEnd(year: number, quarter: QuarterNumber): { start: Date; end: Date } {
  const startMonth = (quarter - 1) * 3;
  const start = new Date(Date.UTC(year, startMonth, 1));
  const end = new Date(Date.UTC(year, startMonth + 3, 0));
  return { start, end };
}

export function nextQuarter(year: number, quarter: QuarterNumber): { year: number; quarter: QuarterNumber } {
  if (quarter === 4) {
    return { year: year + 1, quarter: 1 };
  }
  return { year, quarter: (quarter + 1) as QuarterNumber };
}
