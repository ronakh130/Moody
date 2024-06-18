import { StyleSheet, View } from 'react-native';
import { baseCenterFlexStyle, colors, sizes } from '../../utils/styles';
import { FaCheck } from 'rn-icons/fa6';
import { RxCross2 } from 'rn-icons/rx';
import { IconButton } from '../IconButton';
import { StyledText } from '../StyledText';
import { userController } from '../../controllers/userController';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { removeRequest, updateNewFriends } from '../../redux/friendSlice';

type FriendRequestProps = {
  friendId: string;
};

export const RequestConfirmations = ({ friendId }: FriendRequestProps) => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state: RootState) => state.authReducer);

  function handleAcceptRequest() {
    userController.acceptFriendRequest(userId, friendId).then(() => {
      dispatch(removeRequest(friendId));
      dispatch(updateNewFriends());
    });
  }

  function handleDeclineRequest() {
    userController.declineFriendRequest(userId, friendId).then(() => {
      dispatch(removeRequest(friendId));
      dispatch(updateNewFriends());
    });
  }

  return (
    <View style={styles.container}>
      <StyledText>Add Friend?</StyledText>
      <IconButton
        style={styles.confirmButton}
        opacity={0.4}
        onPress={handleAcceptRequest}
        Icon={(pressed) => (
          <FaCheck
            size={25}
            fill={pressed ? colors.appAccentLight : colors.appBackground}
          />
        )}
      />
      <IconButton
        style={styles.rejectButton}
        opacity={0.4}
        onPress={handleDeclineRequest}
        Icon={(pressed) => (
          <RxCross2
            size={27}
            color={pressed ? colors.appAccentDark : colors.appBackground}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...baseCenterFlexStyle,
    flexDirection: 'row',
    gap: 20,
  },
  confirmButton: {
    backgroundColor: '#2ba32b',
    borderRadius: sizes.borderRadius,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  rejectButton: {
    backgroundColor: 'red',
    borderRadius: sizes.borderRadius,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
});
