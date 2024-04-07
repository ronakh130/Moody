import { IoRainy, IoSnow, IoSunny } from 'rn-icons/io5';
import { MoodReportRowProps } from '../MoodReportRow';
import { WiDayCloudy } from 'rn-icons/wi';
import { PiWind } from 'rn-icons/pi';

export function weatherRow(): MoodReportRowProps {
  return {
    title: 'Weather',
    nodes: [
      {
        Icon: IoSunny,
        label: 'sunny',
      },
      {
        Icon: WiDayCloudy,
        label: 'cloudy',
      },
      {
        Icon: IoRainy,
        label: 'rainy',
      },
      {
        Icon: IoSnow,
        label: 'snowy',
      },
      {
        Icon: PiWind,
        label: 'windy',
      },
    ],
  };
}
