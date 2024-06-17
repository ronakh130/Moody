import { createSlice } from '@reduxjs/toolkit';
import { FriendState } from '../types/FriendTypes';

const initialState: FriendState = {
  friendships: [],
};

export const friends = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    setFriends: (state, { payload }) => {
      state.friendships = payload
    },
  },
});

export const { setFriends } = friends.actions;

export default friends.reducer;
