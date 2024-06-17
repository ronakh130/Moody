import { StyleSheet, View } from 'react-native';
import { FriendRow } from './FriendRow';
import { baseCenterFlexStyle } from '../../utils/styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const NewFriends = () => {
  const { friendships } = useSelector(
    (state: RootState) => state.friendReducer
  );

  return (
    <View style={styles.container}>
      {friendships.filter((fs) =>  fs.status === 'pending').map(fs => {
        return <FriendRow name={fs.name ?? fs.email} status={fs.status} />
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...baseCenterFlexStyle,
    gap: 15,
    marginVertical: 15,
  },
});
