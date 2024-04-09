import { StyleSheet, Pressable } from 'react-native';
import { IconType } from 'rn-icons';
import { StyledText } from '../StyledText';
import { colors } from '../../colors';

export interface MoodNodeProps {
  Icon: IconType;
  label: string;
  selected?: boolean;
}

export const MoodNode = ({ Icon, label, selected }: MoodNodeProps) => {
  const color = selected ? colors.calCurrentDay : colors.text;

  return (
    <Pressable style={styles.container}>
      <Icon size={40} fill={color} color={color} />
      {label && <StyledText>{label}</StyledText>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
