import React from 'react';
import { Container, Button } from 'react-bootstrap';

import './matchHistory.css';

import MatchContainer from './matchContainer';
import { Match } from '../utils/types';

interface Props {
  matches: Array<Match>;
  region: string;
  summonerName: string;
  handleLoadNewPage: () => void;
}

export default (props: Props) => {
  const {
    matches, region, summonerName, handleLoadNewPage,
  } = props;

  const renderMatches = () => matches.map((match, index) => (
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
    <Container>
      <div className="champion-grid-header">
        <h3 className="champion-grid-title">Match History</h3>
      </div>
      <div className="match-grid">
        {renderMatches()}
        <Button variant="primary" onClick={handleLoadNewPage}>Carregar mais</Button>
      </div>
    </Container>
  );
};
