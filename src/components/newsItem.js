import React, { Component } from 'react'
import News from './news'
import GIF from './gif.js';
import propTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default class NewsItem extends Component {

   static defaultProps = {
      country: 'in',
      pageSize: 6,
      category: 'general'
   }
   static propTypes = {
      country: propTypes.string,
      pageSize: propTypes.number,
      category: propTypes.string
   }

   constructor() {
      super();
      this.state = {
         articles: [],
         loading: false,
         page: 1,
         totalResults: 0
      }
   }

   async updateNews() {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=78f5ef15feff442399f5df90f84d8895&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parcedData = await data.json();
      this.setState({
         articles: parcedData.articles,
         totalResults: parcedData.totalResults,
         loading: false
      })
   }

   async componentDidMount() {
      this.updateNews();
   }

   // handleOnClickP = async () => {
   //    this.setState({ page: this.state.page - 1 });
   //    this.updateNews();
   // }

   // handleOnClickN = async () => {
   //    this.setState({ page: this.state.page + 1 });
   //    this.updateNews();
   // }

   fetchMoreData = async () => {
      this.setState({
         page: this.state.page + 1
      })
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=78f5ef15feff442399f5df90f84d8895&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parcedData = await data.json();
      this.setState({
         articles: this.state.articles.concat(parcedData.articles),
         totalResults: parcedData.totalResults,
      })
   };

   render() {
      return (
         <>
            <h1 className='text-center'>NewsMonkey - Top HeadLines</h1>
            {this.state.loading && <GIF />}
            <InfiniteScroll
               dataLength={this.state.articles.length}
               next={this.fetchMoreData}
               hasMore={this.state.articles.length !== this.state.totalResults}
               loader={<GIF />} >

               <div className='container'>
                  <div className='row ' >
                     {this.state.articles.map((element) => {
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
}
