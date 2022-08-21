import React, { Component } from 'react'
import Newsbage from './Newsbage'
import Loding from './Loding';
export default class NewsPage extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],       //for news 
            page: 1,            //pagenumber to get news next page  
            load: true          //For loading image  // if loading true is show  and false it hide
        }
    }

    // async updatenews (){
    //     this.setState({ load: true })
    //     let url = `https://newsapi.org/v2/top-headlines?category=${this.props.categ}&country=${this.props.country}&apiKey=${this.props.apikey}&pageSize=${this.props.pagesize}&page=${this.state.page}`
    //     let data = await fetch(url);
    //     let parseData = await data.json();
    //     this.setState({
    //         articles: parseData.articles,
    //         totalResults: parseData.totalResults,
    //         load: false
    //     });

    // }

    async componentDidMount() {
        this.setState({ load: true })           //loading gif show and waait for load loading 
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.categ}&country=${this.props.country}&apiKey=${this.props.apikey}&pageSize=${this.props.pagesize}&page=${this.state.page}`
        let data = await fetch(url);            //get data from Url
        let parseData = await data.json();      //to convart data in to json formet 
        this.setState({                         //update data 
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            load: false
        });
    }

    handelprives = async () => {
        this.setState({ load: true })
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.categ}&country=${this.props.country}&apiKey=${this.props.apikey}&pageSize=${this.props.pagesize}&page=${this.state.page - 1}`
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles: parseData.articles,
            page: this.state.page - 1,
            load: false
        })
        // this.setState({page: this.state.page - 1})
        // this.updatenews();
    }


    handelnext = async () => {
        if (this.state.page + 1 <= Math.ceil(this.state.totalResults / this.props.pagesize)) {
            this.setState({ load: true })
            let url = `https://newsapi.org/v2/top-headlines?category=${this.props.categ}&country=${this.props.country}&apiKey=${this.props.apikey}&pageSize=${this.props.pagesize}&page=${this.state.page + 1}`
            let data = await fetch(url);
            let parseData = await data.json();
            this.setState({
                articles: parseData.articles,
                page: this.state.page + 1,
                load: false
            })
            // this.setState({page: this.state.page + 1})
            // this.updatenews();
        }
    }
    render() {
        return (
            <div className='container my-3'>
                {this.state.load && <Loding />}             {/* both is true then it show*/ }
                <div className='row'>
                    {this.state.articles !== undefined && !this.state.load && this.state.articles.map(element => {    {/* for ech news to get acces */}
                        return <div className='col-md-4' key={element.url}>
                            <Newsbage title={element.title} author={element.author ? element.author : "Unkowe"} pdate={element.publishedAt} url={element.url} imgURL={element.urlToImage} dipriptin={element.description} />
                        </div>
                    })}
                </div>
              
                <div className="btn-toolbar d-flex justify-content-center" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" disabled={this.state.page <= 1} onClick={this.handelprives} className="btn btn-primary">&larr; Prives</button>
                        <button type="button" disabled="True" className="btn btn-light">{this.state.page}</button>
                        <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} onClick={this.handelnext} className="btn btn-primary">Next  &rarr;</button>
                    </div>
                    <div className="btn-group" role="group" aria-label="Second group">
                        <button type="button" disabled="True" className="btn mx-3 btn-secondary">Total News: {this.state.totalResults}</button>
                    </div>
                </div>
             
            </div>
        )
    }
}

