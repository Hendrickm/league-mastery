import React from 'react';

import SpellIcon from '../shared/spellIcon';

interface Props {
  spell1Id?: number;
  spell2Id?: number;
}

export default (props: Props) => {
  const { spell1Id, spell2Id } = props;

  return (
    <div className="spell-container">
      <SpellIcon spellId={spell1Id} />
      <SpellIcon spellId={spell2Id} />
    </div>
  );
};
