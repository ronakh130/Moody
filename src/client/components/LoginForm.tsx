import { View, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
import { baseCenterFlexStyle, colors, sizes } from '../utils/styles';
import { StyledText } from './StyledText';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  function validEmail() {
    return email.includes('@') && email.includes('.');
  }

  async function signInWithEmail() {
    if (!validEmail) return Alert.alert('Please use a real email');
    if (password.length < 6)
      return Alert.alert('Please use a password longer than 6 characters');

    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);

    if (error) return Alert.alert(error.message);
  }

  async function signUpWithEmail() {
    if (!validEmail) return Alert.alert('Please use a real email');
    if (password.length < 6)
      return Alert.alert('Please use a password longer than 6 characters');

    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email,
      password,
    });
    setLoading(false);

    if (error) return Alert.alert(error.message);
    if (!session) Alert.alert('Please check your inbox for email verification!');
  }

  return (
    <View style={styles.container}>
      <StyledText style={styles.label}>Email</StyledText>
      <TextInput
        style={styles.input}
        onChangeText={(value) => setEmail(value)}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <StyledText style={styles.label}>Password</StyledText>
      <TextInput
        style={styles.input}
        onChangeText={(value) => setPassword(value)}
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={true}
      />
      <Pressable style={styles.loginButton} onPress={signInWithEmail} disabled={loading}>
        <StyledText style={{ color: colors.appAccentDark, fontSize: 20 }}>
          Login
        </StyledText>
      </Pressable>

      <Pressable style={styles.signUpButton} onPress={signUpWithEmail} disabled={loading}>
        <StyledText style={{ color: colors.appBackground, fontSize: 20 }}>
          Sign Up
        </StyledText>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: colors.appAccentDark,
    marginVertical: 15,
    fontSize: 20,
  },
  loginButton: {
    ...baseCenterFlexStyle,
    marginTop: 30,
    height: 40,
    backgroundColor: colors.appBackground,
    borderRadius: sizes.borderRadius,
  },
  signUpButton: {
    ...baseCenterFlexStyle,
    marginTop: 20,
    height: 40,
    backgroundColor: colors.appAccentLight,
    borderRadius: sizes.borderRadius,
  },
  container: {
    padding: sizes.padding,
    backgroundColor: colors.appAccent,
    width: sizes.width,
    borderRadius: sizes.borderRadius,
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    padding: 10,
    borderRadius: sizes.borderRadius,
  },
});
