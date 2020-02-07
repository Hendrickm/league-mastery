import React, { Component } from 'react'
import { Form, Col, Button } from 'react-bootstrap'

const REGIONS = [
  'BR', 'EUW', 'EUNE', 'JP', 'KR', 'LAN', 'LAS', 'NA', 'OCE', 'RU', 'TR'
];
export default class InputSearch extends Component {

  initialState = {
    summonerName: undefined,
    region: 'BR'
  }

  constructor(props) {
    super(props)
    this.state = {
      summonerName: 'HendrikStark',
      region: 'BR'
    }
  }

  renderOptions = () => {
    return REGIONS.map(r =>
      <option key={r} value={r} >{r}</option>
    );
  }

  handleChangeSummoner = e => {
    this.setState({ ...this.state, summonerName: e.target.value })
  }

  handleChangeRegion = e => {
    this.setState({ ...this.state, region: e.target.value })
  }

  render() {
    return (
      <Form lg={6}>
        <Form.Row>
          <Col lg={8}>
            <Form.Control placeholder="Summoner's name" value={this.state.summonerName}
              onChange={this.handleChangeSummoner} />
          </Col>

          <Col lg={3}>
            <Form.Control as="select" onChange={this.handleChangeRegion}>
              {this.renderOptions()}
            </Form.Control>
          </Col>

          <Col lg={1}>
            <Button variant="primary" onClick={() => this.props.handleClickSearch(this.state)}>
              <i className={'fa fa-search'}></i>
            </Button>
          </Col>
        </Form.Row>
      </Form>

    )
  }
}