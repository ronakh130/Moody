import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { AddFriendsInput } from '../components/FriendsList/AddFriendsInput';
import { baseCenterFlexStyle, colors, sizes } from '../utils/styles';

export const FriendsPage = () => {
  return (
    <View style={styles.container}>
      <AddFriendsInput />
      <StatusBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...baseCenterFlexStyle,
    padding: sizes.padding,
    backgroundColor: colors.appAccent,
    width: sizes.width,
    borderRadius: sizes.borderRadius,
    margin: 20,
  },
});
