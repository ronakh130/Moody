import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { setSession } from '../redux/authSlice';
import { CalendarPage } from './CalendarPage';
import { LoginPage } from './LoginPage';
import { StatusBar } from 'expo-status-bar';
import { loadMoodData, setMonth } from '../redux/calendarSlice';
import { calendarController } from '../controllers/calendarController';

export const LandingPage = () => {
  const dispatch = useDispatch();
  const { session } = useSelector((state: RootState) => state.authReducer);

  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({ data: { session } }) => {
        dispatch(setSession(session));
        return session;
      })
      .then((session) => {
        calendarController.fetchAllCalendarData(session?.user.id).then((data) => {
          if (!data) return;
          dispatch(loadMoodData(data));
          dispatch(setMonth(new Date()));
        });
      });

    supabase.auth.onAuthStateChange((_event, session) => {
      dispatch(setSession(session));
    });
  }, []);

  return (
    <>
      {session && session.user ? <CalendarPage /> : <LoginPage />}
      <StatusBar />
    </>
  );
};
