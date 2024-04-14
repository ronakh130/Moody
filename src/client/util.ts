import { MoodReport } from "./interfaces/MoodReportTypes";

export function populateDays(year: number, month: number): MoodReport[] {
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const lastDateOfMonth = new Date(year, month + 1, 0).getDate();

  const days = [];

  for (let i = firstDayOfMonth; i > 0; i--) {
    days.push(0);
  }

  for (let i = 1; i <= lastDateOfMonth; i++) {
    days.push(i);
  }

  return days.map((el) => {
    return { date: el };
  });
}
