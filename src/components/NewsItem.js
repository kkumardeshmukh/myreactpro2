import React, { Component } from 'react'


export default class NewsItem extends Component {
  
  
  render() {

    let {description, imageUrl, newsUrl} = this.props

    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl} className="card-img-top" alt="N/A"/>
            <div className="card-body">
              <h5 className="card-title">{this.props.title}...</h5>
              <p className="card-text">{description}...</p>
              <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}
