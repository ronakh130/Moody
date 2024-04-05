import { StyleSheet, Text } from 'react-native';
import { StyledText } from './StyledText';

export const StyledHeaderText = ({ children }: any) => {
  return (
    <StyledText>
      <Text style={styles.headerText}>{children}</Text>
    </StyledText>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
  },
});
