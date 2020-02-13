import React, { Component } from 'react';
import axios from 'axios';

import { Match } from '../utils/types';

import { API_PROXY } from '../env/enviroments';

import ChampionIcon from '../shared/championIcon';
import MatchSpells from './matchSpells';
import MatchItens from './matchItens';

interface Props {
  gameId: number;
  champion: number;
  region: string;
  summonerName: string;
}

interface State {
  match?: Match;
}

export default class MatchItem extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      match: undefined,
    };
  }

  componentDidMount() {
    const { region, gameId } = this.props;
    const params = { region, gameId };
    const url = `${API_PROXY}/matches`;

    axios.get(url, { params }).then((res) => {
      this.setState({ match: res.data });
    }).catch((error) => {
      console.log(error);
    });
  }

  getParticipant = (summonerName: string, match: Match) => {
    const participantId = match.participantIdentities.find(
      (partIdent) => partIdent.player.summonerName.toLowerCase() === summonerName.toLowerCase(),
    )?.participantId;
    return match.participants.find((part) => part.participantId === participantId);
  }

  render() {
    const { champion, summonerName } = this.props;
    const { match } = this.state;
    if (match) {
      const participant = this.getParticipant(summonerName, match);
      return (
        <div className="match">
          <ChampionIcon championId={champion} />
          <MatchSpells
            spell1Id={participant?.spell1Id}
            spell2Id={participant?.spell2Id}
          />
          <MatchItens
            item0={participant?.stats.item0}
            item1={participant?.stats.item1}
            item2={participant?.stats.item2}
            item3={participant?.stats.item3}
            item4={participant?.stats.item4}
            item5={participant?.stats.item5}
            item6={participant?.stats.item6}
          />
        </div>
      );
    }
    return (
      <div className="match">
        <ChampionIcon championId={champion} />
      </div>
    );
  }
}
