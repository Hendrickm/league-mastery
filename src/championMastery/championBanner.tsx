import React from 'react';

import banner1 from '../assets/banner_1.png';
import banner2 from '../assets/banner_2.png';
import banner3 from '../assets/banner_3.png';
import banner4 from '../assets/banner_4.png';
import banner5 from '../assets/banner_5.png';
import banner6 from '../assets/banner_6.png';
import banner7 from '../assets/banner_7.png';

interface Props {
  championLevel: number
}

export default (props: Props) => {
  const { championLevel } = props;

  const getChampionBanner = () => {
    switch (championLevel) {
      case 1: return banner1;
      case 2: return banner2;
      case 3: return banner3;
      case 4: return banner4;
      case 5: return banner5;
      case 6: return banner6;
      case 7: return banner7;
      default: return '';
    }
  };

  return (
    <img className="champion-banner" src={getChampionBanner()} alt="banner" />
  );
};
