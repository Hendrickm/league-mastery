import React from 'react';
import CHAMPION_KEYS from '../assets/championKeys';
import CHAMPION_NAME from '../assets/championName';

import banner1 from '../assets/banner_1.png';
import banner2 from '../assets/banner_2.png';
import banner3 from '../assets/banner_3.png';
import banner4 from '../assets/banner_4.png';
import banner5 from '../assets/banner_5.png';
import banner6 from '../assets/banner_6.png';
import banner7 from '../assets/banner_7.png';

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

  const getChampionBanner = () => {
    switch (championLevel) {
      case 1:
        return banner1;
      case 2:
        return banner2;
      case 3:
        return banner3;
      case 4:
        return banner4;
      case 5:
        return banner5;
      case 6:
        return banner6;
      case 7:
        return banner7;
      default:
        return '';
    }
  };

  return (
    <div>
      <div className="champion-name">{getChampionName()}</div>
      <img className="champion-icon" src={`http://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/${getChampionKey()}.png`} alt={championId.toString()} />
      <div className="champion-name">{championPoints}</div>
      <img className="champion-banner" src={getChampionBanner()} alt="banner" />
    </div>
  );
};
