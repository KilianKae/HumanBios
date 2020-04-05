import React, { useState } from 'react';
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Home.css';
import ImageLink from '../Components/ImageLink';
import { copyToClipboard } from '../Utils/copyUtil';

import logo from '../img/logo.png';

import telegram from '../img/telegram.png';
import paypal from '../img/paypal.png';
import ethereum from '../img/ethereum.png';
import mail from '../img/mail.png';
import bitcoin from '../img/bitcoin.png';
import facebook from '../img/facebook.png';

const etherAddress = '0xA5c72fED11FfC3b2A1dAff7d4cE6Ce5204e1ed03';
const bitcoinAddress = 'bc1qflh35vx3wc6qayten35u3fl59teduhfmk3q5n7';
const emailLink = 'mailto:info@humanbios.org';

function Home() {
  return (
    <div className='landing-container'>
      <Container>
        <Row className='titleRow'>
          <Col>
            <h3 className='title'>Human Bios</h3>
          </Col>

          <a className='supportLink' href='https://medium.com/@humanbios/would-you-like-to-support-us-8651396cc998'>
            <div className='supportText'>Want to support?</div>
          </a>
        </Row>
        <Row className='navRow'>
          <Col lg={2} sm={12}>
            <a className='navLink' href='https://medium.com/@humanbios'>
              <h3 className='navText'>Mission</h3>
            </a>
          </Col>
          <Col lg={2} sm={12}>
            <a className='navLink'
              href='https://t.me/joinchat/KTRuxhl949aHv0atuWPtyw'>
              <h3 className='navText'>Dev Chat</h3>
            </a>
          </Col>
          <Col lg={4} sm={12}>
            <a className='botLink' href='https://t.me/HumanbiOS_bot'>
              <img className='logo' src={logo} alt=''></img>
              <span className='botText'>Try the Prototype!</span>
            </a>
          </Col>
          <Col lg={2} sm={12}>
            <a className='navLink'
              href='https://hackmd.io/p0vKHdtAR4C1ygXadeTncA?view'>
              <h3 className='navText'>Bot Spec</h3>
            </a>
          </Col>
          <Col lg={2} sm={12}>
            <a className='navLink' href='https://github.com/HumanbiOS'>
              <h3 className='navText'>Github</h3>
            </a>
          </Col>
        </Row>
        <Row className='videoRow'>
          <ReactPlayer
            className='video'
            url="https://vimeo.com/402227952"
            playing
            controls
            width='100%'
            height='100%' />
        </Row>
        <Row className='socialRow'>
          <Col lg={3} sm={12} className='contentCol'>
            <div>
              <a
                className='donateLink'
                href='https://notes.status.im/KhZ_4IFfSrmgIBONfDRI0Q?edit'>
                <h3 className='subtitle donateLinkText'>Donate</h3>
              </a>
              <ImageLink
                name='PayPal'
                logo={paypal}
                link='http://paypal.me/humanbios'
              />
              <div
                className='copyButton'
                onClick={() => copyToClipboard(etherAddress)}>
                <ImageLink name='Ethereum' logo={ethereum} />
              </div>
              <div
                className='copyButton'
                onClick={() => copyToClipboard(bitcoinAddress)}>
                <ImageLink name='Bitcoin' logo={bitcoin} />
              </div>
            </div>
          </Col>
          <Col lg={3} sm={12} className='contentCol'>
            <div>
              <h3 className='subtitle'>Contact</h3>
              <ImageLink name='Email' logo={mail} link={emailLink} />
            </div>
            <ImageLink
              name='Facebook'
              logo={facebook}
              link='https://www.facebook.com/humanbios.org'
            />
          </Col>
        </Row>
        <Row className='footer'>
          <Link className='navLink' to='/impressum'>
            <h5 className='navText' id='impressum'>Impressum</h5>
          </Link>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
