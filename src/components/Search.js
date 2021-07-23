import React from "react"
import axios from "axios"
import Navbar from "./Navbar"


class SearchQuake extends React.Component {
    state = {
        earthquakes:[],
        latitude: "",
        longitude: "",
        maxradius: ""
    }

    async componentDidMountz() {
       const {latitude,longitude, maxradius} = this.state
        const result = await axios.get(`https://earthquake.usgs.gov/fdsnws/event/1/query?latitude=${latitude}&longitude=${longitude}&maxradius=${maxradius}&format=geojson`)
        console.log(`this is ${result.data.features} `)
        this.setState({
        earthquakes: result.data.features,
        })

    }

    handleChange = (event) => {
        let { name, value } = event.target;
        this.setState({
          [name]: value,
        });
        console.log(this.state)
      }; 

        handleSearch = async (event) => {
            console.log(`this is the latitude val ${event.target}`)
        this.setState({
          latitude: event.target.value,
          longitude: event.target.value,
          maxradius: event.target.value,
          foundQuakes: this.state.earthquakes.filter((earthquake) => 
          earthquake.latitude.toLowerCase().includes(event.target.value.toLowerCase()))
        }) 
      } 
 
      handleFormSubmit = async (event) => {
        const {latitude,longitude, maxradius} = this.state
          this.setState({
            latitude: latitude,
            longitude: longitude,
            maxradius: maxradius,
            foundQuakes: this.state.earthquakes.filter((earthquake) => 
            earthquake.latitude.toLowerCase().includes(event.target.value.toLowerCase()))
          }) 
        event.preventDefault();
        await this.componentDidMountz(this.state);
      };

      

    render () {
        const {longitude, latitude, maxradius} = this.state
        return(
            
            <form onSubmit={this.handleFormSubmit}>
                <p> Search by area </p>
                <label> Longitude: </label>
                <input type="text" name="longitude" placeholder="[-90,90]" onChange={this.handleChange} value={longitude} />
                <label> Latitude: </label>
                <input type="text" name="latitude" placeholder="[-180,180]" onChange={this.handleChange} value={latitude} />
                <label> Maxradius: </label>
                <input type="text"  name="maxradius" placeholder="[0, 180]" onChange={this.handleChange} value={maxradius} />
                <ul>
                {/* <button onClick={this.handleSearch}> Search </button> */}
                <button> Search </button> 

                    {this.state.earthquakes.map((quake, index) => {
                        return (
                            <>
                            <li key={index}>
                                <h1> {quake.properties.title}</h1>
                                <h3>Magnitude: {quake.properties.mag}</h3>
                            </li>
                            </>
                        )
                    })}
                </ul>
            </form>
        )
    }

}

export default SearchQuake
