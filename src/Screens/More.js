import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Home.css';
import './More.css';

import logo from '../img/logo.png';

function More() {
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
            <h3 className='subtitle'>
              Human BiOS; Mission Statement 1.0 (rolling updates)
            </h3>
            <p>
              The mission of the Human Bios Project minimizes casualties during
              the evolving corona pandemic on a best effort basis.
            </p>

            <p>
              Caretaking personal (social workers, psychologists, nurses,
              medical students, doctors, …) have to be withheld and protected.
              They are our best chance for healing but face the same risks as
              everyone.
            </p>

            <p>
              The Human Bios project aims to mobilize connect and reuse existing
              digital structures, organizations and infrastructure, set them
              into crisis mode. Available Resources will either be integrated or
              forwarded to enable caretakers to interact with their patients
              internationally without physical contact.
            </p>

            <p>
              The infrastructure will be built from existing, reusable
              components of several open and proprietary components (WeChat,
              Facebook, Telegram, Whatsapp, Discord, Skype, Riot. im, Status.
              im, Google hangout). Sufficient redundancy and the use of
              pre-existing software will allow rapid deployment at large scale
              to provide a stable environment for caretaking personnel to
              perform their tasks while in quarantine or remotely. This will
              minimize the exposure to the virus, in both directions between
              personal and patient.
            </p>
            <div>
              <iframe
                title='Phase0'
                allowfullscreen
                frameborder='0'
                style={{
                  width: '100%',
                  height: '800px'
                }}
                src='https://www.lucidchart.com/documents/embeddedchart/796e77e3-d111-4e6d-994f-a6f6d0f95bbd'
                id='ZGlIv2nLTUcz'
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default More;
