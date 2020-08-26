import React from "react"
import "bootstrap/dist/css/bootstrap.css";
import logo from "../logo.svg"

function Navigation() {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <span style={{ paddingRight: "10px" }}>
                    <img src={logo} width="30" height="30" alt="" loading="lazy" />
                </span>
            Meteora
            </a>
        </nav>


    )
}

export default Navigation;
