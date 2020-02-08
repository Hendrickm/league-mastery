import React from 'react';
import { Container } from 'react-bootstrap';
import ChampionIcon from './championIcon';

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
    let classes = 'champion-item';
    if (championLevel === 7) classes += ' m7';
    if (championLevel === 6) classes += ' m6';
    if (championLevel === 5) classes += ' m5';
    if (championLevel === 4) classes += ' m4';
    return classes;
  };

  const champions = championList.map((champion) => (

    <div key={champion.championId} className={getChampionClass(champion.championLevel)}>
      <ChampionIcon champion={champion} />
      {/* <ChampionBanner  */}
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
