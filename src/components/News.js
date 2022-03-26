import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Newcontent from './Newcontent'
export class News extends Component {
  static defaultProps = {
    country :'in',
    category : 'general',
  }
  static propTypes ={
    country : PropTypes.string,
    category : PropTypes.string
  } 

  constructor()
  {
    super();
    this.state=
    {
    articles :  [],
    loading :false,
    }
  }
  async componentDidMount (){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3f183b394155471187be7096299beff8` 
    let data = await fetch(url)
    let parsedata = await data.json()
   
    this.setState ( {
        articles : parsedata.articles
    } )
}

  render() {
    return (
      <div className='container'>
        <h2 className='text-center my-4'>
          Top-Headlines
        </h2>
      <div className="row">
        {this.state.articles.map((Element)=>{
          return <div className='col-md-3 my-3' key ={Element.url} >
          <Newcontent title ={Element.title} description ={Element.description}
          Imageurl={Element.urlToImage} url = {Element.url} />
          </div>
        })}
      
      </div>
     
    </div>

    )
  }
}

export default News