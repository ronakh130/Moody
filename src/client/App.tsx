import { StatusBar } from 'expo-status-bar';
import { AppState, SafeAreaView, StyleSheet } from 'react-native';
import { StrictMode, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { CalendarPage } from './pages/CalendarPage';
import { colors } from './utils/styles';
import { LoginPage } from './pages/LoginPage';
import { supabase } from './lib/supabase';
import { registerRootComponent } from 'expo';
import { Session } from '@supabase/supabase-js';

AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <StrictMode>
      <Provider store={store}>
        <SafeAreaView style={styles.page}>
          {session && session.user ? <CalendarPage /> : <LoginPage />}
          <StatusBar />
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
