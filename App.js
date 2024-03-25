import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Row } from './src/components/Row';
import { Calendar } from './src/components/Calendar';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

export function App() {
  return (
    <StrictMode>
      <Provider store={store}>
        <View style={styles.app}>
          <Row />
          <Row />
          <Calendar />
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
  },
});
