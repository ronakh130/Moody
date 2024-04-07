import { FaRegFaceFrown, FaRegFaceLaughBeam, FaRegFaceMeh, FaRegFaceSmile, FaRegFaceTired } from 'rn-icons/fa6';
import { MoodReportRowProps } from '../MoodReportRow';

export function moodRow(): MoodReportRowProps {
  return {
    title: 'How was your day?',
    nodes: [
      {
        Icon: FaRegFaceTired,
        label: 'awful',
      },
      {
        Icon: FaRegFaceFrown,
        label: 'bad',
      },
      {
        Icon: FaRegFaceMeh,
        label: 'meh',
      },
      {
        Icon: FaRegFaceSmile,
        label: 'good',
      },
      {
        Icon: FaRegFaceLaughBeam,
        label: 'great',
      },
    ],
  };
}
