import { StyleSheet, Pressable } from 'react-native';
import { IconType } from 'rn-icons';
import { StyledText } from '../StyledText';
import { colors } from '../../colors';

export interface MoodNodeProps {
  Icon: IconType;
  label?: string;
}

export const MoodNode = ({ Icon, label }: MoodNodeProps) => {
  return (
    <Pressable style={styles.container}>
      <Icon size={40} fill={colors.text} color={colors.text}/>
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
