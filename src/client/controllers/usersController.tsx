import { supabase } from '../lib/supabase';

export const userController = {
  async getUserMetadata(userId: string) {
    const response = await supabase
      .from('users')
      .select()
      .eq('user_id', userId);
    if (response.error) return console.log('Error getting user metadata');
    return response.data;
  },

  async getAllUserMetadata(userIds: string[]) {
    const response = await supabase
      .from('users')
      .select()
      .in('user_id', userIds);
    if (response.error)
      return console.log('Error getting metadata for list of users');
    return response.data;
  },

  async getFriendships(userId: string) {
    const response = await supabase
      .from('friendships')
      .select()
      .or(`user_id_1.eq.${userId},user_id_2.eq.${userId}`);
    if (response.error) return console.log('Error getting friendships');
    // TODO
    // format response to only include friend ids
    return response.data;
  },
};
