import { StyleSheet, View, Text, Pressable } from 'react-native';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'rn-icons/md';

export const Calendar = () => {
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <MdKeyboardArrowLeft />
        <Text style={styles.titleText}>September 2024</Text>
        <MdKeyboardArrowRight />
      </View>
      <View style={styles.dayNamesContainer}>
        {dayNames.map((el, ind) => (
          <Text style={styles.dayNames} key={ind}>{el}</Text>
        ))}
      </View>
      <View style={styles.daysContainer}>
        {days.map((el, ind) => (
          <Pressable style={styles.days} key={ind}>
            <Text>{el}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    margin: 10,
    padding: 20,
    backgroundColor: 'orange',
    borderRadius: 10,
  },
  titleContainer: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: 20,
  },
  titleText: {
    fontSize: 20,
  },
  dayNamesContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  daysContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  dayNames: {
    textAlign: 'center',
    width: '14.285%',
    marginBottom: 10,
  },
  days: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '14.285%',
    marginVertical: 10,
  },
});
