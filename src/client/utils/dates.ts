import { MoodReport } from '../types/MoodReportTypes';

export function populateDays(year: number, month: number): MoodReport[] {
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const lastDateOfMonth = new Date(year, month + 1, 0).getDate();

  const days = [];

  for (let i = firstDayOfMonth; i > 0; i--) {
    days.push('0000-00-00');
  }

  for (let i = 1; i <= lastDateOfMonth; i++) {
    days.push(formatDateParts(year, month, i));
  }

  return days.map((el) => {
    return { date: el };
  });
}

export function formatDate(date: Date) {
  const offset = date.getTimezoneOffset();
  const newDate = new Date(date.getTime() - offset * 60000);
  return newDate.toISOString().split('T')[0];
}

export function formatDateParts(year: number, month: number, day: number) {
  return year + '-' + month + '-' + day;
}

export function getDateFromDateString(date: string) {
  return parseInt(date.split('-')[2]);
}

export function getMonthFromDateString(date: string) {
  return parseInt(date.split('-')[1]);
}

export function getYearFromDateString(date: string) {
  return parseInt(date.split('-')[0]);
}
