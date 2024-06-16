import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { MoodRating } from '../types/MoodReportTypes';
import { dayBorders } from './styles';

export function getDayStyle(
  mood: MoodRating | undefined | null
): StyleProp<ViewStyle> {
  const baseDayStyle = StyleSheet.create({
    day: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '11%',
      height: 35,
      margin: 5,
      borderWidth: 1,
      borderRadius: 20,
      borderStyle: 'solid',
      borderColor: 'transparent',
    },
  });

  const style = mood
    ? StyleSheet.create({
        day: {
          ...baseDayStyle.day,
          borderColor: dayBorders[mood],
        },
      })
    : baseDayStyle;

  return style.day;
}
