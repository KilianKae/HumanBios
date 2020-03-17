import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Home.css';
import './More.css';

import logo from '../img/logo.png';

function Research() {
  return (
    <div className='landing-container'>
      <Container>
        <Row className='logoRow'>
          <Col>
            <Link to='/'>
              <Image className='logo' src={logo} />
            </Link>
          </Col>
        </Row>
        <Row className='titleRow'>
          <Col>
            <h1 className='title'>Human Bios</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className='contentCol'>
            <h3 className='subtitle'>Human Bios - Research Hack Projects</h3>
            <p>humanbiasorg@gmail.com</p>
            <h3>Med-Tech</h3>
            <p>
              Can diagnosis be done without any instruments in remote locations
              with little to no medical infrastructure? [Refugee Camps]
            </p>
            <p>
              How can several stadiums of covid-19 be diagnosed, if instruments
              become gradually unavailable? [sorted by availability in “global
              standard hospital”]
            </p>
            <h3>Medicine</h3>
            <p>
              Are there alternative treatment paths, if standard medication
              becomes gradually unavailable? [sorted by availability in “global
              standard hospital”]
            </p>
            <p>
              Are there alternative treatment methods that require little to no
              specialized supplies - household remedies?
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Research;
