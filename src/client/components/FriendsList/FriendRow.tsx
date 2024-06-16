import { StyleSheet, View } from 'react-native';
import { colors, sizes } from '../../utils/styles';
import { StyledText } from '../StyledText';
import { RequestConfirmations } from './RequestConfirmations';
import { FriendButtons } from './FriendButtons';

type FriendRowProps = {
  name: string,
  status: string,
}

export const FriendRow = ({name, status}: FriendRowProps) => {
  return (
    <View style={styles.container}>
      <StyledText style={styles.name}>{name}</StyledText>
      {status === 'pending' ? <RequestConfirmations /> : <FriendButtons />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.appAccent,
    padding: sizes.padding,
    width: sizes.width,
    borderRadius: sizes.borderRadius,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  name: {
    alignSelf: 'center',
    fontSize: 20,
  }
});
