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
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import { baseCenterFlexStyle, colors } from '../utils/styles';
import { FaRegCalendar, FaUserFriends } from 'rn-icons/fa';
import { FriendsPage } from './FriendsPage';

export const Tabs = () => {
  const dispatch = useDispatch();
  const { session } = useSelector((state: RootState) => state.authReducer);
  const Tab = createBottomTabNavigator();

  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({ data: { session } }) => {
        dispatch(setSession(session));
        return session;
      })
      .then((session) => {
        calendarController
          .fetchAllCalendarData(session?.user.id)
          .then((data) => {
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
    <View style={styles.page}>
      {session && session.user ? (
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName='Friends'
            sceneContainerStyle={styles.navigator}
            screenOptions={{
              tabBarActiveTintColor: 'red',
              tabBarShowLabel: false,
            }}
          >
            <Tab.Screen
              name='Calendar'
              component={CalendarPage}
              options={{
                tabBarIcon: ({ focused }) => (
                  <FaRegCalendar fill={focused ? 'red' : 'black'} />
                ),
              }}
            />
            <Tab.Screen
              name='Friends'
              component={FriendsPage}
              options={{
                tabBarIcon: ({ focused }) => (
                  <FaUserFriends fill={focused ? 'red' : 'black'} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      ) : (
        <LoginPage />
      )}
      <StatusBar />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    height: '100%',
    width: '100%',
  },
  navigator: {
    ...baseCenterFlexStyle,
    backgroundColor: colors.appBackground,
  },
});
