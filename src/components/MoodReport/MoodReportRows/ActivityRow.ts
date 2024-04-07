import { PiCookingPot, PiTelevisionSimpleBold } from 'rn-icons/pi';
import { MoodReportRowProps } from '../MoodReportRow';
import { FaPaintBrush, FaWalking } from 'rn-icons/fa';
import { FaBook, FaGamepad } from 'rn-icons/fa6';
import { BiRun } from 'rn-icons/bi';
import { RiZzzFill } from 'rn-icons/ri';

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
        Icon: FaPaintBrush,
        label: 'paint',
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
