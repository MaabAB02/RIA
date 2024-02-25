import React, { Component, Fragment } from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

export class ResetPassword extends Component {
  render() {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col className='shadow-sm bg-white mt-2' lg={12} md={12} sm={12} xs={12}>
                        <Row className='text-center'>
                            <Col className='d-flex justify-content-center' lg={6} md={6} sm={12} xs={12}>
                                <Form>
                                    <h4 className='section-title-login'>Forget Password</h4>
                                    <input className='form-control m-2' type='number' placeholder='Enter PIN Code' />
                                    <input className='form-control m-2' type='email' placeholder='Enter your email' />
                                    <input className='form-control m-2' type='password' placeholder='Enter New Password' />
                                    <input className='form-control m-2' type='password' placeholder='Confirm new password' />
                                    <Button type="submit" className="btn btn-block m-2 site-btn-login">Set New Password</Button>
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

export default ResetPassword
