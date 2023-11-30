import React from 'react'
import AltImage from "./AltImage.gif"



const NewsItem =(props)=> {


  

    let { description, imageUrl, newsUrl, author, date, source, title } = props

    return (
      <div>
        <div className="card my-3 mx-3" style={{ width: "17rem" }}>
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-info" style={{left: "70%"}}>
            {source}
          </span>
          <img src={!imageUrl?AltImage:imageUrl} className="card-img-top" alt="N/A" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknow":author} on {new Date(date).toDateString()} at {new Date(date).toLocaleTimeString()} </small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem
