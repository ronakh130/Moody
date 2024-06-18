import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';
import { AddFriendsInput } from '../components/FriendsList/AddFriendsInput';
import { baseCenterFlexStyle, sizes } from '../utils/styles';
import { NewFriends } from '../components/FriendsList/NewFriends';
import { CurrentFriends } from '../components/FriendsList/CurrentFriends';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { userController } from '../controllers/userController';
import { setFriends, updateNewFriends } from '../redux/friendSlice';
import { buildFriendships, removeUserId } from '../utils/builders';

export const FriendsPage = () => {
  const { userId } = useSelector((state: RootState) => state.authReducer);
  const { friendships, newFriends } = useSelector((state: RootState) => state.friendReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    userController.getFriendships(userId).then(async (response) => {
      if (!response) return;
      const { userIds, idsAndStatus } = removeUserId(userId, response);
      const metadata = await userController.getAllUserMetadata(userIds);
      const friendships = buildFriendships(idsAndStatus, metadata);
      dispatch(setFriends(friendships));
      dispatch(updateNewFriends());
    });
  }, [dispatch, userId, friendships.length, newFriends.length]);

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
