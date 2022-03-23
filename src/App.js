
import './App.css';
import  Navbar from './components/Navbar'

import React, { Component } from 'react'
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <div className='container'>
        <div className="row">
        <div className='col-md-4'>
        <News />
        </div>
        <div className='col-md-4'>
        <News />
        </div>
        <div className='col-md-4'>
        <News />
        </div>
        </div>
       
      </div>
      </>

    )
  
}
}


