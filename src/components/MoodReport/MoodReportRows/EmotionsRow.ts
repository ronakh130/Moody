import { MoodReportRowProps } from '../MoodReportRow';
import { LuPartyPopper } from 'rn-icons/lu';
import { FaBed, FaCouch, FaTrophy } from 'rn-icons/fa6';
import { CiSun } from 'rn-icons/ci';
import { AiOutlineMeh } from 'rn-icons/ai';
import { RxEyeClosed } from 'rn-icons/rx';
import { GiFlowerPot } from 'rn-icons/gi';

export function emotionsRow(): MoodReportRowProps {
  return {
    title: 'Emotions',
    nodes: [
      {
        Icon: GiFlowerPot,
        label: 'happy',
      },
      {
        Icon: LuPartyPopper,
        label: 'excited',
      },
      {
        Icon: FaCouch,
        label: 'relaxed',
      },
      {
        Icon: FaTrophy,
        label: 'proud',
      },
      {
        Icon: RxEyeClosed,
        label: 'sad',
      },
      {
        Icon: FaBed,
        label: 'tired',
      },
      {
        Icon: CiSun,
        label: 'refreshed',
      },
      {
        Icon: AiOutlineMeh,
        label: 'so-so',
      },
    ],
  };
}
