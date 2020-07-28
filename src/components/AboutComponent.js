import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap'; 


class About extends Component{
    render(){
        return(
            <React.Fragment>
                <Jumbotron>
                <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>ABOUT US</h1>
                            </div>      
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default About;