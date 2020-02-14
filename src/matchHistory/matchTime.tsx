import React from 'react';
import moment from 'moment';

import { getMapName } from '../utils/utils';


interface Props {
  mapId: number;
  gameDuration: number;
  gameCreation: number;
}

export default (props: Props) => {
  const { mapId, gameDuration, gameCreation } = props;

  const formattedGameDuration = (): string => moment().startOf('day')
    .seconds(gameDuration)
    .format('mm:ss');

  const formattedGameCreation = (): string => moment(gameCreation).format('DD/MM/YYYY');
  return (

    <div className="match-container-text">
      <span>{getMapName(mapId)}</span>
      <span>{formattedGameDuration()}</span>
      <span>{formattedGameCreation()}</span>
    </div>
  );
};
