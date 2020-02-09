export interface Champion {
  championId: number,
  championLevel: number,
  championPoints: number,
  lastPlayTime: string,
  championPointsSinceLastLevel: number,
  championPointsUntilNextLevel: number,
  chestGranted: boolean,
  tokensEarned: 0,
  summonerId: string
  [key: string]: string | boolean | number;
}
