import { createSlice } from '@reduxjs/toolkit';
import { populateDays } from '../util';
import { Calendar, MONTHS } from '../interfaces/CalendarTypes';

const initialState: Calendar = {
  month: 0,
  year: 0,
  moods: [],
  storedMonths: {},
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setMonth: (state, action) => {
      const date = action.payload;
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
  },
});

export const { setMonth } = calendarSlice.actions;

export default calendarSlice.reducer;
