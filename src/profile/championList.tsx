import React, { ChangeEvent } from 'react';
import { Container } from 'react-bootstrap';
import ChampionIcon from './championIcon';
import SelectSort from '../components/selectSort';

import { Champion } from '../utils/types';

interface Props {
  championList: Array<Champion>
  handleSelectSort: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default (props: Props) => {
  const { championList, handleSelectSort } = props;

  const renderChampions = () => championList.map((champion) => (
    <ChampionIcon key={champion.championId} champion={champion} />
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
