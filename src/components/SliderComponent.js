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
/*
  const items = [
  {
    src: '../../public/images/hackathon_main_poster@8x.png',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const Slider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img classNameName="image-responsive" src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}
*/
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
                                src="images/jagrutiMarathiposter08@8x.png" alt="uthappizza" />
                            <div className="carousel-caption d-none d-block">
                            </div>
                        </div>
                        <div className="carousel-item"> 
                            <img className="d-block img-fluid img-responsive"
                                src="images/HckEarthDisplay@.png" alt="uthappizza" />
                            <div className="carousel-caption d-none d-block">
                            </div>
                        </div>
                        <div className="carousel-item"> 
                            <img className="d-block img-fluid img-responsive"
                                src="images/hackathon_main_poster@8x.png" alt="uthappizza" />
                            <div className="carousel-caption d-none d-block">
                            </div>
                        </div>
                    </div>
                    <ol className="carousel-indicators"> 
                        <li data-target="#mycarousel" data-slide-to="0" className="active"></li>
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
      </div>
    );
  }
 }

export default Slider;
