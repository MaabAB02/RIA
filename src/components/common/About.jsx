import React, { Component, Fragment } from 'react';
import {Container, Breadcrumb, Row, Col} from 'react-bootstrap';
export class About extends Component {
  render() {
    return (
      <Fragment>
        <Container>
            <div className="breadbody">
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="">
                        Library
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Data</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <Row className="p-2">
                <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                    <h4 className="section-title-login">Why Choose Us?</h4>
                   <p className="section-title-contact">


                    
                        We are here to explain to you the goal of our website,
                        which is how to buy a nice bouquet of roses to gift to someone dear to you,
                        and at the same time you have understood the meaning of the roses that you have chosen.
                        
                       
                        
                    </p>
                </Col>
            </Row>
        </Container>

      </Fragment>
    )
  }
}

export default About
