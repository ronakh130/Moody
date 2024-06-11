import { StatusBar } from 'expo-status-bar';
import { Calendar } from '../components/Calendar/Calendar';
import { MoodReportModal } from '../components/MoodReport/MoodReportModal';
import { LogoutButton } from '../components/LogoutButton';
import { StyleSheet, View } from 'react-native';

export const CalendarPage = () => {
  return (
    <View style={styles.container}>
      <Calendar />
      <MoodReportModal />
      <LogoutButton />
      <StatusBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
