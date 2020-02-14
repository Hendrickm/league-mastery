import React, { Component, ChangeEvent } from 'react';
import {
  Form, Col, Button,
} from 'react-bootstrap';
import './inputSearch.css';
import { Link } from 'react-router-dom';

import { REGIONS } from '../utils/data';

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

  handleChangeSummoner = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ summonerName: e.target.value });
  }

  handleChangeRegion = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ region: e.target.value });
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
