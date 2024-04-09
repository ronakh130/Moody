import { PiCookingPot, PiTelevisionSimpleBold } from 'rn-icons/pi';
import { MoodReportRowProps } from '../MoodReportRow';
import { FaWalking } from 'rn-icons/fa';
import { FaBook, FaGamepad } from 'rn-icons/fa6';
import { BiRun } from 'rn-icons/bi';
import { RiZzzFill } from 'rn-icons/ri';
import { HiOutlinePaintBrush } from 'rn-icons/hi2';
import { Activities, MoodReport } from '../../../interfaces/MoodReportTypes';

export function activityRow(data: MoodReport): MoodReportRowProps {
  const { activities } = data;
  return {
    title: 'Activities',
    nodes: [
      {
        Icon: FaWalking,
        label: Activities.walk,
        selected: activities?.has(Activities.walk),
      },
      {
        Icon: PiTelevisionSimpleBold,
        label: Activities.tv,
        selected: activities?.has(Activities.tv),
      },
      {
        Icon: FaBook,
        label: Activities.read,
        selected: activities?.has(Activities.read),
      },
      {
        Icon: PiCookingPot,
        label: Activities.cook,
        selected: activities?.has(Activities.cook),
      },
      {
        Icon: FaGamepad,
        label: Activities.game,
        selected: activities?.has(Activities.game),
      },
      {
        Icon: HiOutlinePaintBrush,
        label: Activities.art,
        selected: activities?.has(Activities.art),
      },
      {
        Icon: BiRun,
        label: Activities.sports,
        selected: activities?.has(Activities.sports),
      },
      {
        Icon: RiZzzFill,
        label: Activities.relax,
        selected: activities?.has(Activities.relax),
      },
    ],
  };
}
