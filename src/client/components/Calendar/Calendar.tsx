import { StyleSheet, View } from 'react-native';
import { CalendarTitle } from './CalendarTitle';
import { DayNames } from './DayNames';
import { Days } from './Days';

export const Calendar = () => {
  return (
    <View style={styles.container}>
      <CalendarTitle />
      <DayNames />
      <Days />
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
});
