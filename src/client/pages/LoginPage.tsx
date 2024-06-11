import { StatusBar } from 'expo-status-bar';
import { LoginForm } from '../components/LoginForm';
import { StyleSheet, View } from 'react-native';

export const LoginPage = () => {
  return (
    <View style={styles.container}>
      <LoginForm />
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
