import React from "react"
import {NavLink} from "react-router-dom"

function NavBar () {
    return (
       
        <>
<nav className="navbar navbar-expand-lg navbar-dark nav-clr ">
            <a className="navbar-brand" href="#">FuturiceEQ</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <a className="nav-item nav-link active nav-left" href="/">Today's earthquakes </a>
            <a className="nav-item nav-link active" href="/near-me">Earthquakes near you </a>
            <a className="nav-item nav-link active" href="/search">Search by area</a>
         </div>
  </div>
</nav>
        </>
    )
}



export default NavBar