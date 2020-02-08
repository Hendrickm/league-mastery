import React, { Component } from 'react';
import {
  Form, Col, Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const REGIONS = [
  { label: 'BR', value: 'br1' },
  { label: 'RU', value: 'ru' },
  { label: 'KR', value: 'kr' },
  { label: 'OCE', value: 'oc1' },
  { label: 'JP', value: 'jp1' },
  { label: 'NA', value: 'na1' },
  { label: 'EUN', value: 'eun1' },
  { label: 'EUW', value: 'euw2' },
  { label: 'TUR', value: 'tr1' },
  { label: 'LAN', value: 'la1' },
  { label: 'LAS', value: 'la2' },
];

interface State {
  summonerName: string,
  region: string
}

interface Props {
  handleClickSearch?: (state: State) => void;
}

export default class InputSearch extends Component<Props, State> {
  initialState = {
    summonerName: undefined,
    region: 'br1',
  }

  constructor(props: Props) {
    super(props);
    this.state = {
      summonerName: 'HendrikStark',
      region: 'br1',
    };
  }

  renderOptions = () => REGIONS.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)

  handleChangeSummoner = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ summonerName: e.target.value });
  }

  handleChangeRegion = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ region: e.target.value });
  }

  handleClickSearch = () => {
    // const { summonerName, region } = this.state;
    // const url = `${API_PROXY}https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`;
    // axios.get(url).then((res) => console.log(res.data));
  }

  render() {
    const { summonerName, region } = this.state;
    return (
      <Form>
        <Form.Row>
          <Col lg={8}>
            <Form.Control
              placeholder="Summoner's name"
              value={summonerName}
              onChange={this.handleChangeSummoner}
            />
          </Col>

          <Col lg={3}>
            <Form.Control as="select" value={region} onChange={this.handleChangeRegion}>
              {this.renderOptions()}
            </Form.Control>
          </Col>

          <Col lg={1}>
            <Link to={`/profile/${region}/${summonerName}`}>
              <Button variant="primary">
                <i className="fa fa-search" />
              </Button>
            </Link>
          </Col>
        </Form.Row>
      </Form>

    );
  }
}
