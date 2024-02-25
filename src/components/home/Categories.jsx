import React, { Component, Fragment } from 'react';

import {Container, Row, Col, Card} from 'react-bootstrap';

import { Link } from 'react-router-dom';

export class Categories extends Component {
  render() {
    return (
      <div>
        <Fragment>
            <Container className="text-center mt-5" fluid>
                <div className='section-title text-center mb-55'>
                    <h2>CATEGORIES</h2>
                    <p>Some of our Exclusive Collection, You May Like</p>
                </div>
            </Container>
            <Row>
                <Col lg={2} md={2} sm={6}>
                    <Link to="/roses">
                        <Card className='h-100 w-100 text-center'>
                            <Card.Body>
                                <img alt="Category item" src={require('../../assets/images/flower-cat1.png')} className='h-60 w-50 text-center'/>
                                <h4>One or Two roses</h4>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col lg={2} md={2} sm={6}>
                    <Link to="/">
                        <Card className='h-100 w-100 text-center'>
                            <Card.Body>
                                <img alt="Category item" src={require('../../assets/images/flower-cat2.png')} className='h-60 w-50 text-center'/>
                                <h4>Bouquet of roses</h4>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col lg={2} md={2} sm={6}>
                    <Link to="/">
                        <Card className='h-100 w-100 text-center'>
                            <Card.Body>
                                <img alt="Category item" src={require('../../assets/images/flower-cat3.png')} className='h-60 w-50 text-center'/>
                                <h4>Bouquet with cover</h4>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col lg={2} md={2} sm={6}>
                    <Link to="/">
                        <Card className='h-100 w-100 text-center'>
                            <Card.Body>
                                <img alt="Category item" src={require('../../assets/images/other-cat4.png')} className='h-60 w-50 text-center'/>
                                <h4>Other</h4>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            </Row>
        </Fragment>
      </div>
    )
  }
}

export default Categories
