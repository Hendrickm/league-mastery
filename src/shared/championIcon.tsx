import React from 'react';
import { getChampionKey } from '../utils/utils';


interface Props {
  championId: number
}

export default (props: Props) => {
  const { championId } = props;

  return (
    <img
      className="champion-icon"
      src={`http://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/${getChampionKey(championId)}.png`}
      alt={championId.toString()}
    />
  );
};
