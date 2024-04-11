import { IoRainy, IoSnow, IoSunny } from 'rn-icons/io5';
import { MoodReportRow } from '../MoodReportRow';
import { WiDayCloudy } from 'rn-icons/wi';
import { PiWind } from 'rn-icons/pi';
import { Weather } from '../../../interfaces/MoodReportTypes';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { setModalWeather } from '../../../redux/calendarSlice';

export const WeatherRow = () => {
  const { weather } = useSelector((state: RootState) => state.calendarReducer.moodModalData);
  const title = 'Weather';
  const nodes = [
    {
      Icon: IoSunny,
      label: Weather.sunny,
      selected: weather === Weather.sunny,
    },
    {
      Icon: WiDayCloudy,
      label: Weather.cloudy,
      selected: weather === Weather.cloudy,
    },
    {
      Icon: IoRainy,
      label: Weather.rainy,
      selected: weather === Weather.rainy,
    },
    {
      Icon: IoSnow,
      label: Weather.snowy,
      selected: weather === Weather.snowy,
    },
    {
      Icon: PiWind,
      label: Weather.windy,
      selected: weather === Weather.windy,
    },
  ];

  return (
    <MoodReportRow
      title={title}
      nodes={nodes.map((node) => {
        return { ...node, actionCreator: setModalWeather };
      })}
    />
  );
};
