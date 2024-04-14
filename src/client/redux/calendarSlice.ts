import { createSlice } from '@reduxjs/toolkit';
import { populateDays } from '../utils/util';
import { Calendar, MONTHS } from '../interfaces/CalendarTypes';

const initialState: Calendar = {
  month: 0,
  year: 0,
  moods: [],
  storedMonths: {},
  moodModalVisible: false,
  moodModalData: {
    date: 1,
  },
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

      if (monthKey in state.storedMonths) {
        const { month, year, moods } = state.storedMonths[monthKey];
        state.month = month;
        state.year = year;
        state.moods = moods;
      } else {
        state.month = inputMonth;
        state.year = inputYear;
        state.moods = populateDays(inputYear, inputMonth);
      }
    },
    saveMonth: (state) => {
      const { month, year, moods } = state;
      const monthKey = MONTHS[month] + year;

      state.storedMonths[monthKey] = {
        month,
        year,
        moods,
      };
    },
    openMoodModal: (state, { payload }) => {
      const { date, monthKey, inactiveDays } = payload;
      const index = date + inactiveDays - 1;

      state.moodModalData =
        monthKey in state.storedMonths
          ? state.storedMonths[monthKey].moods[index]
          : { date };
      state.moodModalVisible = true;
    },
    closeMoodModal: (state, { payload }) => {
      const { inactiveDays } = payload;
      const { date } = state.moodModalData;
      const monthKey = MONTHS[state.month] + state.year;
      const index = date + inactiveDays - 1;

      state.storedMonths[monthKey].moods[index] = state.moodModalData;
      state.moodModalVisible = false;
    },
    setModalMood: (state, { payload }) => {
      state.moodModalData.moodRating = payload;
    },
    setModalActivites: (state, { payload }) => {
      const set = state.moodModalData.activities ?? new Set();

      set.has(payload) ? set.delete(payload) : set.add(payload);
      state.moodModalData.activities = set;
    },
    setModalEmotions: (state, { payload }) => {
      const set = state.moodModalData.emotions ?? new Set();

      set.has(payload) ? set.delete(payload) : set.add(payload);
      state.moodModalData.emotions = set;
    },
    setModalSocials: (state, { payload }) => {
      const set = state.moodModalData.social ?? new Set();

      set.has(payload) ? set.delete(payload) : set.add(payload);
      state.moodModalData.social = set;
    },
    setModalWeather: (state, { payload }) => {
      state.moodModalData.weather = payload;
    },
  },
});

export const {
  setMonth,
  openMoodModal,
  closeMoodModal,
  setModalMood,
  setModalActivites,
  setModalEmotions,
  setModalSocials,
  setModalWeather,
  saveMonth,
} = calendarSlice.actions;

export default calendarSlice.reducer;