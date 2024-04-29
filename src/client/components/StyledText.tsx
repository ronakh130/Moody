import { StyleSheet, Text } from 'react-native';

export const StyledText = (props: any) => {
  return (
    <Text style={styles.text} {...props}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Gill Sans',
    userSelect: 'none',
  },
});
