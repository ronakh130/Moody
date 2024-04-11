import { createSlice } from '@reduxjs/toolkit';
import { populateDays } from '../util';
import { Calendar, MONTHS } from '../interfaces/CalendarTypes';

const initialState: Calendar = {
  month: 0,
  year: 0,
  moods: [],
  storedMonths: {},
  moodModalVisible: false,
  moodModalData: { date: new Date() },
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setMonth: (state, { payload }) => {
      const date: Date = payload;
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
    openMoodModal: (state, { payload }) => {
      const { date, monthKey, inactiveDays } = payload;
      const index = date + inactiveDays - 1;

      state.moodModalData = state.storedMonths[monthKey].moods[index];
      state.moodModalVisible = true;
    },
    closeMoodModal: (state) => {
      state.moodModalVisible = false;
    },
    setModalMood: (state, { payload }) => {
      state.moodModalData.moodRating = payload;
    },
    setModalActivites: (state, { payload }) => {
      const set = state.moodModalData.activities ?? new Set();
      
      set?.has(payload) ? set.delete(payload) : set?.add(payload);
      state.moodModalData.activities = set;
    },
  },
});

export const { setMonth, openMoodModal, closeMoodModal, setModalMood, setModalActivites } = calendarSlice.actions;

export default calendarSlice.reducer;
