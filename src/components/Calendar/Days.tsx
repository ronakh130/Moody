import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const Days = () => {
  const { moods, year, month } = useSelector((state: RootState) => state.calendarReducer);
  const date = new Date();
  const days = moods.map((el) => el.date);
  const currDate = date.getDate();
  const currMonth = date.getMonth();
  const lastDateOfMonth = days.lastIndexOf(new Date(year, month + 1, 0).getDate());

  function renderDays(days: number[]) {
    const output = [];
    let i = 0;
    let startOfCurrMonth = days.indexOf(1);

    while (i < startOfCurrMonth) {
      output.push(<View style={styles.day} key={i++} />);
    }

    while (i <= lastDateOfMonth) {
      const style = currMonth === month && days[i] === currDate ? styles.currentDay : styles.activeDay;
      output.push(
        <Pressable style={styles.day} key={i}>
          <Text style={style}>{days[i++]}</Text>
        </Pressable>
      );
    }

    return output;
  }

  return <View style={styles.daysContainer}>{renderDays(days)}</View>;
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
    color: 'black',
  },

  inactiveDay: {
    color: 'grey',
  },
  currentDay: {
    color: 'red',
  },
});
