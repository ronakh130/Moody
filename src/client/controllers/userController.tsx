import { Alert } from 'react-native';
import { supabase } from '../lib/supabase';

export const userController = {
  async getUserMetadata(userId: string) {
    const { data, error } = await supabase
      .from('users')
      .select()
      .eq('user_id', userId);
    if (error) return console.log('Error getting user metadata');
    return data;
  },

  async getAllUserMetadata(userIds: string[]) {
    const { data, error } = await supabase
      .from('users')
      .select()
      .in('user_id', userIds);
    if (error) console.log('Error getting metadata for list of users');
    return data;
  },

  async getUserId(email: string) {
    const { data, error } = await supabase
      .from('users')
      .select()
      .eq('email', email)
      .single();
    if (error) return console.log('Error getting user id');
    return data.user_id;
  },

  async addFriend(email: string, userId: string) {
    const id = await this.getUserId(email);
    if (!id) return Alert.alert('Email not found.');
    if (id === userId)
      return Alert.alert('Enter an email different from your own.');
    const { status, error } = await supabase.from('friendships').insert({
      user_id_1: userId,
      user_id_2: id,
    });
    if (error) return Alert.alert('You already added this friend.');
    return status;
  },

  async getFriendships(userId: string) {
    const { data, error } = await supabase
      .from('friendships')
      .select()
      .or(`user_id_1.eq.${userId},user_id_2.eq.${userId}`);
    if (error) console.log('Error getting friendships');
    return data;
  },
};
