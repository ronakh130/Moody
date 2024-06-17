import { createSlice } from '@reduxjs/toolkit';
import {
  formatDateParts,
  getDateFromDateString,
  getMonthFromDateString,
  getYearFromDateString,
  populateDays,
} from '../utils/dates';
import { Calendar, MONTHS } from '../types/CalendarTypes';
import { MoodReport } from '../types/MoodReportTypes';

const initialState: Calendar = {
  month: 0,
  year: 0,
  moods: [],
  storedMonths: {},
  moodModalVisible: false,
  moodModalData: {
    date: '2024-01-30',
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
        state.moods = state.storedMonths[monthKey];
      } else {
        state.moods = populateDays(inputYear, inputMonth);
      }
      state.month = inputMonth;
      state.year = inputYear;
    },
    saveMonth: (state) => {
      const { month, year, moods } = state;
      const monthKey = MONTHS[month] + year;

      if (monthKey in state.storedMonths) return;
      state.storedMonths[monthKey] = moods;
    },
    openMoodModal: (state, { payload }) => {
      const { date, month, year, inactiveDays } = payload;
      const monthKey = MONTHS[month] + year;
      const index = date + inactiveDays - 1;

      state.moodModalData =
        monthKey in state.storedMonths
          ? state.storedMonths[monthKey][index]
          : { date: formatDateParts(year, month, date) };
      state.moodModalVisible = true;
    },
    closeMoodModal: (state, { payload }) => {
      const { inactiveDays } = payload;
      const { date } = state.moodModalData;
      const monthKey = MONTHS[state.month] + state.year;
      const index = getDateFromDateString(date) + inactiveDays - 1;

      state.storedMonths[monthKey][index] = state.moodModalData;
      state.moodModalVisible = false;
    },
    setModalMood: (state, { payload }) => {
      state.moodModalData.mood_rating = payload;
    },
    setModalActivites: (state, { payload }) => {
      const obj = state.moodModalData.activities ?? {};

      obj[payload] ? delete obj[payload] : (obj[payload] = payload);
      state.moodModalData.activities = obj;
    },
    setModalEmotions: (state, { payload }) => {
      const obj = state.moodModalData.emotions ?? {};

      obj[payload] ? delete obj[payload] : (obj[payload] = payload);
      state.moodModalData.emotions = obj;
    },
    setModalSocials: (state, { payload }) => {
      const obj = state.moodModalData.social ?? {};

      obj[payload] ? delete obj[payload] : (obj[payload] = payload);
      state.moodModalData.social = obj;
    },
    setModalWeather: (state, { payload }) => {
      state.moodModalData.weather = payload;
    },
    setModalComments: (state, { payload }) => {
      state.moodModalData.comments = payload;
    },
    loadMoodData: (state, { payload }) => {
      payload.forEach((row: any) => {
        const { date } = row;
        const day = getDateFromDateString(date);
        const year = getYearFromDateString(date);
        const month = getMonthFromDateString(date);
        const monthKey = MONTHS[month] + year;

        if (!(monthKey in state.storedMonths)) {
          state.storedMonths[monthKey] = populateDays(year, month);
        }
        const dayOffset = state.storedMonths[monthKey]
          .map((el: MoodReport) => getDateFromDateString(el.date))
          .indexOf(1);
        state.storedMonths[monthKey][day + dayOffset - 1] = {
          ...row,
          activities: JSON.parse(row.activities),
          emotions: JSON.parse(row.emotions),
          social: JSON.parse(row.social),
        };
      });
    },
    clearMonthData: (state) => {
      state.storedMonths = {};
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
  setModalComments,
  loadMoodData,
  clearMonthData,
} = calendarSlice.actions;

export default calendarSlice.reducer;
