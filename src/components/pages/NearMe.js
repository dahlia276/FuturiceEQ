import React from "react"
import axios from "axios"
import EarthquakesList from "../shared/EarthquakesList"

class NearMe extends React.Component {
    state = {
        earthquakes: []
    }


    componentDidMount(success) {
        success = async (position) => {
            const latitude  = position.coords.latitude;
            const longitude = position.coords.longitude;

            const result = await axios.get(`https://earthquake.usgs.gov/fdsnws/event/1/query?latitude=${latitude}&longitude=${longitude}&maxradiuskm=1000&format=geojson`)
            const eqs = result.data.features
            this.setState({
                earthquakes:eqs,
            })
        }
        navigator.geolocation.getCurrentPosition(success);
    

    }

    render() {
        return(
            <>
            <h1>Earthquakes within 1000KM of you</h1>
            <EarthquakesList earthquakes={this.state.earthquakes} />
            </>
        )
    }
}

export default NearMe