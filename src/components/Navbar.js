import React, { Component } from 'react'

export class Navbar extends Component {
  
  render() {
    return (<nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/"> Home </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/"> General </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link " href="/">Sport</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link " href="/">Technology</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link " href="/">Health</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link " href="/">Science</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link " href="/">Business</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link " href="/">Entertainment</a>
        </li>
      </ul>
     
    </div>
  </nav>
    )
  }
}

export default Navbar