import { MoodReportRowProps } from '../MoodReportRow';
import { FaUserFriends } from 'rn-icons/fa';
import { FaPaw, FaPeopleGroup } from 'rn-icons/fa6';
import { RiUserHeartLine } from 'rn-icons/ri';
import { BsPersonArmsUp } from 'rn-icons/bs';
import { MoodReport, Social } from '../../../interfaces/MoodReportTypes';

export function socialRow(data: MoodReport): MoodReportRowProps {
  const { social } = data ?? new Set();
  return {
    title: 'Social',
    nodes: [
      {
        Icon: FaPeopleGroup,
        label: Social.family,
        selected: social?.has(Social.family),
      },
      {
        Icon: FaUserFriends,
        label: Social.friends,
        selected: social?.has(Social.friends),
      },
      {
        Icon: RiUserHeartLine,
        label: Social.partner,
        selected: social?.has(Social.partner),
      },
      {
        Icon: FaPaw,
        label: Social.other,
        selected: social?.has(Social.other),
      },
      {
        Icon: BsPersonArmsUp,
        label: Social.none,
        selected: social?.has(Social.none),
      },
    ],
  };
}
