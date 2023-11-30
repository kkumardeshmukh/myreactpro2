import React from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import propTypes from 'prop-types'
import { useState } from 'react'
import { useEffect } from 'react'

const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalArticles, setTotalArticles] = useState(0);


  const capitalize= (s)=>
{
    return s[0].toUpperCase() + s.slice(1);
}


  let updateNews = async() => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    setArticles(parsedData.articles)
    setTotalArticles(parsedData.totalResults)
    setLoading(false)
    document.title=`NEWS MONKEY - ${capitalize(props.category)}`
  }

  useEffect(() => {

    updateNews()

  },[] );



  const nextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    setArticles(parsedData.articles)
    setTotalArticles(parsedData.totalResults)
    setLoading(false)
    setPage(page+1)
    document.title=`NEWS MONKEY - ${capitalize(props.category)}`

  }


  const prevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page - 1}&pageSize=${props.pageSize}`
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    setArticles(parsedData.articles)
    setTotalArticles(parsedData.totalResults)
    setLoading(false)
    setPage(page-1)
    document.title=`NEWS MONKEY - ${capitalize(props.category)}`

  }

 
    return (
      <div className='container justify-centent-center'>
        <h2 className='mx-5 my-3 text-center'>News monkey - Top {capitalize(props.category)} headlines</h2>

        {loading && <Spinner />}
        <div className="container d-flex justify-centent-center">
          <div className="row mx-4 my-4">
            {!loading && articles.map((element) => {
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


        {!loading &&
          <div className="container d-flex justify-content-between">
            <button type="button" disabled={page <= 1} className="btn btn-success" onClick={prevClick}>Previous</button>
            <button type="button" disabled={page + 1 > Math.ceil(totalArticles / props.pageSize)} className="btn btn-success" onClick={nextClick}>Next</button>
          </div>}
      </div>
    )
  
}

News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general"

}

News.propTypes = {
  country: propTypes.string,
  pageSize: propTypes.number,
  category: propTypes.string,
}

export default News