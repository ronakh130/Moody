import { createSlice } from '@reduxjs/toolkit';
import { populateDays } from '../util';
import { Calendar, MONTHS } from '../interfaces/CalendarTypes';

const initialState: Calendar = {
  month: 0,
  year: 0,
  moods: [],
  storedMonths: {},
  moodModalVisible: false,
  moodModalData: { date: 0 },
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setMonth: (state, action) => {
      const date: Date = action.payload;
      const inputMonth = date.getMonth();
      const inputYear = date.getFullYear();
      const monthKey = MONTHS[inputMonth] + inputYear;

      if (!(monthKey in state.storedMonths)) {
        state.storedMonths[monthKey] = {
          month: inputMonth,
          year: inputYear,
          moods: populateDays(inputYear, inputMonth),
        };
      }

      const { month, year, moods } = state.storedMonths[monthKey];
      state.month = month;
      state.year = year;
      state.moods = moods;
    },
    openMoodModal: (state, action) => {
      const { date, monthKey, inactiveDays } = action.payload;
      const index = date + inactiveDays - 1;

      state.moodModalData = state.storedMonths[monthKey].moods[index];
      state.moodModalVisible = true;
    },
    closeMoodModal: (state) => {
      state.moodModalVisible = false;
    },
  },
});

export const { setMonth, openMoodModal, closeMoodModal } = calendarSlice.actions;

export default calendarSlice.reducer;
