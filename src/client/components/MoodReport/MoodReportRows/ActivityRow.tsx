import { PiCookingPot, PiTelevisionSimpleBold } from 'rn-icons/pi';
import { MoodReportRow } from '../MoodReportRow';
import { FaWalking } from 'rn-icons/fa';
import { FaBook, FaGamepad } from 'rn-icons/fa6';
import { BiRun } from 'rn-icons/bi';
import { RiZzzFill } from 'rn-icons/ri';
import { HiOutlinePaintBrush } from 'rn-icons/hi2';
import { Activities } from '../../../types/MoodReportTypes';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { setModalActivites } from '../../../redux/calendarSlice';

export const ActivityRow = () => {
  const { activities } = useSelector(
    (state: RootState) => state.calendarReducer.moodModalData
  );
  const title = 'Activities';
  const actionCreator = setModalActivites;
  const nodes = [
    {
      Icon: FaWalking,
      label: Activities.walk,
      selected: activities && Activities.walk in activities,
    },
    {
      Icon: PiTelevisionSimpleBold,
      label: Activities.tv,
      selected: activities && Activities.tv in activities,
    },
    {
      Icon: FaBook,
      label: Activities.read,
      selected: activities && Activities.read in activities,
    },
    {
      Icon: PiCookingPot,
      label: Activities.cook,
      selected: activities && Activities.cook in activities,
    },
    {
      Icon: FaGamepad,
      label: Activities.game,
      selected: activities && Activities.game in activities,
    },
    {
      Icon: HiOutlinePaintBrush,
      label: Activities.art,
      selected: activities && Activities.art in activities,
    },
    {
      Icon: BiRun,
      label: Activities.sports,
      selected: activities && Activities.sports in activities,
    },
    {
      Icon: RiZzzFill,
      label: Activities.relax,
      selected: activities && Activities.relax in activities,
    },
  ];

  return (
    <MoodReportRow title={title} nodes={nodes} actionCreator={actionCreator} />
  );
};
