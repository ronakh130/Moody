import { Alert } from 'react-native';
import { supabase } from '../lib/supabase';
import { MoodReport } from '../types/MoodReportTypes';

export const calendarController = {
  async fetchAllCalendarData(userId: string | undefined) {
    if (!userId) return;
    const response = await supabase
      .from('mood_report')
      .select()
      .eq('user_id', userId);

    if (response.error)
      return Alert.alert('Error getting calendar data: ' + response.error);
    return response.data;
  },

  async submitMoodReport(userId: string | undefined, data: MoodReport) {
    if (!userId) return;
    const response = await supabase
      .from('mood_report')
      .upsert({
        ...data,
        user_id: userId,
        activities: JSON.stringify(data.activities),
        emotions: JSON.stringify(data.emotions),
        social: JSON.stringify(data.social),
      })
      .select();

    if (response.error)
      return Alert.alert('Error getting calendar data: ' + response.error);
    return response.data;
  },
};
