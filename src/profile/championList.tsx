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

  const renderChampions = () => championList.map((champion) => (
    <ChampionIcon key={champion.championId} champion={champion} />
  ));

  return (
    <Container>
      <h3 className="champion-grid-title">Champion masteries</h3>
      <div className="champion-grid ">
        {renderChampions()}
      </div>
    </Container>
  );
};
