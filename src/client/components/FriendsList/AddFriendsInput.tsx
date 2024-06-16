import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { baseCenterFlexStyle, colors, sizes } from '../../utils/styles';
import { StyledText } from '../StyledText';
import { useState } from 'react';

export const AddFriendsInput = () => {
  const [email, setEmail] = useState('');

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
      <Pressable style={styles.addFriendButton} onPress={() => setEmail('')}>
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
