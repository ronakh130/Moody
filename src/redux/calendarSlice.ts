import { createSlice } from '@reduxjs/toolkit';
import { populateDays } from '../util';

export type CalendarState = {
  currDate: number;
  month: number;
  year: number;
  days: number[];
};

const initialState: CalendarState = {
  currDate: 1,
  month: 0,
  year: 0,
  days: [],
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setDate: (state, action) => {
      const date = action.payload;

      state.currDate = date.getDate();
      state.month = date.getMonth();
      state.year = date.getFullYear();
      state.days = populateDays(state.year, state.month);
    },
  },
});

export const { setDate } = calendarSlice.actions;

export default calendarSlice.reducer;
