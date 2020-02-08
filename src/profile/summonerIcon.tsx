import React from 'react';

interface Props {
  profileIconId: number,
  summonerLevel: number,
}

export default (props: Props) => {
  const { profileIconId, summonerLevel } = props;

  const getProfileIcon = () => (
    <img
      className="summoner-icon"
      src={`http://ddragon.leagueoflegends.com/cdn/10.3.1/img/profileicon/${profileIconId}.png`}
      alt="icone"
    />
  );

  return (

    <div className="summoner-icon-container">
      {getProfileIcon()}
      <div className="summoner-level">{summonerLevel}</div>
    </div>
  );
};
