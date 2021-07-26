//Display the features of each earthquake

import React from "react"


class EarthquakeCard extends React.Component{
    getDanger(){ //Changes the color of the magnitude depending on the value
        const magnitude = this.props.earthquake.properties.mag

        if (magnitude <= 2) {
            return (<h3 style={{color: "#198754"}}> Magnitude: {magnitude} </h3>)
        } else if (magnitude > 2 && magnitude <= 4){
            return (<h3 style={{color: "#f3a517"}}> Magnitude: {magnitude} </h3>)
        } else {
           return (<h3 style={{color: "#c12a38"}}> Magnitude: {magnitude} </h3>)
        }
    }

    getTime(){ //Converts unix to human readable format
        const date = new Date(this.props.earthquake.properties.time)
        return date.toLocaleDateString() + "-" + date.toLocaleTimeString()
    }

    render() {
      
      return (
        <>
            <li className="list" key={this.key}>
            <div className="card">
            <div className="card-header location">
                Location | {this.props.earthquake.properties.place} 
            </div>
            <div className="card-body">
                <h5 className="card-title">{this.getDanger()} </h5>
                <p>
                 {this.getTime()}
                </p>
                <a href={this.props.earthquake.properties.url} className="btn btn-primary">Learn more</a>
            </div>
            </div>
            </li>
        </>
      )
    }
  }
  

export default EarthquakeCard