import React, { Component, Fragment } from 'react';
import {Container, Row, Card} from 'react-bootstrap';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

export class NewArrival extends Component {
    
    constructor(){
        super();
        this.next=this.next.bind(this);
        this.previous=this.previous.bind(this)
    }
    next(){
        this.slider.slickNext();
    }
    previous(){
        this.slider.slickPrev();
    }
  render() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
    };
    return (
      <div>
        <Fragment>
            <Container className="text-center mt-5" fluid>
                <div className='section-title text-center mb-55'>
                    <a className="btn btn-sm ml-2 site-btn"  onClick={this.previous}><i className='fa fa-angle-left'></i></a>
                    <a className="btn btn-sm ml-2 site-btn" onClick={this.next}><i className='fa fa-angle-right'></i></a>
                    <h2>LATEST ROSES</h2>
                    <p>Some of our Exclusive Collection, You May Like</p>
                </div>
                <Row>
                    <Slider ref={c => (this.slider=c)} {...settings}>
                        <div>
                            <Link to="">
                                <Card>
                                    <Card.Body>
                                        <img alt="Category item" src={require('../../assets/images/bouqute1.jpg')} className='h-100 w-100 text-center'/>
                                    </Card.Body>
                                    <div>
                                        <span className="text-warning">
                                        <i className="fa fa-star"></i> 
                                            <i className="fa fa-star"></i> 
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </span>
                                            <span >
                                             <i className="fa fa-star"></i> 
                                            </span>
                                        </div>
                                    <p>Wonderful bouquet of roses</p>
                                    <p>Price: 22$</p>
                                </Card>
                            </Link>
                        </div>
                        <div>
                            <Link to="">
                                <Card>
                                    <Card.Body>
                                        <img alt="Category item" src={require('../../assets/images/bouqute2.jpg')}  className='h-100 w-100 text-center'/>
                                    </Card.Body>
                                    <div>
                                        <span className="text-warning">
                                        <i className="fa fa-star"></i> 
                                            <i className="fa fa-star"></i> 
                                            <i className="fa fa-star"></i>
                                        </span>
                                            <span >
                                            <i className="fa fa-star"></i>
                                             <i className="fa fa-star"></i> 
                                            </span>
                                        </div>
                                    <p>Wonderful bouquet of roses</p>
                                    <p>Price: 20$</p>
                                </Card>
                            </Link>
                        </div>
                        <div>
                            <Link to="">
                                <Card>
                                    <Card.Body>
                                        <img alt="Category item" src={require('../../assets/images/bouqute3.jpg')} className='h-100 w-100 text-center'/>
                                    </Card.Body>
                                    <div>
                                        <span className="text-warning">
                                        <i className="fa fa-star"></i> 
                                            <i className="fa fa-star"></i> 
                                            <i className="fa fa-star"></i>
                                        </span>
                                            <span >
                                            <i className="fa fa-star"></i>
                                             <i className="fa fa-star"></i> 
                                            </span>
                                        </div>
                                    <p>Wonderful bouquet of roses</p>
                                    <p>Price: 18$</p>
                                </Card>
                            </Link>
                        </div>
                        <div>
                            <Link to="">
                                <Card>
                                    <Card.Body>
                                        <img alt="Category item" src={require('../../assets/images/bouqute4.jpg')}  className='h-100 w-100 text-center'/>
                                    </Card.Body>
                                    <div>
                                        <span className="text-warning">
                                        <i className="fa fa-star"></i> 
                                            <i className="fa fa-star"></i> 
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i> 
                                        </span>
                                        </div>
                                    <p>Wonderful bouquet of roses</p>
                                    <p>Price: 22$</p>
                                </Card>
                            </Link>
                        </div>

                    </Slider>                    
                </Row>
            </Container>
        </Fragment>
      </div>
    )
  }
}

export default NewArrival
