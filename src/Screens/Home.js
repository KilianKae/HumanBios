import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Home.css';
import ImageLink from '../Components/ImageLink';

import logo from '../img/logo.png';

import facebook from '../img/facebook.png';
import telegram from '../img/telegram.png';
import whatsapp from '../img/whatsapp.png';
import paypal from '../img/paypal.png';

function Home() {
  return (
    <div className='landing-container'>
      <Container>
        <Row className='logoRow'>
          <Col>
            <Image className='logo' src={logo} />
          </Col>
        </Row>
        <Row className='titleRow'>
          <Col>
            <h1 className='title'>Human Bios</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={3} sm={12} className='contentCol'>
            <h3 className='subtitle'>Project</h3>
            <p className='projectText'>
              During the corona pandemic, care taking personal has to be
              protected. They are our best chance for healing, but face the same
              risks as everyone. The Human Bios Project will connect people over
              the internet with social workers, nurses, medical students and
              doctors to help them as much as possible while everyone stays safe
              at home.
            </p>
            <Link className='moreLink' to='/more'>
              <h3 className='moreText'>More</h3>
            </Link>
          </Col>
          <Col lg={{ span: 4, offset: 2 }} sm={12} className='contentCol'>
            <h3 className='subtitle'>Links</h3>
            <ImageLink name='Facebook' logo={facebook} />
            <ImageLink name="What's App" logo={whatsapp} />
            <ImageLink name='Telegram' logo={telegram} />
          </Col>
          <Col lg={3} sm={12} className='contentCol'>
            <h3 className='subtitle'>Donate</h3>
            <ImageLink name='Pay Pal' logo={paypal} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
