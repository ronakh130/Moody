import { FaRegFaceFrown, FaRegFaceLaughBeam, FaRegFaceMeh, FaRegFaceSmile, FaRegFaceTired } from 'rn-icons/fa6';
import { MoodReportRowProps } from '../MoodReportRow';
import { MoodRating, MoodReport } from '../../../interfaces/MoodReportTypes';

export function moodRow(data: MoodReport): MoodReportRowProps {
  const { moodRating } = data;
  return {
    title: 'How was your day?',
    nodes: [
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
    ],
  };
}
