import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

  constructor() {
    super()

    // we made this as a object which can be changed with the state
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=c52ff0f6a6364241b85cd6ccf67bc8d9&page=1&pageSize=20"
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles, totalArticles: parsedData.totalResults })

  }

  nextClick = async () => {
    console.log("next")

   
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c52ff0f6a6364241b85cd6ccf67bc8d9&page=${this.state.page}&pageSize=20`
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({ articles: parsedData.articles })

      this.setState({
        page: this.state.page + 1
      })
    
  }


  prevClick = async () => {
    console.log("prev")

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c52ff0f6a6364241b85cd6ccf67bc8d9&page=${this.state.page}&pageSize=20`
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles })

    this.setState({
      page: this.state.page - 1
    })

  }

  render() {
    return (
      <div className='container'>
        <h2 className='mx-5 my-3'>News monkey - Top headlines</h2>
        <div className="row mx-4 my-4">
          {this.state.articles.map((element) => {
            // console.log(element.description)
            return <div className="col-md-3 mx-4" key={element.url}>
              <NewsItem
                title={element.title}
                description={element.description}
                imageUrl={element.urlToImage}
                newsUrl={element.url} />
            </div>

          })}

        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page <= 1} className="btn btn-success" onClick={this.prevClick}>Previous</button>
          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / 20)} className="btn btn-dark" onClick={this.nextClick}>Next</button>
        </div>
      </div>
    )
  }
}
