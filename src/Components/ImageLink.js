import React from 'react';
import './ImageLink.css';
import { Container, Row, Col } from 'react-bootstrap';

function ImageLink(props) {
  return (
    <Container className='linkContainer'>
      <Row className='justify-content-start'>
        <Col className='linkColLeft'>
          <img className='linkImage' fluid src={props.logo} alt='' />
          <h3 className='linkText'>{props.name}</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default ImageLink;
