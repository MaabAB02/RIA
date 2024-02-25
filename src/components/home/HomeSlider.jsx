import React, { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export class HomeSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplayspeed: 1500
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3><img alt="First slider" src={require('../../assets/images/flower-slider1.jpg')} /></h3>
          </div>
          <div>
            <h3><img alt="First slider" src={require('../../assets/images/flower-slider2.jpg')} /></h3>
          </div>
          <div>
            <h3><img alt="First slider" src={require('../../assets/images/flower-slider3.jpg')} /></h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default HomeSlider
