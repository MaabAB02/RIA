import React, { Component, Fragment } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import HomeSlider from './HomeSlider';
import SideBarMenu from './SideBarMenu';

export class HomeTop extends Component {
  render() {
    return (
      <Fragment>
        <Container className='p-0 pt-2' fluid>
            <Row>
                <Col lg={9} md={9} sm={12} xs={12}><HomeSlider /></Col>
                <Col lg={3} md={3} sm={12} xs={12}><SideBarMenu /></Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default HomeTop
