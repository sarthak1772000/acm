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
                <Slider />    
                <Footer />
            </div>
        );
    }
}


export default Home;