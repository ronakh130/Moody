import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { View, TextInput, StyleSheet, Pressable } from 'react-native';
import { baseCenterFlexStyle, colors, sizes } from '../utils/styles';
import { StyledText } from './StyledText';
import { LoginValues } from '../interfaces/LoginTypes';

export const LoginForm = () => {
  const {
    handleSubmit,
    control,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<LoginValues> = (data) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <StyledText style={styles.label}>Email</StyledText>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            autoCapitalize='none'
            autoCorrect={false}
          />
        )}
        name='email'
        rules={{ required: true }}
      />
      <StyledText style={styles.label}>Password</StyledText>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry={true}
          />
        )}
        name='password'
        rules={{ required: true }}
      />
      <Pressable style={styles.loginButton} onPress={handleSubmit(onSubmit)}>
        <StyledText style={{ color: colors.appAccentDark, fontSize: 20 }}>Login</StyledText>
      </Pressable>

      <Pressable style={styles.signUpButton} onPress={handleSubmit(onSubmit)}>
        <StyledText style={{ color: colors.appBackground, fontSize: 20 }}>Sign Up</StyledText>
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
