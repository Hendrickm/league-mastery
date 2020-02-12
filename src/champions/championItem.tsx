import React from 'react';

import { getChampionName } from '../utils/utils';
import ChampionIcon from '../shared/championIcon';
import { Champion } from '../utils/types';
import ChampionBanner from './championBanner';

interface Props {
  champion: Champion;
}

export default (props: Props) => {
  const { champion: { championId, championPoints, championLevel } } = props;


  return (
    <div key={championId} className="champion-container">
      <div className="champion">
        <div className="champion-name">{getChampionName(championId)}</div>
        <ChampionIcon championId={championId} />
        <div className="champion-name">{championPoints}</div>
      </div>
      <ChampionBanner championLevel={championLevel} />
    </div>
  );
};
