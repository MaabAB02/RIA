import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
export class Footer extends Component {
  render() {
    return (
      <Fragment>
        <div className="bg-light text-warning">
            <Container >
                <Row>
                    <Col className='p-2' lg={3} md={3} sm={6}>
                        <h5>Contact us</h5>
                      
                        <a href="/"><Button variant="outline"><i className='fab mt-4 m-2 h4 fa-facebook' ></i></Button></a>
                        <a href="/"><Button variant="outline"><i className='fab mt-4 m-2 h4 fa-instagram'></i></Button></a>
                        <a href="/"><Button variant="outline"><i className='fab mt-4 m-2 h4 fa-twitter'></i></Button></a>
                        <a href="/"><Button variant="outline"><i className='fab mt-4 m-2 h4 fa-youtube'></i></Button></a>
                    </Col>
                    <Col className='p-2' lg={3} md={3} sm={6}>
                        <h5>More Information</h5>
                        <p><Button variant="warning">Purchase Police</Button></p>
                        <p><Button variant="warning">Privacy Policy</Button></p>
                        <p><Button variant="warning">Refund Policy</Button></p>

                    </Col>
                    <Col className='p-2' lg={3} md={3} sm={6}>
                        <h5>About Shop</h5>
                        <p><Link to="/about"><Button variant="warning">About us</Button></Link></p>
                        <p><Link to="/contact_us"><Button variant="warning">Contact us</Button></Link></p>
                    </Col>
                    <Col className='p-2' lg={3} md={3} sm={6}>
                        <h5>Shop  Address</h5>
                        <p>Spring flower near to Faculty of Engineering - Misrata, Libya</p>
                        <span><i className='fa fa-envelope'></i> info@xxx.xx</span>
                    </Col>
                </Row>
                <h5 className='address'>Change Language</h5><br /><br />
                <div id="google_translate_element"></div>
            </Container>
            <Container fluid className='text-center m-0 pt-3 pb-1 bg-light text-black'>
                <Row>
                    <h6>I hope you enjoy with the website '-'</h6>
                </Row>
            </Container>
        </div>
      </Fragment>
    )
  }
}

export default Footer
