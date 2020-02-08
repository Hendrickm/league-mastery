import React from 'react';
import { Container } from 'react-bootstrap';
import ChampionIcon from './championIcon';

import banner1 from '../assets/banner_1.png';
import banner2 from '../assets/banner_2.png';
import banner3 from '../assets/banner_3.png';
import banner4 from '../assets/banner_4.png';
import banner5 from '../assets/banner_5.png';
import banner6 from '../assets/banner_6.png';
import banner7 from '../assets/banner_7.png';

interface Props {
  championList: Array<Champion>
}

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

export default (props: Props) => {
  const { championList } = props;

  const getChampionClass = (championLevel: number) => {
    let classes = 'champion';
    if (championLevel === 7) classes += ' m7';
    if (championLevel === 6) classes += ' m6';
    if (championLevel === 5) classes += ' m5';
    if (championLevel === 4) classes += ' m4';
    return classes;
  };

  const getChampionBanner = (championLevel: number) => {
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


  const champions = championList.map((champion) => (
    <div className="champion-container">
      <div key={champion.championId} className={`${getChampionClass(champion.championLevel)}`}>
        <ChampionIcon champion={champion} />
      </div>
      <img className="champion-banner" src={getChampionBanner(champion.championLevel)} alt="banner" />

    </div>
  ));
  return (
    <Container>
      <div className="champion-grid ">
        {champions}
      </div>
    </Container>
  );
};
