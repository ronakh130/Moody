import { configureStore } from '@reduxjs/toolkit';
import calendarReducer from './calendarSlice';
import authReducer from './authSlice';
import friendReducer from './friendSlice';
import { enableMapSet } from 'immer';

enableMapSet();

export const store = configureStore({
  reducer: {
    calendarReducer,
    authReducer,
    friendReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
