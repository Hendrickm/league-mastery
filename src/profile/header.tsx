import React from 'react';
import { Jumbotron } from 'react-bootstrap';

import SummonerIcon from './summonerIcon';
import InputSearch from '../shared/inputSearch';

interface Props {
  name: string,
  profileIconId: number,
  summonerLevel: number,
}

export default (props: Props) => {
  const { name, profileIconId, summonerLevel } = props;
  return (
    <Jumbotron fluid>
      <div className="fixed-header">
        <InputSearch />
      </div>
      <SummonerIcon profileIconId={profileIconId} summonerLevel={summonerLevel} />
      <p className="summoner-name">{name}</p>
    </Jumbotron>

  );
};
