import { Alert } from 'react-native';
import { supabase } from '../lib/supabase';

function validEmail(email: string) {
  return email.includes('@') && email.includes('.');
}

export const authController = {
  async login(email: string, password: string) {
    if (!validEmail(email)) return Alert.alert('Please use a real email');
    if (password.length < 6)
      return Alert.alert('Please use a password longer than 6 characters');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) return Alert.alert(error.message);
  },

  async signUp(email: string, password: string) {
    if (!validEmail(email)) return Alert.alert('Please use a real email');
    if (password.length < 6)
      return Alert.alert('Please use a password longer than 6 characters');

    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) return Alert.alert(error.message);
    if (!session) Alert.alert('Please check your inbox for email verification!');
  },
};
