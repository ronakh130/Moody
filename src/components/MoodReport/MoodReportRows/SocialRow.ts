import { MoodReportRowProps } from '../MoodReportRow';
import { FaUserFriends } from 'rn-icons/fa';
import { FaPaw, FaPeopleGroup } from 'rn-icons/fa6';
import { TbUserHeart } from 'rn-icons/tb';
import { MdEmojiPeople } from 'rn-icons/md';

export function socialRow(): MoodReportRowProps {
  return {
    title: 'Social',
    nodes: [
      {
        Icon: FaPeopleGroup,
        label: 'family',
      },
      {
        Icon: FaUserFriends,
        label: 'friends',
      },
      {
        Icon: TbUserHeart,
        label: 'partner',
      },
      {
        Icon: FaPaw,
        label: 'other',
      },
      {
        Icon: MdEmojiPeople,
        label: 'none',
      },
    ],
  };
}
