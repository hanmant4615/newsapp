import React, { Component } from "react";
import PropTypes from "prop-types";
import Newcontent from "./Newcontent";

export class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page :1 
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3f183b394155471187be7096299beff8&pageSize=20`;
    let data = await fetch(url);
    let parsedata = await data.json();

    this.setState({
      articles: parsedata.articles,
      totalResults : parsedata.totalResults
    });
  }
   handleprevious= async()=>{
     console.log("pervious");
     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3f183b394155471187be7096299beff8&page=${this.state.page-1}&pageSize=20`;
     let data = await fetch(url);
     let parsedata = await data.json();
 
     this.setState({
       page : this.state.page - 1,
       articles: parsedata.articles,
     })
     
    }
    handlenext= async()=>
    {
    console.log("next");
    if(this.state.page +1 > Math.ceil(this.state.totalResults/20))
    {

    }
    else
    {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3f183b394155471187be7096299beff8&page=${this.state.page +1}&pageSize=20`;
    let data = await fetch(url);
    let parsedata = await data.json();

    this.setState({
      page : this.state.page +1,
      articles: parsedata.articles,
    })
  }
}


  render() {
    return (
      <div className="container">
        <h2 className="text-center my-4">Top-Headlines</h2>
        <div className="row">
          {this.state.articles.map((Element) => {
            return (
              <div className="col-md-4 my-3" key={Element.url}>
                <Newcontent
                  title={Element.title}
                  description={Element.description}
                  Imageurl={Element.urlToImage}
                  url={Element.url}
                  date={Element.publishedAt}
                  author={!Element.author ? "Unknown" : Element.author}
                  source={Element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" onClick={this.handleprevious} className="btn btn-dark">
            &larr; Previous
          </button>
          <button type="button" className="btn btn-dark" onClick={this.handlenext}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}


export default News;
