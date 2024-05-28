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
    setSession: (state, {payload}) => {
      state.session = payload;
      state.userId = payload.user.id;
    }
  },
});

export const {
  setSession,
} = auth.actions;

export default auth.reducer;
