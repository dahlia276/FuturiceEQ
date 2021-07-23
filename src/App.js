import logo from './logo.svg';
import './App.css';
import React from "react"
import { Switch, Route } from "react-router-dom";
import {NavLink} from "react-router-dom"
import axios from "axios"
import EarthquakeList from "./components/EarthquakeList"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import SearchQuake from './components/Search';



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/earthquakes" component={EarthquakeList}/>
        <Route exact path="/search" component={SearchQuake}/>
      </Switch>
    </div>
  )
}

export default App