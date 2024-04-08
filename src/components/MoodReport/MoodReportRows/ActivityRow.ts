import { PiCookingPot, PiTelevisionSimpleBold } from 'rn-icons/pi';
import { MoodReportRowProps } from '../MoodReportRow';
import { FaWalking } from 'rn-icons/fa';
import { FaBook, FaGamepad } from 'rn-icons/fa6';
import { BiRun } from 'rn-icons/bi';
import { RiZzzFill } from 'rn-icons/ri';
import { HiOutlinePaintBrush } from 'rn-icons/hi2';

export function activityRow(): MoodReportRowProps {
  return {
    title: 'Activities',
    nodes: [
      {
        Icon: FaWalking,
        label: 'walk',
      },
      {
        Icon: PiTelevisionSimpleBold,
        label: 'tv',
      },
      {
        Icon: FaBook,
        label: 'read',
      },
      {
        Icon: PiCookingPot,
        label: 'cook',
      },
      {
        Icon: FaGamepad,
        label: 'game',
      },
      {
        Icon: HiOutlinePaintBrush,
        label: 'art',
      },
      {
        Icon: BiRun,
        label: 'sports',
      },
      {
        Icon: RiZzzFill,
        label: 'relax',
      },
    ],
  };
}
