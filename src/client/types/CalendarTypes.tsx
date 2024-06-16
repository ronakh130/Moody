import { MoodReport } from "./MoodReportTypes";

export interface Calendar {
  month: number;
  year: number;
  moods: MoodReport[];
  storedMonths: Record<string, MoodReport[]>;
  moodModalVisible: boolean;
  moodModalData: MoodReport;
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
