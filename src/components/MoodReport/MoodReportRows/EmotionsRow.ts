import { MoodReportRowProps } from '../MoodReportRow';
import { LuPartyPopper } from 'rn-icons/lu';
import { FaBed, FaCouch, FaTrophy } from 'rn-icons/fa6';
import { CiSun } from 'rn-icons/ci';
import { AiOutlineMeh } from 'rn-icons/ai';
import { RxEyeClosed } from 'rn-icons/rx';
import { GiFlowerPot } from 'rn-icons/gi';
import { Emotions, MoodReport } from '../../../interfaces/MoodReportTypes';

export function emotionsRow(data: MoodReport): MoodReportRowProps {
  const { emotions } = data;
  return {
    title: 'Emotions',
    nodes: [
      {
        Icon: GiFlowerPot,
        label: Emotions.happy,
        selected: emotions?.has(Emotions.happy),
      },
      {
        Icon: LuPartyPopper,
        label: Emotions.excited,
        selected: emotions?.has(Emotions.excited),
      },
      {
        Icon: FaCouch,
        label: Emotions.relaxed,
        selected: emotions?.has(Emotions.relaxed),
      },
      {
        Icon: FaTrophy,
        label: Emotions.proud,
        selected: emotions?.has(Emotions.proud),
      },
      {
        Icon: RxEyeClosed,
        label: Emotions.sad,
        selected: emotions?.has(Emotions.sad),
      },
      {
        Icon: FaBed,
        label: Emotions.tired,
        selected: emotions?.has(Emotions.tired),
      },
      {
        Icon: CiSun,
        label: Emotions.refreshed,
        selected: emotions?.has(Emotions.refreshed),
      },
      {
        Icon: AiOutlineMeh,
        label: Emotions['so-so'],
        selected: emotions?.has(Emotions['so-so']),
      },
    ],
  };
}
