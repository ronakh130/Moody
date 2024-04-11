export interface MoodReport {
  date: number;
  moodRating?: MoodRating;
  activities?: Set<Activities>;
  weather?: Weather;
  sleep?: Sleep;
  social?: Set<Social>;
  emotions?: Set<Emotions>;
  comments?: string;
  pictures?: string[];
}

export enum MoodRating {
  awful = 'awful',
  bad = 'bad',
  meh = 'meh',
  good = 'good',
  great = 'great',
}

export enum Activities {
  walk = 'walk',
  tv = 'tv',
  read = 'read',
  cook = 'cook',
  game = 'game',
  art = 'art',
  sports = 'sports',
  relax = 'relax',
}

export enum Weather {
  sunny = 'sunny',
  cloudy = 'cloudy',
  snowy = 'snowy',
  rainy = 'rainy',
  windy = 'windy',
}

export enum Sleep {
  good = 'good',
  medium = 'medium',
  bad = 'bad',
}

export enum Social {
  friends = 'friends',
  family = 'family',
  partner = 'partner',
  other = 'other',
  none = 'none',
}

export enum Emotions {
  excited = 'excited',
  happy = 'happy',
  relaxed = 'relaxed',
  sad = 'sad',
  tired = 'tired',
  proud = 'proud',
  refreshed = 'refreshed',
  'so-so' = 'so-so',
}
