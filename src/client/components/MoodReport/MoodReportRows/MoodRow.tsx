import {
  FaRegFaceFrown,
  FaRegFaceLaughBeam,
  FaRegFaceMeh,
  FaRegFaceSmile,
  FaRegFaceTired,
} from 'rn-icons/fa6';
import { MoodRating } from '../../../types/MoodReportTypes';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { MoodReportRow } from '../MoodReportRow';
import { setModalMood } from '../../../redux/calendarSlice';

export const MoodRow = () => {
  const { mood_rating } = useSelector(
    (state: RootState) => state.calendarReducer.moodModalData
  );
  const title = 'How was your day?';
  const actionCreator = setModalMood;
  const nodes = [
    {
      Icon: FaRegFaceTired,
      label: MoodRating.awful,
      selected: mood_rating === MoodRating.awful,
    },
    {
      Icon: FaRegFaceFrown,
      label: MoodRating.bad,
      selected: mood_rating === MoodRating.bad,
    },
    {
      Icon: FaRegFaceMeh,
      label: MoodRating.meh,
      selected: mood_rating === MoodRating.meh,
    },
    {
      Icon: FaRegFaceSmile,
      label: MoodRating.good,
      selected: mood_rating === MoodRating.good,
    },
    {
      Icon: FaRegFaceLaughBeam,
      label: MoodRating.great,
      selected: mood_rating === MoodRating.great,
    },
  ];

  return (
    <MoodReportRow title={title} nodes={nodes} actionCreator={actionCreator} />
  );
};
