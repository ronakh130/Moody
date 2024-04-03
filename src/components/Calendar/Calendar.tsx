import { StyleSheet, View } from 'react-native';
import { CalendarTitle } from './CalendarTitle';
import { DayNames } from './DayNames';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setDate } from '../../redux/calendarSlice';
import { Days } from './Days';

export const Calendar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDate(new Date()));
  }, []);

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
