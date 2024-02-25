import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Card, Button, Form} from 'react-bootstrap';

export class CartList extends Component {
  render() {
    return (
      <Fragment>
        <Container>
            <Row>
                <Col className='p-1' lg={7} md={7} sm={12} xs={12}>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col lg={3} md={3} sm={6} xs={6}>
                                    <img src="" />
                                </Col>
                                <Col lg={6} md={6} sm={7} xs={7}>
                                    <h5>Product Name</h5>
                                    <h6>Quantity = 7</h6>
                                    <p>Large | Red</p>
                                    <h6>Price = 10 x 7 = 10$</h6>
                                </Col>
                                <Col lg={3} md={3} sm={2} xs={2}>
                                    <Button className='btn mt-2 mx-1 btn-lg site-btn'><i className='fa fa-trash-alt'></i></Button>
                                    <Button className='btn mt-2 mx-1 btn-lg site-btn'><i className='fa fa-plus'></i></Button>
                                    <Button className='btn mt-2 mx-1 btn-lg site-btn'><i className='fa fa-minus'></i></Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col lg={3} md={3} sm={6} xs={6}>
                                    <img src="" />
                                </Col>
                                <Col lg={6} md={6} sm={7} xs={7}>
                                    <h5>Product Name</h5>
                                    <h6>Quantity = 7</h6>
                                    <p>Large | Red</p>
                                    <h6>Price = 10 x 7 = 10$</h6>
                                </Col>
                                <Col lg={3} md={3} sm={2} xs={2}>
                                    <Button className='btn mt-2 mx-1 btn-lg site-btn'><i className='fa fa-trash-alt'></i></Button>
                                    <Button className='btn mt-2 mx-1 btn-lg site-btn'><i className='fa fa-plus'></i></Button>
                                    <Button className='btn mt-2 mx-1 btn-lg site-btn'><i className='fa fa-minus'></i></Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='p-1' lg={5} md={5} sm={12} xs={12}>
                    <Card>
                        <Card.Header>
                            <h6 className="text-center">Your information</h6>
                        </Card.Header>

                        <Card.Body>
                            <Container fluid={true}>
                                <Row>
                                    <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                        <label className="form-label">Choose City</label>
                                        <select className="form-control">
                                            <option value="" disabled>Choose</option>
                                            <option value="Istanbul">Tripoli</option>
                                            <option value="Bursa">Misrata </option>
                                            <option value="Konya">Sirte </option>
                                            <option value="Izmir">Benghazi </option>
                                            <option value="Ankara">Tubreq </option>
                                        </select>
                                    </div>
                                    <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                        <label className="form-label">Choose Payment Method</label>
                                        <select className="form-control">
                                            <option value="" disabled>Choose</option>
                                            <option value="Istanbul">Cache</option>
                                            <option value="Bursa">Mastercard </option>
                                        </select>
                                    </div>

                                    <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                        <label className="form-label">Your Name</label>
                                        <input  className="form-control" type="text" placeholder="your name" />
                                    </div>


                                    <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                        <label className="form-label">Delivery Address</label>
                                        <textarea  rows={2} className="form-control" type="text" placeholder="your Address" />
                                    </div>
                                    <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                        <button  className="btn  site-btn"> confirm order </button>
                                    </div>
                                </Row>
                            </Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default CartList
