import { StyleSheet, Pressable } from 'react-native';
import { IconType } from 'rn-icons';
import { StyledText } from '../StyledText';

type MoodReportNodeProps = {
  Icon: IconType;
  label?: string;
};

export const MoodReportNode = ({ Icon, label }: MoodReportNodeProps) => {
  return (
    <Pressable style={styles.container}>
      <Icon size={40} fill={'#4b2111'} />
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
