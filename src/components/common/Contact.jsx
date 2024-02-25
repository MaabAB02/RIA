import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';

export class Contact extends Component {
  render() {
    return (
      <Fragment>
        <Container>
            <Row>
                <Col className="shadow-sm bg-white mt-2" lg={12} md={12} sm={12} xs={12}>
                    <Row className='text-center'>
                        <Col className="p-0 m-0" lg={6} md={6} sm={6} xs={6}>
                            <br /><br /><br />
                            <p>You can reach out our office nearby the 4th road</p>
                            <iframe title='FIT Location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3370.499430953056!2d15.065045976123763!3d32.35214530557691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13a14d7b53a4c849%3A0x5be62dabe219f93c!2z2YPZhNmK2Kkg2KrZgtmG2YrYqSDYp9mE2YXYudmE2YjZhdin2KogRmFjdWx0eSBvZiBJbmZvcm1hdGlvbiBUZWNobm9sb2d5!5e0!3m2!1sen!2sly!4v1706616456605!5m2!1sen!2sly" width="600" height="450" styles="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </Col>
                        <Col className="d-flex justify-content-center mt-5" lg={6} md={6} sm={6} xs={6}>
                            <Form id="contactForm" className="onboardForm" rows="4" cols="50">
                            <br /><br /><br />
                                <h4 className='section-title-login'>Contact us</h4>
                                <h6 className='section-sub-title'>Please contact us through the form</h6>
                                <input type="text" className='form-control m-2' placeholder='Enter your Name' />
                                <input type="text" className='form-control m-2' placeholder='Enter your Email' />
                                <Form.Control className="form-control m-2" as="textarea" rows={3} placeholder="Your Message" />
                                <Button id="sendBtn" variant="warning" type="submit" className="btn btn-block m-2 site-btn-login">Send</Button>
                            </Form>
                        </Col>
                    </Row>        
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Contact
