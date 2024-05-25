import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from '../interfaces/AuthTypes';

const initialState: AuthState = {
  userId: '',
};

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveUserId: (state, {payload}) => {
      state.userId = payload;
    },
  },
});

export const {
  saveUserId
} = auth.actions;

export default auth.reducer;
