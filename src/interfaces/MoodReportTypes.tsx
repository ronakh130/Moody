interface MoodReport {
  date: number;
  moodRating?: number;
  weather?: Weather;
  sleep?: Sleep;
  people?: People;
  emotions?: Emotions;
  comments?: string;
  pictures?: string[];
}

enum Weather {
  Sunny,
  Cloudy,
  Snowy,
  Rainy,
  Windy,
}

enum Sleep {
  Good,
  Medium,
  Bad,
}

enum People {
  Friends,
  Family,
  Partner,
  Other,
  None,
}

enum Emotions {
  Excited,
  Happy,
  Relaxed,
  Sad,
  Tired,
  Proud,
  Refreshed,
  Neutral,
}
