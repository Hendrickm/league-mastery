import React from 'react';

import ChampionBanner from './championBanner';

import CHAMPION_KEYS from '../assets/championKeys';
import CHAMPION_NAME from '../assets/championName';


interface Champion {
  championId: number,
  championLevel: number,
  championPoints: number,
  lastPlayTime: string,
  championPointsSinceLastLevel: number,
  championPointsUntilNextLevel: number,
  chestGranted: boolean,
  tokensEarned: 0,
  summonerId: string
}

interface Props {
  champion: Champion;
}

export default (props: Props) => {
  const { champion: { championId, championPoints, championLevel } } = props;

  const getChampionKey = () => CHAMPION_KEYS.find((c) => c.id === championId)?.key;

  const getChampionName = () => CHAMPION_NAME.find((c) => c.id === championId)?.name;

  const getChampionClass = () => {
    let classes = 'champion';
    if (championLevel === 7) classes += ' m7';
    if (championLevel === 6) classes += ' m6';
    if (championLevel === 5) classes += ' m5';
    if (championLevel === 4) classes += ' m4';
    return classes;
  };


  return (
    <div key={championId} className="champion-container">
      <div className={`${getChampionClass()}`}>
        <div className="champion-name">{getChampionName()}</div>
        <img className="champion-icon" src={`http://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/${getChampionKey()}.png`} alt={championId.toString()} />
        <div className="champion-name">{championPoints}</div>
      </div>
      <ChampionBanner championLevel={championLevel} />
    </div>
  );
};
