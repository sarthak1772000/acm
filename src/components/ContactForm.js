import React, { useState, useEffect } from "react";
import './fontawesome'
import "./signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Signup = () => {
    return (
        <React.Fragment>
            <div title="Signup Form" />
            <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                   <div className="card bg-primary">
                        <article
                            className="card-body mx-auto"
                            style={{ maxWidth: "400px" }}
                        >
                            <h4 className="card-title mt-3 text-center">
                              Contact Us
                            </h4>
                            <p className="text-center">
                               Feel free to get in touch!
                            </p>
                            <form>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon="user" />
                                        </span>
                                    </div>
                                    <input
                                        name=""
                                        className="form-control"
                                        placeholder="Your name"
                                        type="text"
                                    />
                                </div>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon="envelope" />
                                        </span>
                                    </div>
                                    <input
                                        name=""
                                        className="form-control"
                                        placeholder="Your Email address"
                                        type="email"
                                    />
                                </div>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon="tags" />
                                        </span>
                                    </div>
                                    <input
                                        className="form-control"
                                        placeholder="Subject"   
                                    />
                                    <span className="password-toogle-icon">
                                       {}
                                    </span>
                                </div>

                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon="edit" />
                                        </span>
                                    </div>
                                    <textarea
                                        name=""
                                        className="form-control"
                                        placeholder="Your message"
                                        type="textarea"
                                    />
                                </div>
                                <div className="form-group">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block"
                                    >
                                        {" "}
                                        Send{" "}
                                    </button>
                                </div>
                                
                            </form>
                        </article>
                    </div>

                   
                </div>
            </div>
        </React.Fragment>
    );
};

export default Signup;
