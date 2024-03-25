import { StyleSheet, View, Text } from 'react-native';

export const Row = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    margin: 10,
    padding: 10,
    backgroundColor: 'orange',
    borderRadius: 10,
  },

  text: {
    // ...
  }
});
