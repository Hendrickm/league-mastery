import React, { Component } from 'react';
import axios from 'axios';

import { Match } from '../utils/types';

import { API_PROXY } from '../env/enviroments';

import ChampionIcon from '../shared/championIcon';
import MatchSpells from './matchSpells';
import MatchItens from './matchItens';
import MatchStats from './matchStats';
import MatchTime from './matchTime';

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
      if (participant) {
        const { stats } = participant;
        const { mapId, gameDuration, gameCreation } = match;
        return (
          <div className={`match ${stats.win ? 'border-win' : 'border-lose'}`}>
            <div className="champion-spells">
              <ChampionIcon championId={champion} />
              <MatchSpells
                spell1Id={participant.spell1Id}
                spell2Id={participant.spell2Id}
              />
            </div>
            <MatchStats stats={stats} />
            <MatchItens stats={stats} />
            <MatchTime mapId={mapId} gameDuration={gameDuration} gameCreation={gameCreation} />
          </div>
        );
      }
    }
    return (
      <div className="match" />
    );
  }
}
