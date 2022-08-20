import './App.css';
import React, { Component } from 'react'
import NevBar from './compornet/NevBar';
import NewsPage from './compornet/NewsPage';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";

export default class App extends Component {
  render() {
   
    const data ={
      key: 'a02dfc2ab6584347a08d36cb4c05322f',
      country: 'us'
    }
    return (
      <div>
        
        <Router>
        <NevBar />
          <Routes>
            <Route exact  path="/" element={<NewsPage pagesize={12} key='/' categ={'general'} country={data.country} apikey={data.key}/>} />
            <Route exact  path="/business" element={<NewsPage key='business' pagesize={12} categ={'business'} country={data.country} apikey={data.key}/>} />
            <Route exact  path="/entertainment" element={<NewsPage key='entertainment' pagesize={12} categ={'entertainment'} country={data.country} apikey={data.key}/>} />
            <Route exact  path="/health" element={<NewsPage key='health' pagesize={12} categ={'health'} country={data.country} apikey={data.key}/>} />
            <Route exact  path="/science" element={<NewsPage key='science' pagesize={12} categ={'science'} country={data.country} apikey={data.key}/>} />
            <Route exact  path="/sports" element={<NewsPage key='sports' pagesize={12} categ={'sports'} country={data.country} apikey={data.key}/>} />
            <Route exact  path="/technology" element={<NewsPage key='technology' pagesize={12} categ={'technology'} country={data.country} apikey={data.key}/>} />
            </Routes>
        </Router>
      </div>
    )
  }
}

