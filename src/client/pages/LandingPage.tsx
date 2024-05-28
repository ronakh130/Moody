import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { setSession } from '../redux/authSlice';
import { CalendarPage } from './CalendarPage';
import { LoginPage } from './LoginPage';
import { StatusBar } from 'expo-status-bar';
import { setMonth } from '../redux/calendarSlice';
import { calendarController } from '../controllers/calendarController';

export const LandingPage = () => {
  const dispatch = useDispatch();
  const { session } = useSelector((state: RootState) => state.authReducer);

  useEffect(() => {
    dispatch(setMonth(new Date()));

    supabase.auth.getSession().then(({ data: { session } }) => {
      dispatch(setSession(session));
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      dispatch(setSession(session));
    });
  }, []);

  useEffect(() => {
    const data = calendarController.fetchAllCalendarData(session?.user.id);
    console.log(data);
    //TODO
    //store data into redux state
  }, [session?.user.id]);

  return (
    <>
      {session && session.user ? <CalendarPage /> : <LoginPage />}
      <StatusBar />
    </>
  );
};
