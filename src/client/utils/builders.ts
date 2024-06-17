import {
  Friendship,
  FriendshipResponse,
  FriendshipStatus,
} from '../types/FriendTypes';

export function removeUserId(
  userId: string,
  friendships: FriendshipResponse[]
) {
  const userIds: string[] = [];
  const idsAndStatus: Record<string, FriendshipStatus> = {};
  friendships.forEach((fs) => {
    const friendId = fs.user_id_1 === userId ? fs.user_id_2 : fs.user_id_1;
    userIds.push(friendId);
    idsAndStatus[friendId] = fs.status;
  });

  return { userIds, idsAndStatus };
}

export function buildFriendships(
  idsAndStatus: Record<string, FriendshipStatus>,
  metadata: any[] | null
): Friendship[] {
  if (!metadata) return [];
  return metadata.map((row) => {
    return {
      friendId: row.user_id,
      status: idsAndStatus[row.user_id],
      email: row.email,
      name: row.full_name,
      username: row.username,
    };
  });
}
