import React from "react"
import axios from "axios"
import EarthquakesList from "../shared/EarthquakesList";
import ReactLoading from "../shared/Loading"


class TodayEarthquakes extends React.Component{
    state = {
      earthquakes:[],
      isLoading: true
    }
  
    async componentDidMount() {
      const result = await axios.get("http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson")
      this.setState({
        earthquakes: result.data.features,
        isLoading: false
      })
    }

    render() {
      
      return (
        <>
         <h1 className="list-title">Today's earthquakes</h1>
         { this.state.isLoading ? 
                <ReactLoading  />
            :
         <EarthquakesList earthquakes={this.state.earthquakes} />
         } </>
      )
    }
  
  }
  

export default TodayEarthquakes