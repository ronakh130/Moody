import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { colors } from '../../utils/styles';
import { openMoodModal } from '../../redux/calendarSlice';
import { getDateFromDateString } from '../../utils/util';

export const Days = () => {
  const dispatch = useDispatch();
  const { moods, year, month } = useSelector((state: RootState) => state.calendarReducer);
  const date = new Date();
  const days = moods.map((el) => getDateFromDateString(el.date));
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
      const day = days[i];
      const style =
        currMonth === month && day === currDate ? styles.currentDay : styles.activeDay;
      output.push(
        <Pressable style={styles.day} key={i++} onPress={() => handleOnClick(day)}>
          <Text style={style}>{day}</Text>
        </Pressable>
      );
    }

    return output;
  }

  function handleOnClick(date: number) {
    dispatch(
      openMoodModal({
        date,
        month, 
        year,
        inactiveDays: startOfCurrMonth,
      })
    );
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
