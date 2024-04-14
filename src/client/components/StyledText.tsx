import { StyleSheet, Text } from 'react-native';

export const StyledText = ({ children }: any) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Gill Sans',
    userSelect: 'none',
  },
});
