import { StyleSheet, View, Text } from 'react-native';

export const DayNames = () => {
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <View style={styles.dayNamesContainer}>
      {dayNames.map((el, ind) => (
        <Text style={styles.dayNames} key={ind}>
          {el}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  dayNamesContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  dayNames: {
    textAlign: 'center',
    width: '14.285%',
    marginBottom: 10,
  },
});
