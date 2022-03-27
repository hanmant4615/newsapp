import React, { Component } from 'react'

export class Newcontent extends Component {
  
  render() {
    let {title , description, url ,Imageurl,author,date} = this.props;
    return (
    <div className="card" >
    <img className="card-img-top" src={!Imageurl || Imageurl === 'null'?"https://ak.picdn.net/shutterstock/videos/2500214/thumb/1.jpg":Imageurl} alt="...."/>
    <div className="card-body">
      <h5 className="card-title">{title }</h5>
      <p className="card-text">{description}</p>
      <a href={url} target="_blank" rel ="noreferrer" className="btn btn-primary">Read More</a>
      <p className="card-text"><small className="text-muted"> Source : {author} <br/> {new Date(date).toUTCString()}</small></p>
    </div>
  </div>
    )
  }
}

export default Newcontent