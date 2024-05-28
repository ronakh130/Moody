import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from '../interfaces/AuthTypes';

const initialState: AuthState = {
  session: null,
  userId: '',
};

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveUserId: (state, {payload}) => {
      state.userId = payload;
    },
    setSession: (state, {payload}) => {
      state.session = payload;
    }
  },
});

export const {
  saveUserId,
  setSession,
} = auth.actions;

export default auth.reducer;
