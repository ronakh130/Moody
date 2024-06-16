import { supabase } from '../lib/supabase';

export const friendController = {
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
