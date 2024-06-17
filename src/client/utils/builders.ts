import { Friendship, FriendshipResponse, FriendshipStatus } from '../types/FriendTypes';

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
  const data = {
    idsAndStatus: { '10bc33e2-e217-4551-945a-3b958b6f8add': 'pending' },
    metadata: [
      {
        email: 'rhirpara130@gmail.com',
        full_name: null,
        user_id: '10bc33e2-e217-4551-945a-3b958b6f8add',
        username: null,
      },
    ],
  };
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
