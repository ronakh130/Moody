import { View, TextInput, StyleSheet, Pressable } from 'react-native';
import { baseCenterFlexStyle, colors, sizes } from '../utils/styles';
import { StyledText } from './StyledText';
import { useState } from 'react';
import { authController } from '../controllers/authController';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setLoading(true);
    await authController.login(email, password);
    setLoading(false);
  }

  async function handleSignUp() {
    setLoading(true);
    await authController.signUp(email, password);
    setLoading(false);
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
      <Pressable
        style={({ pressed }) =>
          pressed
            ? { ...styles.loginButton, opacity: 0.8 }
            : styles.loginButton
        }
        onPress={handleLogin}
        disabled={loading}
      >
        <StyledText style={{ color: colors.appAccentDark, fontSize: 20 }}>
          Login
        </StyledText>
      </Pressable>

      <Pressable
        style={({ pressed }) =>
          pressed
            ? { ...styles.signUpButton, opacity: 0.8 }
            : styles.signUpButton
        }
        onPress={handleSignUp}
        disabled={loading}
      >
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
