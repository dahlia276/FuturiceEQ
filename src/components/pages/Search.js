//Searh for earthquakes in a certain area using coordinates 
//provided by the user 

import React from "react"
import axios from "axios"
import EarthquakesList from "../shared/EarthquakesList"
import ReactLoading from "../shared/Loading"


class Search extends React.Component {
    state = {
        earthquakes:[],
        latitude: "",
        longitude: "",
        maxradius: "",
        isLoading: false
    }

    async componentDidMount() {
       const {latitude,longitude, maxradiuskm} = this.state
        let result = await axios.get(`https://earthquake.usgs.gov/fdsnws/event/1/query?latitude=${latitude}&longitude=${longitude}&maxradiuskm=${maxradiuskm}&format=geojson`)
        this.setState({
        earthquakes: result.data.features,
        isLoading: false
        })
    }

    handleChange = (event) => {
        let { name, value } = event.target;
        this.setState({
          [name]: value,
        });
      }; 

        handleSearch = async (event) => {
        this.setState({
          latitude: event.target.value,
          longitude: event.target.value,
          maxradiuskm: event.target.value,
          foundQuakes: this.state.earthquakes.filter((earthquake) => 
          earthquake.latitude.toLowerCase().includes(event.target.value.toLowerCase()))
        }) 
      } 
 
      handleFormSubmit = async (event) => {
        const {latitude,longitude, maxradiuskm} = this.state
          this.setState({
            latitude: latitude,
            longitude: longitude,
            maxradiuskm: maxradiuskm,
            foundQuakes: this.state.earthquakes.filter((earthquake) => 
            earthquake.latitude.toLowerCase().includes(event.target.value.toLowerCase())),
            isLoading:true
          }) 
        event.preventDefault();
        await this.componentDidMount(this.state);
      };

    render () {
        const {longitude, latitude, maxradiuskm} = this.state
        return(
           
            <>
             <h1 className="form-title"> Search by coordinates </h1>
             <form  onSubmit={this.handleFormSubmit}>
             
            <div className="form">
                <div className="form-group">
                <label className="form-label" > Longitude </label>
                <input className="form-control" type="number" min="-90" max="90" name="longitude" placeholder="[-90,90]" onChange={this.handleChange} value={longitude} required/>
                </div>
                <div className="form-group">
                <label className="form-label"> Latitude </label>
                <input className="form-control" type="number" name="latitude" placeholder="[-180,180]" onChange={this.handleChange} value={latitude} />
                </div>
                <div className="form-group">
                <label className="form-label"> Maxradius </label>
                <input className="form-control" type="number"  name="maxradiuskm" placeholder="[0, 20001.6] km" onChange={this.handleChange} value={maxradiuskm} />
                </div>
                <button type="submit" className="btn" onClick={this.handleFormSubmit}> Search </button> 
                </div>
                { this.state.isLoading ? 
                <ReactLoading />
            : <>
                <ul>
                    <EarthquakesList earthquakes={this.state.earthquakes} />
                </ul></>
              } </form>

               </>
        ) 
    }

}

export default Search
