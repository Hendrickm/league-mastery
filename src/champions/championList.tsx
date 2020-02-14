import React, { ChangeEvent } from 'react';
import { Container } from 'react-bootstrap';

import './champions.css';

import ChampionItem from './championItem';
import SelectSort from '../shared/selectSort';

import { Champion } from '../utils/types';

interface Props {
  champions: Array<Champion>
  handleSelectSort: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default (props: Props) => {
  const { champions, handleSelectSort } = props;

  const renderChampions = () => champions.map((champion) => (
    <ChampionItem key={champion.championId} champion={champion} />
  ));

  return (
    <Container>
      <div className="champion-grid-header">
        <h3 className="champion-grid-title">Champion masteries</h3>
        <SelectSort handleSelectSort={handleSelectSort} />
      </div>
      <div className="champion-grid ">
        {renderChampions()}
      </div>
    </Container>
  );
};
