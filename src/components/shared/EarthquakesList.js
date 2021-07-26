//Renders a list of all earthquakes that coressponds to the selected values 

import React from "react"
import EarthquakeCard from "./EarthquakeCard";



class EarthquakesList extends React.Component{
    state = {
        isLoading: false
    }
    

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