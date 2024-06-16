import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';
import { AddFriendsInput } from '../components/FriendsList/AddFriendsInput';
import { baseCenterFlexStyle, sizes } from '../utils/styles';
import { NewFriends } from '../components/FriendsList/NewFriends';
import { CurrentFriends } from '../components/FriendsList/CurrentFriends';

export const FriendsPage = () => {
  return (
    <View style={styles.container}>
      <AddFriendsInput />
      <FlatList
        data={[<NewFriends />, <CurrentFriends />]}
        renderItem={({ item }) => item}
      />
      <StatusBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...baseCenterFlexStyle,
    paddingVertical: sizes.padding,
    width: sizes.width,
    gap: 20,
  },
});
