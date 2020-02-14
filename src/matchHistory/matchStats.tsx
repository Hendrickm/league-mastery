import React from 'react';


import goldIcon from '../assets/gold.png';
import minionIcon from '../assets/minions.png';
import { Stats } from '../utils/types';

interface Props {
  stats: Stats
}

export default (props: Props) => {
  const {
    stats: {
      kills, deaths, assists, goldEarned, totalMinionsKilled, neutralMinionsKilled,
    },
  } = props;
  return (

    <>
      <div className="match-container-text">
        <span className="kda">
          {`${kills}/${deaths}/${assists}`}
        </span>
        <span>
          { deaths > 0
            ? `${((kills + assists) / deaths).toFixed(2)} KDA`
            : 'Perfect'}
        </span>
      </div>
      <div className="match-container-text">
        <span>
          {`${goldEarned.toLocaleString()}`}
          <img className="champion-banner" src={goldIcon} alt="banner" />
        </span>
        <span>
          {`${totalMinionsKilled + neutralMinionsKilled}`}
          <img className="champion-banner" src={minionIcon} alt="banner" />
        </span>
      </div>
    </>
  );
};
