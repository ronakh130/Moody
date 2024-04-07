import { MoodReportRowProps } from '../MoodReportRow';
import { FaUserFriends } from 'rn-icons/fa';
import { FaPaw, FaPeopleGroup } from 'rn-icons/fa6';
import { RiUserHeartLine } from 'rn-icons/ri';
import { BsPersonArmsUp } from 'rn-icons/bs';

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
        Icon: RiUserHeartLine,
        label: 'partner',
      },
      {
        Icon: FaPaw,
        label: 'other',
      },
      {
        Icon: BsPersonArmsUp,
        label: 'none',
      },
    ],
  };
}
