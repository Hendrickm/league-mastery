import React, { Component, ChangeEvent } from 'react';
import axios from 'axios';

import './profile.css';
import { API_PROXY } from '../env/enviroments';
import { getChampionName } from '../utils/utils';
import { Champion } from '../utils/types';

import Header from './header';
import ChampionList from './championList';

interface Props {
  summonerName: string,
  region: string
}

interface State {
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
      name: '',
      profileIconId: 0,
      summonerLevel: 0,
      id: '',
      championList: [],
    };
  }


  componentDidMount() {
    this.getSummoner();
  }

  componentDidUpdate(prevProps: Props) {
    const { summonerName, region } = this.props;
    if (summonerName !== prevProps.summonerName
        || region !== prevProps.region) {
      this.getSummoner();
    }
  }

  getSummoner() {
    const { summonerName, region } = this.props;
    const params = { summonerName, region };
    const url = `${API_PROXY}/summoners/by-name`;
    axios.get(url, { params }).then((res) => {
      this.setState({ ...res.data });
      this.getChampionsMastery();
    }).catch((error) => {
      console.log(error);
    });
  }

  getChampionsMastery() {
    const { region } = this.props;
    const { id } = this.state;
    const params = { region, id };
    const url = `${API_PROXY}/champion-mastery/by-summoner`;

    axios.get(url, { params }).then((res) => {
      this.setState({ championList: res.data });
    }).catch((error) => {
      console.log(error);
    });
  }

  handleSelectSort = (e: ChangeEvent<HTMLInputElement>) => {
    const sort: string = e.target.value;
    const { championList } = this.state;
    let sortedChampionList = [];
    if (sort === 'name') {
      sortedChampionList = championList.sort((a, b) => (
        getChampionName(a.championId).localeCompare(getChampionName(b.championId))));
    } else {
      sortedChampionList = championList
        .sort((a, b) => ((a[sort] > b[sort]) ? -1 : 1));
    }
    this.setState({ championList: sortedChampionList });
  }

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
