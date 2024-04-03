export interface Calendar extends MonthRecord {
  storedMonths: Record<string, MonthRecord>;
}

export interface MonthRecord {
  month: number;
  year: number;
  days: number[];
  // days: MoodReport[];
};

export enum DayOTW {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
