import React from 'react';
import { Jumbotron } from 'react-bootstrap';

import SummonerIcon from './summonerIcon';

interface Props {
  name: string,
  profileIconId: number,
  summonerLevel: number,
}

export default (props: Props) => {
  const { name, profileIconId, summonerLevel } = props;
  return (
    <Jumbotron fluid>
      <SummonerIcon profileIconId={profileIconId} summonerLevel={summonerLevel} />
      <p className="summoner-name">{name}</p>
    </Jumbotron>

  );
};
