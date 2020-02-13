import React from 'react';

interface Props {
  itemId?: number
}

export default (props: Props) => {
  const { itemId } = props;
  return (
    <div>
      { itemId
        ? (
          <img
            className="item-icon"
            src={`http://ddragon.leagueoflegends.com/cdn/10.3.1/img/item/${itemId}.png`}
            alt="icone"
          />
        )
        : (
          <div className="empty-icon" />
        ) }

    </div>
  );
};
