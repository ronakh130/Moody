import { StatusBar } from 'expo-status-bar';
import { Calendar } from '../components/Calendar/Calendar';
import { MoodReportModal } from '../components/MoodReport/MoodReportModal';
import { LogoutButton } from '../components/LogoutButton';

export const CalendarPage = () => {
  return (
    <>
      <Calendar />
      <MoodReportModal />
      <LogoutButton />
      <StatusBar />
    </>
  );
}
