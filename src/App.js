import './App.css';
import React from "react";
import { Switch, Route } from "react-router-dom";
import TodayEarthquakes from "./components/pages/TodayEarthquakes"
import Navbar from "./components/shared/Navbar";
import Search from './components/pages/Search';
import "bootstrap/dist/css/bootstrap.min.css";
import NearMe from './components/pages/NearMe';



function App() {
  return (
    <div className="App">
    <Navbar/>
    <img src="/images/header.jpg" className="img" alt="Responsive"></img>
      <Switch>
        <Route exact path="/" component={TodayEarthquakes}/>
        <Route exact path="/near-me" component={NearMe}/>
        <Route exact path="/search" component={Search}/>
      </Switch>
    </div>
  )
}

export default App