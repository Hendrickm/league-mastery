import React from 'react';
import { Container } from 'react-bootstrap';

import { getChampionKey } from '../utils/utils';

import './matches.css';

import { Match } from '../utils/types';

interface Props {
  matches: Array<Match>;
}

export default (props: Props) => {
  const { matches } = props;

  const renderMatches = () => matches.map((match) => (
    <div className="match" key={match.gameId}>
      <img className="champion-icon" src={`http://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/${getChampionKey(match.champion)}.png`} alt={match.champion.toString()} />
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
