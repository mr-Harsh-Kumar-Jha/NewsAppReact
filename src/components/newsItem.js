import React, { Component } from 'react'
import News from './news'
import GIF from './gif.js';
import propTypes from 'prop-types';

export default class NewsItem extends Component {

   static defaultProps = {
        country:'in',
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
         page: 1
      }
   }

   async componentDidMount() {
      console.log("hi");
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=78f5ef15feff442399f5df90f84d8895&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parcedData = await data.json();
      console.log(parcedData);
      this.setState({ articles: parcedData.articles, totalArticles: parcedData.totalResults });
      this.setState({loading: false});
   }

   handleOnClickP = async () => {
      console.log("prev");
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=78f5ef15feff442399f5df90f84d8895&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parcedData = await data.json();
      this.setState({
         page: this.state.page - 1,
         articles: parcedData.articles,
         loading: false
      })
   }

   handleOnClickN = async () => {
      console.log("next");
         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=78f5ef15feff442399f5df90f84d8895&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
         this.setState({loading: true});
         let data = await fetch(url);
         let parcedData = await data.json();
         console.log(this.state.page);
         this.setState({
            page: this.state.page + 1,
            articles: parcedData.articles,
            loading: false
         })
   }

   render() {
      return (
         <div className='container my-3'>
            <h1 className='text-center'>NewsMonkey - Top HeadLines</h1>
            {this.state.loading && <GIF /> }
            <div className='row ' >
               {!this.state.loading && this.state.articles.map((element) => {
                  return <div className='col-md-4 my-4' key={element.url} >
                     <News title={element.title ? element.title.slice(0, 45).length === 45 ? element.title.slice(0, 45) + ('.. ') : element.title + (' ... ') + (' '.repeat(45 - element.title.slice(0, 45).length)) : ' '} description=     {element.description ? element.description.slice(0, 88).length === 88 ? element.description.slice(0, 88) + (' ... ') : element.description + (' ... ') + (' .'.repeat(88 - element.description.slice(0, 88).length)) : ' '} imageUrl={element.urlToImage} NewsUrl={element.url} date={element.publishedAt} />
                  </div>
               })}
            </div>
            <div className='container d-flex justify-content-between'>
               <button disabled={this.state.page <= 1} type="button" className="btn btn-primary btn-sm" onClick={this.handleOnClickP}> &larr; Previous</button>
               <button  disabled={this.state.page+1>Math.ceil(this.state.totalArticles/this.props.pageSize)} type="button" className="btn btn-primary btn-sm" onClick={this.handleOnClickN}>Next &rarr;</button>
            </div>
         </div>
      )
   }
}
