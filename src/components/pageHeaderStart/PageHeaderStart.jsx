import React from "react";
import {Link} from "react-router-dom";

export const PageHeaderStart = (props) => {
    return (
        <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container text-center py-5">
                <h1 className="display-4 text-white animated slideInDown mb-4">{props.headerText}</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item">
                            <Link className="text-white" to="/">Home</Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link className="text-white" to="/">Pages</Link>
                        </li>
                        <li className="breadcrumb-item text-primary active" aria-current="page">
                            About
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
    );
}