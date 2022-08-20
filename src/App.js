import './App.css';
import React, { Component } from 'react'
import NevBar from './compornet/NevBar';
import NewsPage from './compornet/NewsPage';

export default class App extends Component {
  render() {
    return (
      <div>
        <NevBar/>
        <NewsPage pagesize={12} apikey={'25e0c07e1d22488abae8640dd274f3e9'}/>
      </div>
    )
  }
}

