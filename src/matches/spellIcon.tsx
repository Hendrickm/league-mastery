import React from 'react';

import { getSummonerSpellKey } from '../utils/utils';

interface Props {
  spellId?: number
}

export default (props: Props) => {
  const { spellId } = props;

  return (
    <img
      className="spell-icon"
      src={`http://ddragon.leagueoflegends.com/cdn/10.3.1/img/spell/${getSummonerSpellKey(spellId || 0)}.png`}
      alt="icone"
    />
  );
};
