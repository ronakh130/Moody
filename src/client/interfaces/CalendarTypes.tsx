import { MoodReport } from "./MoodReportTypes";

export interface Calendar extends MonthRecord {
  storedMonths: Record<string, MonthRecord>;
  moodModalVisible: boolean;
  moodModalData: MoodReport;
}

export interface MonthRecord {
  month: number;
  year: number;
  moods: MoodReport[];
}

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
