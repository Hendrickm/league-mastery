import React, { Component, ChangeEvent } from 'react';
import axios from 'axios';
import ChampionList from './championList';

import './profile.css';
import { Champion } from '../utils/types';

import { CHAMPION_NAMES } from '../assets/data';
import { API_PROXY } from '../env/enviroments';

import Header from './header';

interface Props {
  summonerName: string,
  region: string
}

interface State {
  summonerName: string,
  region: string
  name: string,
  profileIconId: number,
  summonerLevel: number,
  id: string,
  championList: Array<Champion>;
}

export default class Profile extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      ...props,
      name: '',
      profileIconId: 0,
      summonerLevel: 0,
      id: '',
      championList: [],
    };
  }

  componentDidMount() {
    const { summonerName, region } = this.state;
    const params = { summonerName, region };
    const url = `${API_PROXY}/summoners/by-name`;
    axios.get(url, { params }).then((res) => {
      this.setState({ ...res.data });
      this.getChampionsMastery();
    });
  }

  getChampionsMastery = () => {
    const { region, id } = this.state;
    const params = { region, id };
    const url = `${API_PROXY}/champion-mastery/by-summoner`;

    axios.get(url, { params }).then((res) => {
      this.setState({ championList: res.data });
    });
  }

  handleSelectSort = (e: ChangeEvent<HTMLInputElement>) => {
    const sort: string = e.target.value;
    const { championList } = this.state;
    let sortedChampionList = [];
    if (sort === 'name') {
      sortedChampionList = championList.sort((a, b) => (
        this.getChampionName(a.championId).localeCompare(this.getChampionName(b.championId))));
    } else {
      sortedChampionList = championList
        .sort((a, b) => ((a[sort] > b[sort]) ? -1 : 1));
    }
    this.setState({ championList: sortedChampionList });
  }

  getChampionName = (championId: number) => CHAMPION_NAMES.find((c) => c.id === championId)?.name || '' ;

  render() {
    const {
      profileIconId, name, summonerLevel, championList,
    } = this.state;
    return (
      <div>
        <Header
          profileIconId={profileIconId}
          name={name}
          summonerLevel={summonerLevel}
        />
        <ChampionList championList={championList} handleSelectSort={this.handleSelectSort} />

      </div>
    );
  }
}
