import { StyleSheet, Text } from 'react-native';

export const StyledText = (props: any) => {
  const style = {
    ...styles.text,
    ...props.style
  }
  
  return (
    <Text {...props} style={style}>
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
