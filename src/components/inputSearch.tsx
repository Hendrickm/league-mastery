import React, { Component } from 'react';
import {
  Form, Col, Button,
} from 'react-bootstrap';

const REGIONS: string[] = [
  'BR', 'EUW', 'EUNE', 'JP', 'KR', 'LAN', 'LAS', 'NA', 'OCE', 'RU', 'TR',
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
    region: 'BR',
  }

  constructor(props: Props) {
    super(props);
    this.state = {
      summonerName: 'HendrikStark',
      region: 'BR',
    };
  }

  renderOptions = () => REGIONS.map((r) => <option key={r} value={r}>{r}</option>)

  handleChangeSummoner = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ summonerName: e.target.value });
  }

  handleChangeRegion = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ region: e.target.value });
  }

  handleClickSearch = () => {
    console.log(this.state);
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
            <Button variant="primary" onClick={() => this.handleClickSearch}>
              <i className="fa fa-search" />
            </Button>
          </Col>
        </Form.Row>
      </Form>

    );
  }
}
