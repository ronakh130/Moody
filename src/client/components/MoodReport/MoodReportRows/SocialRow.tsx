import { FaUserFriends } from 'rn-icons/fa';
import { FaPaw, FaPeopleGroup } from 'rn-icons/fa6';
import { RiUserHeartLine } from 'rn-icons/ri';
import { BsPersonArmsUp } from 'rn-icons/bs';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { MoodReportRow } from '../MoodReportRow';
import { setModalSocials } from '../../../redux/calendarSlice';
import { Social } from '../../../types/MoodReportTypes';

export const SocialRow = () => {
  const { social } = useSelector(
    (state: RootState) => state.calendarReducer.moodModalData
  );
  const title = 'Social';
  const actionCreator = setModalSocials;
  const nodes = [
    {
      Icon: FaPeopleGroup,
      label: Social.family,
      selected: social && Social.family in social,
    },
    {
      Icon: FaUserFriends,
      label: Social.friends,
      selected: social && Social.friends in social,
    },
    {
      Icon: RiUserHeartLine,
      label: Social.partner,
      selected: social && Social.partner in social,
    },
    {
      Icon: FaPaw,
      label: Social.other,
      selected: social && Social.other in social,
    },
    {
      Icon: BsPersonArmsUp,
      label: Social.none,
      selected: social && Social.none in social,
    },
  ];

  return (
    <MoodReportRow title={title} nodes={nodes} actionCreator={actionCreator} />
  );
};
