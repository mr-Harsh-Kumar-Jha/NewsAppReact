import React from 'react'


const News = (props) => {

      let { title, description, imageUrl, NewsUrl ,date} = props;
      return (
         <div className="card">
            <img src={imageUrl} style={{height:'250px'}} className="card-img-top" alt="..." />
            <div className="card-body">
               <h5 className="card-title">{title}</h5>
               <p className="card-text">{new Date(date).toGMTString() }</p>
               <p className="card-text">{description}</p>

               <a href={NewsUrl} rel="noreferrer" target="_blank" className="btn btn-primary btn-sm">Read More</a>
            </div>
         </div>
      )
   }
   export default News;

