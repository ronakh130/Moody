import { StyleSheet, View } from 'react-native';
import { FriendRow } from './FriendRow';
import { baseCenterFlexStyle } from '../../utils/styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const CurrentFriends = () => {
  const { friendships } = useSelector(
    (state: RootState) => state.friendReducer
  );

  return (
    <View style={styles.container}>
      {friendships
        .filter((fs) => fs.status === 'accepted')
        .map((fs) => {
          return (
            <FriendRow
              key={fs.friendId}
              name={fs.name ?? fs.email}
              status={fs.status}
              friendId={fs.friendId}
            />
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...baseCenterFlexStyle,
    gap: 15,
  },
});
