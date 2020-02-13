import React from 'react';
import { Container } from 'react-bootstrap';

import { getChampionKey } from '../utils/utils';

import './matches.css';

import MatchContainer from './matchContainer';
import { Match } from '../utils/types';

interface Props {
  matches: Array<Match>;
  region: string;
  summonerName: string;
}

export default (props: Props) => {
  const { matches, region, summonerName } = props;

  const renderMatches = () => matches.map((match) => (
    <div key={match.gameId}>
      <MatchContainer
        gameId={match.gameId}
        champion={match.champion}
        region={region}
        summonerName={summonerName}
      />
    </div>
  ));

  return (
    <>
      <div className="champion-grid-header">
        <h3 className="champion-grid-title">Match History</h3>
      </div>
      <div className="match-grid">
        {renderMatches()}

      </div>
    </>
  );
};
