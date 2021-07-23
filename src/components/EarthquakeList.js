import React from "react"
import axios from "axios"
import { NavLink } from "react-router-dom"
import Navbar from "./Navbar"

class EarthquakeList extends React.Component{
    state = {
      earthquakes:[]
    }
  
    async componentDidMount() {
      const result = await axios.get("http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson")
      this.setState({
        earthquakes: result.data.features
      })
    }

  
    render() {
      return (
        <>
        {this.state.earthquakes.map((earthquake, index) => {
            return (
            <li key={index}>
            <h1> Location: {earthquake.properties.place} </h1>
            <h3> Magnitude: {earthquake.properties.mag} </h3>
            <h3>{earthquake.properties.url} </h3>
            </li>
            )
        })}
        </>
      )
    }
  
  }
  
 
export default EarthquakeList