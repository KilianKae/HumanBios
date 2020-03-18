import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Home.css';
import ImageLink from '../Components/ImageLink';
import { copyToClipboard } from '../Utils/copyUtil';

import logo from '../img/logo.png';

import facebook from '../img/facebook.png';
import telegram from '../img/telegram.png';
import whatsapp from '../img/whatsapp.png';
import paypal from '../img/paypal.png';
import ethereum from '../img/ethereum.png';
import mail from '../img/mail.png';
import bitcoin from '../img/bitcoin.png';

const etherAddress = '0xA5c72fED11FfC3b2A1dAff7d4cE6Ce5204e1ed03';
const bitcoinAddress = 'bc1qflh35vx3wc6qayten35u3fl59teduhfmk3q5n7';

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
            <Link className='moreLink' to='/research'>
              <h3 className='moreText'>Research</h3>
            </Link>
            <Link className='moreLink' to='/impressum'>
              <h3 className='moreText'>Impressum</h3>
            </Link>
          </Col>
          <Col lg={{ span: 4, offset: 2 }} sm={12} className='contentCol'>
            <h3 className='subtitle'>Links</h3>
            <ImageLink name='Facebook' logo={facebook} />
            <ImageLink
              name='WhatsApp'
              logo={whatsapp}
              link='https://chat.whatsapp.com/EDLmZGMuT5eJBkQNq5vIcn'
            />
            <ImageLink
              name='Telegram'
              logo={telegram}
              link='https://t.me/humanbios_0'
            />
          </Col>
          <Col lg={3} sm={12} className='contentCol'>
            <div>
              <h3 className='subtitle'>Donate</h3>
              <ImageLink
                name='PayPal'
                logo={paypal}
                link='http://paypal.me/humanbios'
              />
              <div
                className='copyButton'
                onClick={() => copyToClipboard(etherAddress)}
              >
                <ImageLink name='Ethereum' logo={ethereum} />
              </div>
              <div
                className='copyButton'
                onClick={() => copyToClipboard(bitcoinAddress)}
              >
                <ImageLink name='Bitcoin' logo={bitcoin} />
              </div>
            </div>
            <div className='d-none d-lg-block'>
              <h3 className='subtitle'>Contact</h3>
              <ImageLink
                name='Email'
                logo={mail}
                link='mailto:humanbiasorg@gmail.com'
              />
            </div>
          </Col>
          <Col lg={3} sm={12} className='contentCol d-lg-none d-xl-none'>
            <div>
              <h3 className='subtitle'>Contact</h3>
              <ImageLink
                name='Email'
                logo={mail}
                link='mailto:humanbiasorg@gmail.com'
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
