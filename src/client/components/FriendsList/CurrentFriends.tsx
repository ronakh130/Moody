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
      <FriendRow name='Ronak' status='accepted' />
      <FriendRow name='Sam' status='accepted' />
      <FriendRow name='Sojo' status='accepted' />
      {friendships
        .filter((fs) => fs.status === 'accepted')
        .map((fs) => {
          return <FriendRow name={fs.name ?? fs.email} status={fs.status} />;
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
