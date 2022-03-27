import React, { Component } from 'react'

export class Newcontent extends Component {
  
  render() {
    let {title , description, url ,Imageurl,author,date,source} = this.props;
    return (
      
      <div className="card" >
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-dark text-light" style={{zIndex :1 , left : "90%"}}>
    {source}
  </span>
    <img className="card-img-top" src={!Imageurl || Imageurl === 'null'?"https://ak.picdn.net/shutterstock/videos/2500214/thumb/1.jpg":Imageurl} alt="...."/>
    <div className="card-body">
      <h5 className="card-title">{title } </h5>
      <p className="card-text">{description}</p>
      <p className="card-text"><small className="text-muted"> Source : {author} <br/> {new Date(date).toUTCString()}</small></p>
      <a href={url} target="_blank" rel ="noreferrer" className="btn btn-primary">Read More</a>
    </div>
  </div>
    )
  }
}

export default Newcontent