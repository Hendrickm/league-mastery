import React from 'react';

import { getChampionKey, getChampionName } from '../utils/utils';
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
        <img className="champion-icon" src={`http://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/${getChampionKey(championId)}.png`} alt={championId.toString()} />
        <div className="champion-name">{championPoints}</div>
      </div>
      <ChampionBanner championLevel={championLevel} />
    </div>
  );
};
