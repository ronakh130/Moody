import { IoRainy, IoSnow, IoSunny } from 'rn-icons/io5';
import { MoodReportRowProps } from '../MoodReportRow';
import { WiDayCloudy } from 'rn-icons/wi';
import { PiWind } from 'rn-icons/pi';
import { MoodReport, Weather } from '../../../interfaces/MoodReportTypes';

export function weatherRow(data: MoodReport): MoodReportRowProps {
  const { weather } = data ?? '';
  return {
    title: 'Weather',
    nodes: [
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
    ],
  };
}
