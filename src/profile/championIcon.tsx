import React from 'react';
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
  const { champion: { championId, championPoints } } = props;

  const getChampionKey = () => CHAMPION_KEYS.find((c) => c.id === championId)?.key;

  const getChampionName = () => CHAMPION_NAME.find((c) => c.id === championId)?.name;


  return (
    <div>
      <div className="champion-name">{getChampionName()}</div>
      <img className="champion-icon" src={`http://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/${getChampionKey()}.png`} alt={championId.toString()} />
      <div className="champion-name">{championPoints}</div>
    </div>
  );
};
