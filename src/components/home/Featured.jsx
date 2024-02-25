import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col, Card} from 'react-bootstrap';

export class Featured extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center mt-5" fluid>
                <div className='section-title text-center mb-55'>
                    <h2>COVER</h2>
                    <p>Some of our Exclusive Collection, You May Like</p>
                </div>
                <Row>
                    <Col className='p-0 m-2' lg={3} md={3} sm={6}>
                        <div>
                            <Link to="">
                                <Card className='card w-100'>
                                    <Card.Body>
                                        <img alt="Category item" src={require('../../assets/images/cover1.jpg')} className='h-100 w-100 text-center'/>
                                    </Card.Body>
                                    <p>Perfect cover</p>
                                    <p>Price: 5$</p>
                                </Card>
                            </Link>
                        </div>
                    </Col>
                    <Col className='p-0 m-2' lg={3} md={3} sm={6}>
                        <div>
                            <Link to="">
                                <Card card className='w-100'>
                                    <Card.Body>
                                        <img alt="Category item" src={require('../../assets/images/cover2.jpg')} className='h-100 w-100 text-center'/>
                                    </Card.Body>
                                    <p>Basic cover</p>
                                    <p>Price: 4$</p>
                                </Card>
                            </Link>
                        </div>
                    </Col>
                    <Col className='p-0 m-2' lg={3} md={3} sm={6}>
                        <div>
                            <Link to="">
                                <Card className='w-100'>
                                    <Card.Body> 
                                        <img alt="Category item" src={require('../../assets/images/cover3.jpg')} className='h-100 w-100 text-center'/>
                                    </Card.Body>
                                    <p>Perfect cover </p>
                                    <p>Price: 10$</p>
                                </Card>
                            </Link>
                        </div>
                    </Col>
                    <Col className='p-0 m-2' lg={3} md={3} sm={6}>
                        <div>
                            <Link to="">
                                <Card className='card w-100'>
                                    <Card.Body>
                                        <img alt="Category item" src={require('../../assets/images/cover4.jpg')} className='h-100 w-100 text-center'/>
                                    </Card.Body>
                                    <p>Perfect cover</p>
                                    <p>Price: 9$</p>
                                </Card>
                            </Link>
                        </div>
                    </Col>
                    <Col className='p-0 m-2' lg={3} md={3} sm={6}>
                        <div>
                            <Link to="">
                                <Card>
                                    <Card.Body className='w-100'>
                                        <img alt="Category item" src={require('../../assets/images/cover5.jpg')} className='h-100 w-100 text-center'/>
                                    </Card.Body>
                                    <p>Basic cover</p>
                                    <p>Price: 6$</p>
                                </Card>
                            </Link>
                        </div>
                    </Col>
                    <Col className='p-0 m-2' lg={3} md={3} sm={6}>
                        <div>
                            <Link to="">
                                <Card className='card w-100'>
                                    <Card.Body>
                                        <img alt="Category item" src={require('../../assets/images/cover6.jpg')} className='h-100 w-100 text-center'/>
                                    </Card.Body>
                                    <p>Perfect cover</p>
                                    <p>Price: 8$</p>
                                </Card>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container> 
      </Fragment>
    )
  }
}

export default Featured
