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
<<<<<<< HEAD
      <News />
=======
      <News apikey={this.apikey}/>
   
>>>>>>> faea709adeb7c0dae30c3e646bad3c9f7dc16feb
      </>

    )
  
}
}


