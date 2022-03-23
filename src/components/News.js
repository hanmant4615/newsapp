import React, { Component } from 'react'
import Newcontent from './Newcontent';

export class News extends Component {


  render() {
    return (
        <div className="container">
          <div className="row">
          <div className="col-md-3">
            <Newcontent title="Foreclosures are on the rise. Here’s what that says about the housing market - MarketWatc" description="In January there was a seven-fold increase in foreclosure starts, new data shows." url ="https://images.mktw.net/im-504304/social" />
          </div>     
              
        </div>
        </div>

    )
  }
}

export default News