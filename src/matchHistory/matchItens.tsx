import React from 'react';
import { Stats } from '../utils/types';
import ItemIcon from './itemIcon';

interface Props {
  stats: Stats
}

export default (props: Props) => {
  const {
    stats: {
      item0, item1, item2, item3, item4, item5, item6,
    },
  } = props;

  return (
    <div className="itens-container">
      <ItemIcon itemId={item0} />
      <ItemIcon itemId={item1} />
      <ItemIcon itemId={item2} />
      <ItemIcon itemId={item3} />
      <ItemIcon itemId={item4} />
      <ItemIcon itemId={item5} />
      <ItemIcon itemId={item6} />
    </div>
  );
};
