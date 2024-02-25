import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';

export class Favourite extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center mt-5" fluid>
                <div className='section-title text-center mb-55'>
                    <h2>Favourite</h2>
                    <p>Some of our Exclusive Collection, You May Like</p>
                </div>
                <Row>
                    <Col className='p-0' lg={3} md={3} sm={6}>
                        <div>
                            <Card>
                                <img alt="Category item" src={require('../../assets/images/flower-cat1.png')} className='h-100 w-100 text-center'/>
                                <Card.Body>
                                    <p>Perfect New Laptop with Process i3</p>
                                        <Button className="btn-danger btn-sm"><i className='fa fa-trash-alt'></i></Button>
                                </Card.Body>
                                
                            </Card>
                        </div>
                    </Col>
                    <Col className='p-0' lg={3} md={3} sm={6}>
                        <div>
                            <Card>
                                <img alt="Category item" src={require('../../assets/images/flower-cat2.png')} className='h-100 w-100 text-center'/>
                                <Card.Body>
                                    <p>Perfect New Laptop with Process i3</p>
                                        <Button className="btn-danger btn-sm"><i className='fa fa-trash-alt'></i></Button>
                                </Card.Body>
                                
                            </Card>
                        </div>
                    </Col>
                    <Col className='p-0' lg={3} md={3} sm={6}>
                        <div>
                            <Card>
                                <img alt="Category item" src={require('../../assets/images/flower-cat3.png')} className='h-100 w-100 text-center'/>
                                <Card.Body>
                                    <p>Perfect New Laptop with Process i3</p>
                                        <Button className="btn-danger btn-sm"><i className='fa fa-trash-alt'></i></Button>
                                </Card.Body>
                                
                            </Card>
                        </div>
                    </Col>
                    <Col className='p-0' lg={3} md={3} sm={6}>
                        <div>
                            <Card>
                                <img alt="Category item" src={require('../../assets/images/other-cat4.png')} className='h-100 w-100 text-center'/>
                                <Card.Body>
                                    <p>Perfect New Laptop with Process i3</p>
                                        <Button className="btn-danger btn-sm"><i className='fa fa-trash-alt'></i></Button>
                                </Card.Body>
                                
                            </Card>
                        </div>
                    </Col>
                    <Col className='p-0' lg={3} md={3} sm={6}>
                        <div>
                            <Card>
                                <img alt="Category item" src={require('../../assets/images/cat1.png')} className='h-100 w-100 text-center'/>
                                <Card.Body>
                                    <p>Perfect New Laptop with Process i3</p>
                                        <Button className="btn-danger btn-sm"><i className='fa fa-trash-alt'></i></Button>
                                </Card.Body>
                                
                            </Card>
                        </div>
                    </Col>
                    <Col className='p-0' lg={3} md={3} sm={6}>
                        <div>
                            <Card>
                                <img alt="Category item" src={require('../../assets/images/cat1.png')} className='h-100 w-100 text-center'/>
                                <Card.Body>
                                    <p>Perfect New Laptop with Process i3</p>
                                        <Button className="btn-danger btn-sm"><i className='fa fa-trash-alt'></i></Button>
                                </Card.Body>
                                
                            </Card>
                        </div>
                    </Col>
                    <Col className='p-0' lg={3} md={3} sm={6}>
                        <div>
                            <Card>
                                <img alt="Category item" src={require('../../assets/images/cat1.png')} className='h-100 w-100 text-center'/>
                                <Card.Body>
                                    <p>Perfect New Laptop with Process i3</p>
                                        <Button className="btn-danger btn-sm"><i className='fa fa-trash-alt'></i></Button>
                                </Card.Body>
                                
                            </Card>
                        </div>
                    </Col>
                    <Col className='p-0' lg={3} md={3} sm={6}>
                        <div>
                            <Card>
                                <img alt="Category item" src={require('../../assets/images/cat1.png')} className='h-100 w-100 text-center'/>
                                <Card.Body>
                                    <p>Perfect New Laptop with Process i3</p>
                                        <Button className="btn-danger btn-sm"><i className='fa fa-trash-alt'></i></Button>
                                </Card.Body>
                                
                            </Card>
                        </div>
                    </Col>
                    <Col className='p-0' lg={3} md={3} sm={6}>
                        <div>
                            <Card>
                                <img alt="Category item" src={require('../../assets/images/cat1.png')} className='h-100 w-100 text-center'/>
                                <Card.Body>
                                    <p>Perfect New Laptop with Process i3</p>
                                        <Button className="btn-danger btn-sm"><i className='fa fa-trash-alt'></i></Button>
                                </Card.Body>
                                
                            </Card>
                        </div>
                    </Col>
                    <Col className='p-0' lg={3} md={3} sm={6}>
                        <div>
                            <Card>
                                <Card.Body>
                                    <img alt="Category item" src={require('../../assets/images/cat1.png')} className='h-100 w-100 text-center'/>
                                </Card.Body>
                                <p>Perfect New Laptop with Process i3</p>
                                <p>Price: 100$</p>
                            </Card>
                        </div>
                    </Col>
                    <Col className='p-0' lg={3} md={3} sm={6}>
                        <div>
                            <Card>
                                <img alt="Category item" src={require('../../assets/images/cat1.png')} className='h-100 w-100 text-center'/>
                                <Card.Body>
                                    <p>Perfect New Laptop with Process i3</p>
                                        <Button className="btn-danger btn-sm"><i className='fa fa-trash-alt'></i></Button>
                                </Card.Body>
                                
                            </Card>
                        </div>
                    </Col>
                    <Col className='p-0' lg={3} md={3} sm={6}>
                        <div>
                            <Card>
                                <Card.Body>
                                    <img alt="Category item" src={require('../../assets/images/cat3.png')} className='h-100 w-100 text-center'/>
                                </Card.Body>
                                <p>Perfect New Laptop with Process i3</p>
                                <p>Price: 100$</p>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>   
      </Fragment>
    )
  }
}

export default Favourite
