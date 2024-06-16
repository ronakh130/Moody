import { StyleSheet, View } from 'react-native';
import { FriendRow } from './FriendRow';
import { baseCenterFlexStyle } from '../../utils/styles';

export const CurrentFriends = () => {
  return (
    <View style={styles.container}>
      <FriendRow name='Rudy' status='accepted' />
      <FriendRow name='Rudy' status='accepted' />
      <FriendRow name='Rudy' status='accepted' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...baseCenterFlexStyle,
    gap: 15,
  },
});
