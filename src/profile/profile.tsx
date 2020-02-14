import React, { Component, ChangeEvent } from 'react';
import axios from 'axios';
import { Tabs, Tab } from 'react-bootstrap';

import './profile.css';
import { API_PROXY } from '../env/enviroments';
import { getChampionName } from '../utils/utils';
import { Champion, Match } from '../utils/types';

import Header from './header';
import ChampionMastery from '../championMastery/championMastery';
import MatchHistory from '../matchHistory/matchHistory';

interface Props {
  summonerName: string,
  region: string
}

interface State {
  name: string,
  profileIconId: number,
  summonerLevel: number,
  id: string,
  accountId: string,
  champions: Array<Champion>;
  matches: Array<Match>;
  beginIndex: number;
  endIndex: number;

}

export default class Profile extends Component<Props, State> {
  initialState: State = {
    name: '',
    profileIconId: 0,
    summonerLevel: 0,
    id: '',
    accountId: '',
    champions: [],
    matches: [],
    beginIndex: 0,
    endIndex: 10,
  };

  constructor(props: Props) {
    super(props);
    this.state = { ...this.initialState };
  }


  componentDidMount() {
    this.getSummoner();
  }

  componentDidUpdate(prevProps: Props) {
    const { summonerName, region } = this.props;
    if (summonerName !== prevProps.summonerName
        || region !== prevProps.region) {
      this.restartState();
    }
  }

  getSummoner() {
    const { summonerName, region } = this.props;
    const params = { summonerName, region };
    const url = `${API_PROXY}/summoners/by-name`;
    axios.get(url, { params }).then((res) => {
      this.setState({ ...res.data, matches: [] });
      this.getChampionsMastery();
      this.getMatches();
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
      this.setState({ champions: res.data });
    }).catch((error) => {
      console.log(error);
    });
  }

  getMatches() {
    const { region } = this.props;
    const {
      accountId, beginIndex, endIndex, matches,
    } = this.state;
    const params = {
      region, accountId, beginIndex, endIndex,
    };
    const url = `${API_PROXY}/matchlists/by-account`;

    axios.get(url, { params }).then((res) => {
      this.setState({ matches: matches.concat(res.data.matches) });
    }).catch((error) => {
      console.log(error);
    });
  }

  handleSelectSort = (e: ChangeEvent<HTMLInputElement>) => {
    const sort: string = e.target.value;
    const { champions } = this.state;
    let sortedChampionList = [];
    if (sort === 'name') {
      sortedChampionList = champions.sort((a, b) => (
        getChampionName(a.championId).localeCompare(getChampionName(b.championId))));
    } else {
      sortedChampionList = champions
        .sort((a, b) => ((a[sort] > b[sort]) ? -1 : 1));
    }
    this.setState({ champions: sortedChampionList });
  }

  handleLoadNewPage = () => {
    const { beginIndex, endIndex } = this.state;
    this.setState({ beginIndex: beginIndex + 10, endIndex: endIndex + 10 },
      () => this.getMatches());
  }

  restartState() {
    this.setState({ ...this.initialState }, () => this.getSummoner());
    this.getSummoner();
  }


  render() {
    const { region, summonerName } = this.props;
    const {
      profileIconId, name, summonerLevel, champions, matches,
    } = this.state;
    return (
      <div>
        <Header
          profileIconId={profileIconId}
          name={name}
          summonerLevel={summonerLevel}
        />
        <Tabs defaultActiveKey="matches" id="uncontrolled-tab-example">
          <Tab eventKey="matches" title="Match History">
            <MatchHistory
              matches={matches}
              region={region}
              summonerName={summonerName}
              handleLoadNewPage={this.handleLoadNewPage}
            />
          </Tab>
          <Tab eventKey="champions" title="Champions">
            <ChampionMastery
              champions={champions}
              handleSelectSort={this.handleSelectSort}
            />
          </Tab>
        </Tabs>

      </div>
    );
  }
}
