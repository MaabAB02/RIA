import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
export class UserLog extends Component {
  render() {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col className='shadow-sm bg-white mt-2' lg={12} md={12} sm={12} xs={12}>
                        <Row className='text-center'>
                            <Col className='d-flex justify-content-center' lg={6} md={6} sm={12} xs={12}>
                                <Form>
                                    <h4 className='section-title-login'>User Login</h4>
                                    <input className='form-control m-2' type='Email' placeholder='Enter your Email' />
                                    <input className='form-control m-2' type='password' placeholder='Enter your Password' />
                                    <Button type="submit" className="btn btn-block m-2 site-btn-login">Login</Button>
                                    <br /><br /><br /><br />
                                    <hr />
                                    <p><b>Forgot my Password? <Link to='/forget_password'> Forgot my password</Link></b></p>
                                    <p><b>New account <Link to='/register'> Login</Link></b></p>
                                </Form>
                            </Col>
                            <Col className='d-flex justify-content-center' lg={6} md={6} sm={12} xs={12}>
                                <img src="#" alt="New RIA" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
  }
}

export default UserLog
