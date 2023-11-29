import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import propTypes from 'prop-types'

export default class News extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general"

  }

  static propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string,
  }

  constructor() {
    super()

    // we made this as a object which can be changed with the state
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async updateNews() {

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c52ff0f6a6364241b85cd6ccf67bc8d9&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({ articles: parsedData.articles, totalArticles: parsedData.totalResults })
    this.setState({ loading: false })

  }

  async componentDidMount() {
    this.updateNews()
  }

  nextClick = async () => {

    this.setState({
      page: this.state.page + 1
    })
    this.updateNews()

  }


  prevClick = async () => {

    this.setState({
      page: this.state.page - 1
    })
    this.updateNews()
  }

  render() {
    return (
      <div className='container justify-centent-center'>
        <h2 className='mx-5 my-3 text-center'>News monkey - Top headlines</h2>

        {this.state.loading && <Spinner />}
        <div className="container d-flex justify-centent-center">
          <div className="row mx-4 my-4">
            {!this.state.loading && this.state.articles.map((element) => {
              return <div className="col-md-3 mx-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name} />
              </div>

            })}

          </div>
        </div>


        {!this.state.loading &&
          <div className="container d-flex justify-content-between">
            <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.prevClick}>Previous</button>
            <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize)} className="btn btn-dark" onClick={this.nextClick}>Next</button>
          </div>}
      </div>
    )
  }
}
