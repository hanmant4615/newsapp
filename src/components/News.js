import React, { Component } from 'react'
import Newcontent from './Newcontent'
export class News extends Component {


  render() {
    return (
      <div className='container'>
      <div className="row">
      <div className='col-md-4'>
      <Newcontent title ="Foreclosures are on the rise. Here’s what that says about the housing market - MarketWatch" description ="In January there was a seven-fold increase in foreclosure starts, new data shows."
      url="https://images.mktw.net/im-504304/social" />
      </div>
      <div className='col-md-4'>
      <Newcontent title="These charts show how much it costs to charge an EV vs. refueling a gas vehicle - CNBC" description="Is it still true that it's much cheaper to refuel an EV? CNBC crunched the numbers." url="https://image.cnbcfm.com/api/v1/image/106863320-1617550443087-gettyimages-1310484152-dscf8080_2021040230936961.jpeg?v=1647620784&w=1920&h=1080" />
      </div>
      <div className='col-md-4'>
      <Newcontent />
      </div>
      </div>
     
    </div>

    )
  }
}

export default News