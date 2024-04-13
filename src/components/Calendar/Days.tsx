import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { colors } from '../../colors';
import { MONTHS } from '../../interfaces/CalendarTypes';
import { openMoodModal } from '../../redux/calendarSlice';

export const Days = () => {
  const dispatch = useDispatch();
  const { moods, year, month } = useSelector((state: RootState) => state.calendarReducer);
  const date = new Date();
  const days = moods.map((el) => el.date);
  const currDate = date.getDate();
  const currMonth = date.getMonth();
  const startOfCurrMonth = days.indexOf(1);
  const lastDateOfMonth = days.lastIndexOf(new Date(year, month + 1, 0).getDate());

  function renderDays() {
    const output = [];
    let i = 0;

    while (i < startOfCurrMonth) {
      output.push(<View style={styles.day} key={i++} />);
    }

    while (i <= lastDateOfMonth) {
      const day = i;
      const style = currMonth === month && i === currDate ? styles.currentDay : styles.activeDay;
      output.push(
        <Pressable style={styles.day} key={i} onPress={() => handleOnClick(day)}>
          <Text style={style}>{i++}</Text>
        </Pressable>
      );
    }

    return output;
  }

  function handleOnClick(date: number) {
    const monthKey = MONTHS[month] + year;
    
    dispatch(openMoodModal({
      date,
      monthKey,
      inactiveDays: startOfCurrMonth,
    }));
  }

  return <View style={styles.daysContainer}>{renderDays()}</View>;
};

const styles = StyleSheet.create({
  daysContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  day: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '14.285%',
    marginVertical: 10,
  },
  activeDay: {
    color: colors.calActiveDays,
  },

  inactiveDay: {
    color: colors.calInactiveDays,
  },
  currentDay: {
    color: colors.calCurrentDay,
  },
});
