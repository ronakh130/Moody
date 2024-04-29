import { StatusBar } from 'expo-status-bar';
import { Calendar } from '../components/Calendar/Calendar';
import { MoodReportModal } from '../components/MoodReport/MoodReportModal';

export const CalendarPage = () => {
  return (
    <>
      <Calendar />
      <MoodReportModal />
      <StatusBar />
    </>
  );
}
