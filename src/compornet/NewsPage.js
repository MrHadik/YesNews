import React, { useEffect, useState } from 'react'
import Newsbage from './Newsbage'
import Loding from './Loding';
import Error from './Error';
import InfiniteScroll from "react-infinite-scroll-component";

const NewsPage = (props) => {
    const [articles, setarticles] = useState([])
    const [page, setpage] = useState(1)
    const [load, setload] = useState(false)
    const [totalResults, settotalResults] = useState(0)
    const [APILimit, setAPILimit] = useState(false)
    const [msg, setmsg] = useState('false')

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        setpage(page + 1)
        setload(true)
        let url = `https://newsapi.org/v2/top-headlines?category=${props.categ}&country=${props.country}&apiKey=${props.apikey}&pageSize=${props.pagesize}&page=${page}`
        let data = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.102 Safari/537.36', 'origin': 'http://localhost:3000', 'referer': 'http://localhost:3000/', 'accept': '*/*', 'accept-encoding': 'gzip, deflate, br', 'accept-language': 'en-IN,en', 'sec-fetch-site': 'cross-site' } })
        let parseData = await data.json();
        if (parseData.status === 'error') {
            setAPILimit(true)
            setload(false)
            setmsg(parseData.message)
        } else {
            // let parseData = await data.json();      //to convart data in to json formet 
            setarticles(parseData.articles)
            setload(false)
            settotalResults(parseData.totalResults)
        }

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
            {APILimit && <Error msg={msg}/>}
            {load && <Loding />}
            
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Loding />}>
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