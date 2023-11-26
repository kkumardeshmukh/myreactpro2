import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'

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
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c52ff0f6a6364241b85cd6ccf67bc8d9&page=1&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles, totalArticles: parsedData.totalResults })
    this.setState({ loading: false })
  }

  nextClick = async () => {
    console.log("next")


    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c52ff0f6a6364241b85cd6ccf67bc8d9&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles })

    this.setState({
      page: this.state.page + 1
    })

    this.setState({ loading: false })

  }


  prevClick = async () => {
    console.log("prev")

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c52ff0f6a6364241b85cd6ccf67bc8d9&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles })

    this.setState({
      page: this.state.page - 1
    })
    this.setState({ loading: false })
  }

  render() {
    return (
      <div className='container justify-centent-center'>
        <h2 className='mx-5 my-3 text-center'>News monkey - Top headlines</h2>
        {this.state.loading && <Spinner />}
        <div className="row mx-4 my-4">
          {!this.state.loading && this.state.articles.map((element) => {
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
        {!this.state.loading &&
        <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page <= 1} className="btn btn-success" onClick={this.prevClick}>Previous</button>
          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize)} className="btn btn-dark" onClick={this.nextClick}>Next</button>
        </div>}
      </div>
    )
  }
}
