import { StatusBar } from 'expo-status-bar';
import { AppState, SafeAreaView, StyleSheet, View } from 'react-native';
import { Calendar } from './components/Calendar/Calendar';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { MoodReportModal } from './components/MoodReport/MoodReportModal';
import { CalendarPage } from './pages/CalendarPage';
import { colors } from './utils/styles';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';
import { supabase } from './lib/supabase';
import { registerRootComponent } from 'expo';

AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

function App() {
  return (
    <StrictMode>
      <Provider store={store}>
        <SafeAreaView style={styles.page}>
          {/* <CalendarPage /> */}
          <LoginPage />
          {/* <SignUpPage /> */}
        </SafeAreaView>
      </Provider>
    </StrictMode>
  );
}

export default registerRootComponent(App);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.appBackground,
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
  },
});
