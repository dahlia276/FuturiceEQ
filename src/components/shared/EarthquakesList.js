import React from "react"
import EarthquakeCard from "./EarthquakeCard";



class EarthquakesList extends React.Component{
    render() {
      
      return (
        <>
        {this.props.earthquakes.map((earthquake, id) => {
            return (
            <EarthquakeCard earthquake={earthquake} key={id} />
            )
        })}
        </>
      )
    }
  
  }
  

export default EarthquakesList