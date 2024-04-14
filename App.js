import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Calendar } from './src/client/components/Calendar/Calendar';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/client/redux/store';
import { MoodReportModal } from './src/client/components/MoodReport/MoodReportModal';

export function App() {
  return (
    <StrictMode>
      <Provider store={store}>
        <View style={styles.app}>
          <Calendar />
          <MoodReportModal />
          <StatusBar style='auto' />
        </View>
      </Provider>
    </StrictMode>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#fff6d8',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
  },
});
