import React from 'react';

import ItemIcon from '../shared/itemIcon';

interface Props {
  item0?: number;
  item1?: number;
  item2?: number;
  item3?: number;
  item4?: number;
  item5?: number;
  item6?: number;
}

export default (props: Props) => {
  const {
    item0, item1, item2, item3, item4, item5, item6,
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
