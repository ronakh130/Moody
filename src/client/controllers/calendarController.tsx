import { Alert } from 'react-native';
import { supabase } from '../lib/supabase';

export const calendarController = {
  async fetchCalendarData(userId: string, month: number, year: number) {
    const response = await supabase
      .from('month_records')
      .select(`month_record_id`)
      .match({
        user_id: userId,
        month,
        year,
      })
      .single();
      
    if(response.error) return Alert.alert('Error getting calendar data: ' + response.error);
    return response.data;
  },
};
