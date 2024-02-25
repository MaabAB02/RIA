import React, { Component } from 'react';
import {Accordion, ListGroup} from 'react-bootstrap';

export class SideBarMenu extends Component {
  render() {
    return (
      <div>
        <br /><br /><br />
        <Accordion >
            <Accordion.Item eventKey="0">
                <Accordion.Header><img alt="Category item" src={require('../../assets/images/flower-cat1.png')} width={25} height={25}/>One rose</Accordion.Header>
                <Accordion.Body>
                <ListGroup>
                   <button type="button"><ListGroup.Item action href="#link2">with tiny flower</ListGroup.Item></button> 
                   <button type="button"><ListGroup.Item action href="#link3">without tiny flower</ListGroup.Item></button>
                </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header><img alt="Category item" src={require('../../assets/images/flower-cat2.png')} width={25} height={25}/>Bouquet</Accordion.Header>
                <Accordion.Body>
                <ListGroup>
                   <button type="button"><ListGroup.Item action href="#link2">with tiny flower</ListGroup.Item></button> 
                   <button type="button"><ListGroup.Item action href="#link3">without tiny flower</ListGroup.Item></button>
                </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header><img alt="Category item" src={require('../../assets/images/flower-cat3.png')} width={25} height={25}/>cover</Accordion.Header>
                <Accordion.Body>
                <ListGroup>
                   <button type="button"><ListGroup.Item action href="#link2">with tiny flower</ListGroup.Item></button> 
                   <button type="button"><ListGroup.Item action href="#link3">without tiny flower</ListGroup.Item></button>
                </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
            
        
            
            <Accordion.Item eventKey="5">
                <Accordion.Header><img alt="Category item" src={require('../../assets/images/other-cat4.png')} width={25} height={25}/>Other</Accordion.Header>
                <Accordion.Body>
                <ListGroup>
                    <ListGroup.Item action href="#link2">No style</ListGroup.Item>
                    <ListGroup.Item action href="#link3">No style</ListGroup.Item>
                    <ListGroup.Item action href="#link4">No style</ListGroup.Item>
                </ListGroup>
                </Accordion.Body>
            </Accordion.Item>

        </Accordion>
   
      </div>
    )
  }
}

export default SideBarMenu
