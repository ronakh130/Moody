import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { colors } from '../../utils/styles';
import { openMoodModal } from '../../redux/calendarSlice';
import { getDateFromDateString } from '../../utils/util';
import { getDayStyle } from '../../utils/dayBorders';
import { useMemo } from 'react';

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
      const { mood_rating } = moods[i];
      output.push(<View style={getDayStyle(mood_rating)} key={i++} />);
    }

    while (i <= lastDateOfMonth) {
      const { mood_rating } = moods[i];
      const day = days[i];
      const style =
        currMonth === month && day === currDate ? styles.currentDay : styles.activeDay;
      output.push(
        <Pressable
          style={getDayStyle(mood_rating)}
          key={i++}
          onPress={() => handleOnClick(day)}
        >
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

  const calendarDays = useMemo(() => {
    return <View style={styles.daysContainer}>{renderDays()}</View>;
  }, [dispatch, moods])

  return calendarDays;
};

const styles = StyleSheet.create({
  daysContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
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
