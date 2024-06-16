import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'rn-icons/md';
import { RootState } from '../../redux/store';
import { setMonth } from '../../redux/calendarSlice';
import { MONTHS } from '../../types/CalendarTypes';

export const CalendarTitle = () => {
  const dispatch = useDispatch();
  const { month, year } = useSelector(
    (state: RootState) => state.calendarReducer
  );

  function handleOnClickLeft() {
    const date = new Date(year, month - 1);
    dispatch(setMonth(date));
  }

  function handleOnClickRight() {
    const date = new Date(year, month + 1);
    dispatch(setMonth(date));
  }

  return (
    <View style={styles.titleContainer}>
      <Pressable onPress={handleOnClickLeft}>
        <MdKeyboardArrowLeft />
      </Pressable>
      <Text style={styles.titleText}>{MONTHS[month] + ' ' + year}</Text>
      <Pressable onPress={handleOnClickRight}>
        <MdKeyboardArrowRight />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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
});
