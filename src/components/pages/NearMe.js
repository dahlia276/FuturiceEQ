// Gets the coordinates of the user with Geolocator 
// Renders the quakes that happened near the user

import React from "react"
import axios from "axios"
import EarthquakesList from "../shared/EarthquakesList"
import ReactLoading from "../shared/Loading"

class NearMe extends React.Component {
    state = {
        earthquakes: [],
        isLoading: true
    }


    componentDidMount(success) {
        success = async (position) => {
            const latitude  = position.coords.latitude;
            const longitude = position.coords.longitude;

            const result = await axios.get(`https://earthquake.usgs.gov/fdsnws/event/1/query?latitude=${latitude}&longitude=${longitude}&maxradiuskm=2000&format=geojson`)
            const eqs = result.data.features
            this.setState({
                earthquakes:eqs,
                isLoading: false
            })
        }
        navigator.geolocation.getCurrentPosition(success);
    

    }

    render() {
        return(
            <>
            <h1>Earthquakes within 2000KM of you</h1>
            { this.state.isLoading ? 
                <ReactLoading  />
            :
            <EarthquakesList earthquakes={this.state.earthquakes} />
             } </>
        )
    }
}

export default NearMe