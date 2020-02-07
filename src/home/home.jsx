import React, { Component } from 'react'

import './home.css'
import InputSearch from '../components/inputSearch'


export default class Home extends Component {


  handleClickSearch = search => {
    console.log(search);
  }
  
  render() {
    return (
      <div className="input-search"> 
        <h1>League Mastery</h1>
        <InputSearch handleClickSearch={this.handleClickSearch} />
      </div>
    )
  }
}