import { FaRegFaceFrown, FaRegFaceLaughBeam, FaRegFaceMeh, FaRegFaceSmile, FaRegFaceTired } from 'rn-icons/fa6';
import { MoodRating } from '../../../interfaces/MoodReportTypes';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { MoodReportRow } from '../MoodReportRow';
import { setModalMood } from '../../../redux/calendarSlice';

export const MoodRow = () => {
  const { moodRating } = useSelector((state: RootState) => state.calendarReducer.moodModalData);
  const title = 'How was your day?';
  const nodes = [
    {
      Icon: FaRegFaceTired,
      label: MoodRating.awful,
      selected: moodRating === MoodRating.awful,
    },
    {
      Icon: FaRegFaceFrown,
      label: MoodRating.bad,
      selected: moodRating === MoodRating.bad,
    },
    {
      Icon: FaRegFaceMeh,
      label: MoodRating.meh,
      selected: moodRating === MoodRating.meh,
    },
    {
      Icon: FaRegFaceSmile,
      label: MoodRating.good,
      selected: moodRating === MoodRating.good,
    },
    {
      Icon: FaRegFaceLaughBeam,
      label: MoodRating.great,
      selected: moodRating === MoodRating.great,
    },
  ];

  return (
    <MoodReportRow
      title={title}
      nodes={nodes.map((node) => {
        return { ...node, actionCreator: setModalMood };
      })}
    />
  );
};
