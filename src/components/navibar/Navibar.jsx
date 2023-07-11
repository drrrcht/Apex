import React from "react";
import {Link, NavLink} from "react-router-dom";

export const Navibar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
            <a href="index.html" className="navbar-brand d-flex align-items-center">
                <h1 className="m-0">
                    <i className="fa fa-building text-primary me-3"></i>APEX
                </h1>
            </a>
            <button
                type="button"
                className="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-3 py-lg-0">
                    <NavLink to={"/"} className="nav-item nav-link">Home</NavLink>
                    <NavLink to="/about" className="nav-item nav-link ">About Us</NavLink>
                    <NavLink to="service" className="nav-item nav-link">Our Services</NavLink>
                    <div className="nav-item dropdown">
                        <Link
                            to="#"
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                        >Pages</Link>
                        <div className="dropdown-menu bg-light m-0">
                            <Link to="/pages/feature" className="dropdown-item">Features</Link>
                            <Link to="/pages/appointment" className="dropdown-item">Appointment</Link>
                            <Link to="/pages/team" className="dropdown-item">Our Team</Link>
                            <Link to="/pages/testimonial" className="dropdown-item">Testimonial</Link>
                            <Link to="/pages/err" className="dropdown-item">404 Page</Link>
                        </div>
                    </div>
                    <NavLink to="/contact" className="nav-item nav-link">Contact Us</NavLink>
                </div>
            </div>
        </nav>
    );
}