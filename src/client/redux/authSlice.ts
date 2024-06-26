import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from '../types/AuthTypes';

const initialState: AuthState = {
  session: null,
  userId: '',
};

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSession: (state, { payload }) => {
      state.session = payload;
      if (payload) state.userId = payload.user.id;
    },
  },
});

export const { setSession } = auth.actions;

export default auth.reducer;
