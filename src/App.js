import './App.css';
import React from 'react'
import NevBar from './compornet/NevBar';
import NewsPage from './compornet/NewsPage';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const App = ()=> {
    const data ={
      key: 'a02dfc2ab6584347a08d36cb4c05322f',
      country: 'in',
      pagesize: 9
    }
    return (
      <div>
        <Router>
        <NevBar />
          <Routes>
            <Route exact  path="/" element={<NewsPage pagesize={data.pagesize} key='general' categ={'general'} country={data.country} apikey={data.key}/>} />
            <Route exact  path="/business" element={<NewsPage key='business' pagesize={data.pagesize} categ={'business'} country={data.country} apikey={data.key}/>} />
            <Route exact  path="/entertainment" element={<NewsPage key='entertainment' pagesize={data.pagesize} categ={'entertainment'} country={data.country} apikey={data.key}/>} />
            <Route exact  path="/health" element={<NewsPage key='health' pagesize={data.pagesize} categ={'health'} country={data.country} apikey={data.key}/>} />
            <Route exact  path="/science" element={<NewsPage key='science' pagesize={data.pagesize} categ={'science'} country={data.country} apikey={data.key}/>} />
            <Route exact  path="/sports" element={<NewsPage key='sports' pagesize={data.pagesize} categ={'sports'} country={data.country} apikey={data.key}/>} />
            <Route exact  path="/technology" element={<NewsPage key='technology' pagesize={data.pagesize} categ={'technology'} country={data.country} apikey={data.key}/>} />
            </Routes>
        </Router>
      </div>
    )
 
}

export default App