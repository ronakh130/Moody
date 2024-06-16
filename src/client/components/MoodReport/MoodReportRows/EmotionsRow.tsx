import { MoodReportRow } from '../MoodReportRow';
import { LuPartyPopper } from 'rn-icons/lu';
import { FaBed, FaCouch, FaTrophy } from 'rn-icons/fa6';
import { CiSun } from 'rn-icons/ci';
import { AiOutlineMeh } from 'rn-icons/ai';
import { RxEyeClosed } from 'rn-icons/rx';
import { GiFlowerPot } from 'rn-icons/gi';
import { Emotions } from '../../../types/MoodReportTypes';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { setModalEmotions } from '../../../redux/calendarSlice';

export const EmotionsRow = () => {
  const { emotions } = useSelector(
    (state: RootState) => state.calendarReducer.moodModalData
  );
  const title = 'Emotions';
  const actionCreator = setModalEmotions;
  const nodes = [
    {
      Icon: GiFlowerPot,
      label: Emotions.happy,
      selected: emotions && Emotions.happy in emotions,
    },
    {
      Icon: LuPartyPopper,
      label: Emotions.excited,
      selected: emotions && Emotions.excited in emotions,
    },
    {
      Icon: FaCouch,
      label: Emotions.relaxed,
      selected: emotions && Emotions.relaxed in emotions,
    },
    {
      Icon: FaTrophy,
      label: Emotions.proud,
      selected: emotions && Emotions.proud in emotions,
    },
    {
      Icon: RxEyeClosed,
      label: Emotions.sad,
      selected: emotions && Emotions.sad in emotions,
    },
    {
      Icon: FaBed,
      label: Emotions.tired,
      selected: emotions && Emotions.tired in emotions,
    },
    {
      Icon: CiSun,
      label: Emotions.refreshed,
      selected: emotions && Emotions.refreshed in emotions,
    },
    {
      Icon: AiOutlineMeh,
      label: Emotions['so-so'],
      selected: emotions && Emotions['so-so'] in emotions,
    },
  ];

  return (
    <MoodReportRow title={title} nodes={nodes} actionCreator={actionCreator} />
  );
};
