import React, { useState,useEffect } from 'react'
import News from './news'
import GIF from './gif.js';
import propTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
// import Country from './country';

const NewsItem = (props)=> {
   const apiKey=process.env.REACT_APP_NEWS_API;
   const [loading, setloading] = useState(true);
   const [totalResults, settotalResults] = useState(0);
   const [articles, setarticles] = useState([]);
   const [page, setpage] = useState(1);
   // const [countries, setcountries] = useState('ar');
console.log("country in newsitem", props.country);

   const updateNews=async()=> {
      let url =  `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
      setloading(true);
      let data = await fetch(url);
      let parcedData = await data.json();
      setarticles(parcedData.articles);
      settotalResults(parcedData.totalResults);
      // setcountries(props.country);
      setloading(false);
   }

   useEffect(() => {
      document.title=`NewsMonkey -${props.category}`;
      updateNews();
      console.log(props.country);
   }, [props.country,props.category])  // u have to pass dependenties (i.e is we have to mention when we want to perticularly run this useeffect command).


   // const componentDidMount=async ()=> {    //this is used in class based componenet whereas its replacement be like....
   //    this.updateNews();
   // }


   // handleOnClickP = async () => {
   //    this.setState({ page: this.state.page - 1 });
   //    this.updateNews();
   // }

   // handleOnClickN = async () => {
   //    this.setState({ page: this.state.page + 1 });
   //    this.updateNews();
   // }

  const fetchMoreData = async () => {
      setpage(page+1);
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
      let data = await fetch(url);
      let parcedData = await data.json();
      setarticles(articles.concat(parcedData.articles));
      settotalResults(parcedData.totalResults);
      // setcountries(props.country);

   };

      return (
         <>
            <h1 className='text-center'>NewsMonkey - Top HeadLines</h1>
            {loading && <GIF />}
            <InfiniteScroll
               dataLength={articles.length}
               next={fetchMoreData}
               hasMore={articles.length !== totalResults}
               loader={<GIF />} >

               <div className='container'>
                  <div className='row ' >
                     {articles.map((element) => {
                        return <div className='col-md-4 my-4' key={element.url} >
                           <News title={element.title ? element.title.slice(0, 45).length === 45 ? element.title.slice(0, 45) + ('.. ') : element.title + (' ... ') + (' '.repeat(45 - element.title.slice(0, 45).length)) : ' '} description={element.description ? element.description.slice(0, 88).length === 88 ? element.description.slice(0, 88) + (' ... ') : element.description + (' ... ') + (' .'.repeat(88 - element.description.slice(0, 88).length)) : ' '} imageUrl={element.urlToImage?element.urlToImage:'https://images.moneycontrol.com/static-mcnews/2021/03/Air-conditioner-770x433.jpg'} NewsUrl={element.url} date={element.publishedAt} />
                        </div>
                     })}
                  </div>
               </div>
            </InfiniteScroll>
         </>
      )
   }

NewsItem.defaultProps = {
   country: 'in',
   pageSize: 6,
   category: 'general'
}
NewsItem.propTypes = {
   country: propTypes.string,
   pageSize: propTypes.number,
   category: propTypes.string
}

export default NewsItem;