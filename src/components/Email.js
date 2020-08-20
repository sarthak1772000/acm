import React, { useState, useEffect } from "react";
import './fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Email = () => {
    return (
        <React.Fragment>
            <div className="card bg-light">
        <article
            className="card-body mx-auto"
            style={{ maxWidth: "400px" }}
        >
            <div className="row justify-content-center" style={{ padding: '5px',marginBottom :'10px'}} >
            <span className="social-email">
                <FontAwesomeIcon icon="envelope" size="3x" />
            </span>
            </div>
            <div className="row justify-content-center">
            <a href="https://wce.acm.org/">wceacm@gmail.com</a>
            </div>
        </article>
      </div>    
        </React.Fragment>
    );
};

export default Email;
