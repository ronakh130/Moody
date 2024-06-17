import { Alert, Pressable, StyleSheet, TextInput, View } from 'react-native';
import { baseCenterFlexStyle, colors, sizes } from '../../utils/styles';
import { StyledText } from '../StyledText';
import { useState } from 'react';
import { userController } from '../../controllers/userController';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { validEmail } from '../../utils/validation';

export const AddFriendsInput = () => {
  const [email, setEmail] = useState('');
  const { userId } = useSelector((state: RootState) => state.authReducer);

  async function handleClick() {
    setEmail('');
    if (!validEmail(email)) return Alert.alert('Please use a valid email.');
    const status = await userController.addFriend(email, userId);
    if (status === 201) return Alert.alert('Friend request sent!');
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={email}
        style={styles.input}
        placeholder='Enter email...'
        onChangeText={(value) => setEmail(value)}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <Pressable
        style={({ pressed }) =>
          pressed
            ? {
                ...styles.addFriendButton,
                opacity: 0.8,
              }
            : styles.addFriendButton
        }
        onPress={handleClick}
      >
        <StyledText style={{ color: colors.appBackground, fontSize: 18 }}>
          Add Friend
        </StyledText>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...baseCenterFlexStyle,
    backgroundColor: colors.appAccent,
    padding: sizes.padding,
    width: sizes.width,
    borderRadius: sizes.borderRadius,
    flexDirection: 'row',
    gap: 20,
  },
  label: {
    color: colors.appAccentDark,
    marginVertical: 15,
    fontSize: 20,
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    width: 180,
    padding: 10,
    borderRadius: sizes.borderRadius,
  },
  addFriendButton: {
    ...baseCenterFlexStyle,
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: colors.appAccentLight,
    borderRadius: sizes.borderRadius,
  },
});
