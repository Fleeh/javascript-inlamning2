import React from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <div id="navigering">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <NavLink className="navbar-brand" to="/" exact> <i className="fab fa-react"> </i></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" aria-current="page" to="/" exact activeClassName="active" >Home</NavLink>
                            <NavLink className="nav-link" to="Products" exact activeClassName="active" >Customers</NavLink>
                            <NavLink className="nav-link" to="Signup" exact activeClassName="active" >Sign Up</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
