export interface FriendState {
  friendships: Friendship[],
}

export interface Friendship {
  friendId: string,
  status: FriendshipStatus,
  email: string,
  name: string | null,
  username: string | null,
}

export enum FriendshipStatus {
  pending = 'pending',
  accepted = 'accepted',
}

export interface FriendshipResponse {
  status: FriendshipStatus,
  user_id_1: string,
  user_id_2: string,
}

export interface UserMetadata {
  user_id: string,
  username: string | null,
  full_name: string | null,
  email: string,
}