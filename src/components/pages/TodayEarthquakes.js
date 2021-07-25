import React from "react"
import axios from "axios"
import EarthquakesList from "../shared/EarthquakesList";


class TodayEarthquakes extends React.Component{
    state = {
      earthquakes:[],
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
         <h1 className="list-title">Today's earthquakes</h1>
         <EarthquakesList earthquakes={this.state.earthquakes} />
        </>
      )
    }
  
  }
  

export default TodayEarthquakes