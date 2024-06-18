import { createSlice } from '@reduxjs/toolkit';
import { FriendState } from '../types/FriendTypes';

const initialState: FriendState = {
  friendships: [],
  newFriends: [],
};

export const friends = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    setFriends: (state, { payload }) => {
      state.friendships = payload
    },
    updateNewFriends: (state) => {
      state.newFriends = state.friendships.filter((fs) => fs.status === 'pending');
    },
    removeRequest: (state, {payload}) => {
      state.friendships = state.friendships.filter(fs => fs.friendId !== payload)
    },
  },
});

export const { setFriends, updateNewFriends, removeRequest } = friends.actions;

export default friends.reducer;
