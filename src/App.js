import './App.css';
import  Navbar from './components/Navbar'
import React, { Component } from 'react'
import News from './components/News';

export default class App extends Component {
  apikey = process.env.REACT_APP_NEWS_API
  render() {
    return (
      <>
      <Navbar mode='dark'/>
      <News apikey={this.apikey}/>
   
      </>

    )
  
}
}


