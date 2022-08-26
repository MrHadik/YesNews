import React, { Component } from 'react'
import Newsbage from './Newsbage'
import Loding from './Loding';
import InfiniteScroll from "react-infinite-scroll-component";

export default class NewsPage extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],       //for news 
            page: 1,            //pagenumber to get news next page  
            load: false,          //For loading image  // if loading true is show  and false it hide
            totalResults: 0
        }
    }

    async componentDidMount() {
                  //loading gif show and waait for load loading 
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.categ}&country=${this.props.country}&apiKey=${this.props.apikey}&pageSize=${this.props.pagesize}&page=${this.state.page}`
        let data = await fetch(url);            //get data from Url
        let parseData = await data.json();      //to convart data in to json formet 
        this.setState({                         //update data 
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            // page: this.state.page + 1
        });
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.categ}&country=${this.props.country}&apiKey=${this.props.apikey}&pageSize=${this.props.pagesize}&page=${this.state.page}`
        let data = await fetch(url);            //get data from Url
        let parseData = await data.json();      //to convart data in to json formet 
        this.setState({                         //update data 
            articles: this.state.articles.concat(parseData.articles),
            totalResults: parseData.totalResults,
            load: false
        });
    };

    render() {
        return (
            <>
                <button type="button" disabled="True" className="btn mx-3 btn-secondary">Total News: {this.state.totalResults}</button>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles !== this.state.totalResults}
                    loader={<Loding />}>
                    <div className='container my-3'>
                        <div className='row'>
                            {this.state.articles !== undefined && this.state.articles.map(element => {
                                return <div className='col-md-4' key={element.url}>
                                    <Newsbage title={element.title} author={element.author ? element.author : "Unkowe"} pdate={element.publishedAt} url={element.url} imgURL={element.urlToImage} dipriptin={element.description} />
                                </div>
                            })}
                        </div></div>
                </InfiniteScroll >
            </>
        )
    }
}

