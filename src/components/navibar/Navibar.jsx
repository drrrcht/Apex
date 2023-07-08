import React from "react";
import {Link} from "react-router-dom";

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
                    <Link to={"/"} className="nav-item nav-link">Home</Link>
                    <Link to="/about" className="nav-item nav-link ">About Us</Link>
                    <Link to="service" className="nav-item nav-link">Our Services</Link>
                    <div className="nav-item dropdown">
                        <Link
                            to="#"
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                        >Pages</Link>
                        <div className="dropdown-menu bg-light m-0">
                            <a href="feature.html" className="dropdown-item">Features</a>
                            <a href="appointment.html" className="dropdown-item">Appointment</a>
                            <a href="team.html" className="dropdown-item">Our Team</a>
                            <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                            <a href="404.html" className="dropdown-item">404 Page</a>
                        </div>
                    </div>
                    <Link to="/contact" className="nav-item nav-link">Contact Us</Link>
                </div>
            </div>
        </nav>
    );
}