import { AppState, SafeAreaView, StyleSheet } from 'react-native';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { colors } from './utils/styles';
import { supabase } from './lib/supabase';
import { registerRootComponent } from 'expo';
import { Tabs } from './pages/Tabs';

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
          <Tabs />
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
