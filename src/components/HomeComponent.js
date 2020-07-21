import React, { Component } from 'react';
import Header from './HeaderComponent';
import Trial from './TrialComponent';
import Footer from './FooterComponent';
import Slider from './SliderComponent';

class Home extends Component{
    render() {
        return(
            <div>
                <Header />
                <div className="row">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 self-align-center">
                                <Slider />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}


export default Home;