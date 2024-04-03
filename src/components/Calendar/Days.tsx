import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const Days = () => {
  const { days, year, month, currDate } = useSelector((state: RootState) => state.calendarReducer);
  const lastDateOfMonth = days.lastIndexOf(new Date(year, month + 1, 0).getDate());

  function styleAciveDays(days: number[]) {
    const output = [];
    let i = 0;
    let startOfCurrMonth = days.indexOf(1);

    while (i < startOfCurrMonth) {
      output.push(<View style={styles.day} key={i++} />);
    }

    while (i <= lastDateOfMonth) {
      if (days[i] === currDate) {
        output.push(
          <Pressable style={styles.day} key={i}>
            <Text style={styles.currentDay}>{days[i++]}</Text>
          </Pressable>
        );
      } else
        output.push(
          <Pressable style={styles.day} key={i}>
            <Text style={styles.activeDay}>{days[i++]}</Text>
          </Pressable>
        );
    }

    return output;
  }

  return <View style={styles.daysContainer}>{styleAciveDays(days)}</View>;
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
