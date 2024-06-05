import { StyleSheet, View } from 'react-native';
import { CalendarTitle } from './CalendarTitle';
import { DayNames } from './DayNames';
import { Days } from './Days';
import { colors } from '../../utils/styles';

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
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    margin: 10,
    padding: 20,
    backgroundColor: colors.calendar,
    borderRadius: 10,
  },
});
