import React, { useEffect, useState } from 'react'
import Newsbage from './Newsbage'
import Loding from './Loding';
import InfiniteScroll from "react-infinite-scroll-component";

const NewsPage = (props) => {
    const [articles, setarticles] = useState([])
    const [page, setpage] = useState(1)
    const [load, setload] = useState(false)
    const [totalResults, settotalResults] = useState(0)

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async () => {
        setpage(page + 1)
        setload(true)
        let url = `https://newsapi.org/v2/top-headlines?category=${props.categ}&country=${props.country}&apiKey=${props.apikey}&pageSize=${props.pagesize}&page=${page}`
        let data = await fetch(url);            //get data from Url
        let parseData = await data.json();      //to convart data in to json formet 
        setarticles(parseData.articles)
        setload(false)
        settotalResults(parseData.totalResults)
    }

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?category=${props.categ}&country=${props.country}&apiKey=${props.apikey}&pageSize=${props.pagesize}&page=${page}`
        let data = await fetch(url);            //get data from Url
        let parseData = await data.json();      //to convart data in to json formet 
        setarticles(articles.concat(parseData.articles))
        settotalResults(parseData.totalResults)
        setload(false)
        setpage(page + 1)

    };

    return (
        <>
            <div className='container mt-5 my-3 '>
                <button type="button" disabled="True" className="btn mt-4 btn-secondary">Total News: {totalResults}</button>
            </div>

            {load && <Loding />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Loding/>}>
                <div className='container mb-3'>
                    <div className='row'>
                        {articles !== undefined && articles.map(element => {
                            return <div className='col-md-4' key={element.url}>
                                <Newsbage title={element.title} author={element.author ? element.author : "Unkowe"} pdate={element.publishedAt} url={element.url} imgURL={element.urlToImage} dipriptin={element.description} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll >
        </>
    )

}

export default NewsPage