import React, { useState,Component } from 'react';
import './patil.css';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container, Row, Col
} from 'reactstrap';

 class Slider extends Component {
  render(){
    return(
      <div className="container">
        <div className="row row-content">
          <div className="col">
                <div id="mycarousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active"> 
                            <img className="d-block img-fluid img-responsive"
                                src={require('./images/jagrutiMarathiposter08@8x.png')} alt="uthappizza" />
                            <div className="carousel-caption d-none d-block">
                            </div>
                        </div>
                        <div className="carousel-item"> 
                            <img className="d-block img-fluid img-responsive"
                                src={require('./images/HckEarthDisplay@8x.png')} alt="uthappizza" />
                            <div className="carousel-caption d-none d-block">
                            </div>
                        </div>
                        <div className="carousel-item"> 
                            <img className="d-block img-fluid img-responsive"
                                src={require('./images/hackathon_main_poster@8x.png')} alt="uthappizza" />
                            <div className="carousel-caption d-none d-block">
                            </div>
                        </div>
                    </div>
                    <ol className="carousel-indicators"> 
                        <li data-target="#mycarousel" data-slide-to="0" classNameName="active"></li>
                        <li data-target="#mycarousel" data-slide-to="1"></li>
                        <li data-target="#mycarousel" data-slide-to="2"></li>
                    </ol>
                    <a className="carousel-control-prev patil" href="#mycarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next patil" href="#mycarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
              </div>
            </div>
        </div>
        <br/>
        <br/>
        <div className="row">
          <div className="col-12 col-sm-4">
          <div className="row">
                <div className="col-md-3">
                  <span className="fa fa-eye fa-4x col-sm-2"></span>
                </div>
                <div className="col-md">
                  <h4>Our Vision</h4>
                  <p>Promoting &amp; Enhancing knowledge &amp; innovation amongst our students and making them more aware of IT industry for excellence in their career.</p>
                </div>
              </div>
          </div>
          <div className="col-12 col-sm-4">
          <div className="row">
                <div className="col-md-3">
                  <span className="fa fa-flag fa-4x col-sm-2"></span>
                </div>
                <div className="col-md">
                  <h4>Our Mission</h4>
                  <p>To Become a Leading Association to provide learning opportunities for students through various activities to achieve technical expertise.</p>
                </div>
              </div>
          </div>
          <div className="col-12 col-sm-4">
              <div className="row">
                <div className="col-md-3">
                  <span className="fa fa-magic fa-4x col-sm-2"></span>
                </div>
                <div className="col-md">
                  <h4>Our Inspiration</h4>
                  <p>ACM, ACM India &amp; WCE Sangli are our true inspiration. Their active efforts towards science &amp; technology motivates us to keep doing our work.</p>
                </div>
              </div>
          </div>
        </div>
        <br/>
        <br/>             
        <div className="row">
          <div className="col-12 align-items-center">
          <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="#peter"
                            role="tab" data-toggle="tab"><span className="fa fa-question fa-2x"></span>Who We Are?</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#danny" role="tab"
                          data-toggle="tab"><span className="fa fa-question fa-2x"></span>What Do We Do?</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#agumbe"role="tab"
                          data-toggle="tab"><span className="fa fa-question fa-2x"></span>Why You Should Join Us?</a>
                    </li>
                </ul>

                <div className="tab-content">
                    <div role="tabpanel" className="tab-pane fade show active" id="peter">
                        <p>
                          <strong>WCE ACM Student Chapter</strong> was formed to introduce students to an educational and scientific Association &amp; develop the habbit of professional growth achieved through participation in local chapters. WCE ACM Student Chapter is a group of ignited minds boosted by the technology & computer science who have come together to contribute towards the development of computer community.<br/><br/>
                          <strong>WCE ACM Student Chapter</strong> was formed by the Department of Computer Science and Engineering, WCE Sangli. The chapter mainly consists of students from UG &amp; PG with Computer Science / IT as major. The chapter officially represents the ACM & ACM India in the Sangli-Kolhapur region. We are the only ACM Student Chapter formed in the western Maharashtra.
                        </p>
                    </div>

                    <div role="tabpanel" className="tab-pane fade" id="danny"> 
                        <p>
                          Content
                        </p>
                    </div>

                    <div role="tabpanel" className="tab-pane fade" id="agumbe"> 
                        <p>
                          Content
                        </p>
                    </div>

                </div>
          </div>
        </div>
      </div>
    );
  }
 }

export default Slider;
