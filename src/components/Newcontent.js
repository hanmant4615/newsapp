import React, { Component } from 'react'

export class Newcontent extends Component {
  
  render() {
    let {title , description, url } = this.props;
    return (
    <div class="card" style={{width: "18rem"}}>
    <img class="card-img-top" src={url} alt="...."/>
    <div class="card-body">
      <h5 class="card-title">{title }</h5>
      <p class="card-text">{description}</p>
      <a href="/" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    )
  }
}

export default Newcontent