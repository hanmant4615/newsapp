import './App.css';
import {
  BrowserRouter,
 Switch,
} from "react-router-dom";
import  Navbar from './components/Navbar'
import React, { Component } from 'react'
import News from './components/News';
import { Route } from 'react-router-dom';
;
export default class App extends Component {
  apikey = process.env.REACT_APP_NEWS_API
  render() {
    return (
      <>
      <BrowserRouter>
      <Navbar mode='dark'/>   
      <Switch>
      <Route exact path={'/'}> <News key ='general' apikey = {this.apikey} category = {"general"}/></Route>
      <Route exact path={'/business'}><News key ='business' apikey = {this.apikey} category = {"business"}/></Route>
      <Route exact path={'/entertainment'}><News key ='entertainment'  apikey = {this.apikey} category = {"entertainment"}/></Route>
      {/* <Route exact path={'/'}><News apikey = {this.apikey} category = {"general"}/>general</Route> */}
      <Route exact path={'/health'}><News key ='health' apikey = {this.apikey} category = {"health"}/></Route>
      <Route exact path={'/science'}><News key ='science' apikey = {this.apikey} category = {"science"}/></Route>
      <Route exact path={'/sports'}><News key ='sports' apikey = {this.apikey} category = {"sports"}/></Route>
      <Route exact path={'/technology'}><News key ='technology'  apikey = {this.apikey} category = {"technology"}/></Route>
      </Switch>
      </BrowserRouter>
   
      </>

    )
  
}
}


