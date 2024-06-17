import { StyleSheet, View } from 'react-native';
import { FriendRow } from './FriendRow';
import { baseCenterFlexStyle } from '../../utils/styles';

export const CurrentFriends = () => {
  return (
    <View style={styles.container}>
      <FriendRow name='Ronak' status='accepted' />
      <FriendRow name='Sam' status='accepted' />
      <FriendRow name='Sojo' status='accepted' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...baseCenterFlexStyle,
    gap: 15,
  },
});
