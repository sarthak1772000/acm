import React, { useState, useEffect } from "react";
import './fontawesome';
import './card-style.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faYoutube,
    faInstagram,
    faLinkedin,
    faFacebookSquare
} from "@fortawesome/free-brands-svg-icons";



const Social = () => {

    return (
        <React.Fragment>
            <div className="card bg-light rounded" style={{elavation : 0}}>
        <article
            className="card-body mx-auto"
            style={{ maxWidth: "400px" }}
        >
            <h4 className="card-title mt-3 text-center">
              Social
            </h4>
            <div className="row justify-content-center " style={{ padding: '5px',marginBottom :'20px' }} >
            <a href="https://www.youtube.com/c/jamesqquick"
                className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="3x" />
            </a>
            
            
                <a href="https://www.facebook.com/learnbuildteach/"
                className="facebook social">
                <FontAwesomeIcon icon={faFacebookSquare} size="3x" />
                </a>
            </div>
            <div className="row justify-content-center"  style={{padding: '5px',marginBottom :'20px'  }} >
                <a href="https://www.twitter.com/jamesqquick" className="linkedin social">
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </a>
            
                <a href="https://www.instagram.com/learnbuildteach"
                className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="3x" />
                </a>
            </div>
        
        </article>
      </div>
            
        </React.Fragment>
    );
};

export default Social;
