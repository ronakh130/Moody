import { FaUserFriends } from 'rn-icons/fa';
import { FaPaw, FaPeopleGroup } from 'rn-icons/fa6';
import { RiUserHeartLine } from 'rn-icons/ri';
import { BsPersonArmsUp } from 'rn-icons/bs';
import { Social } from '../../../interfaces/MoodReportTypes';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { MoodReportRow } from '../MoodReportRow';
import { setModalSocials } from '../../../redux/calendarSlice';

export const SocialRow = () => {
  const { social } = useSelector((state: RootState) => state.calendarReducer.moodModalData);
  const title = 'Social';
  const actionCreator = setModalSocials;
  const nodes = [
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
  ];

  return <MoodReportRow title={title} nodes={nodes} actionCreator={actionCreator} />;
};
