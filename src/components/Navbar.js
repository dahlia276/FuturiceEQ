import React from "react"
import {NavLink} from "react-router-dom"

function NavBar () {
    return (
        <nav>
                <NavLink to="/" > Home </NavLink>
                <NavLink to="/significant-earthquakes"> Significant Earthquakes </NavLink>
                <NavLink to="/how-to-act"> How to act </NavLink>
        </nav>
    )
}

export default NavBar