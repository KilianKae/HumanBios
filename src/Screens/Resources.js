import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Home.css';
import './More.css';

import logo from '../img/logo.png';

function Resources() {
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
          <Col md={3} sm={12} className='contentCol'>
            <a
              className='moreLink'
              href='https://notes.status.im/d6mDFuFhRbCsgR-vLUz7Rw'
            >
              <h3 className='moreText'>Heuristic</h3>
            </a>
            <a
              className='moreLink'
              href='https://notes.status.im/_zy_XbciTQqQDzVrnTJ7TA?edit'
            >
              <h3 className='moreText'>Bot Spec</h3>
            </a>
            <a
              className='moreLink'
              href='https://hackmd.io/p0vKHdtAR4C1ygXadeTncA'
            >
              <h3 className='moreText'>Spec Migration</h3>
            </a>
          </Col>
          <Col
            md={{ span: 7, offset: 2 }}
            sm={12}
            className='contentCol textContainer'
          >
            <h3 className='subtitle'>How do you calm someone down?</h3>
            <p class='block_1'>
              The best way to calm a person is to listen to them. Ask them how
              they are. Don't try to talk them out of their worries and don't
              play them down. Someone who is worried does not need a lesson in
              statistics, but an open heart!
            </p>
            <p class='block_1'>Make short sentences.</p>
            <p class='block_1'>Do not leave the person alone.</p>
            <p class='block_1'>
              Make eye contact and show that you are listening.
            </p>
            <p class='block_1'>
              Ask questions from time to time to better understand what the
              person is afraid of.
            </p>
            <ul class='list_'>
              <li class='block_2'>
                Does the person belong to a risk group and is afraid of dying
                from an infection?
              </li>
              <li class='block_3'>
                Do they have parents or grandparents they care about?
              </li>
              <li class='block_3'>
                Do they fear that the health care system will be overburdened
                and finally break down?
              </li>
              <li class='block_3'>
                Do they fear shortages of medicines or food?
              </li>
              <li class='block_3'>
                Did they lose their job or are they afraid of an economic
                recession in general?
              </li>
              <li class='block_4'>Or all of these together?</li>
            </ul>
            <p class='block_1'>
              All these fears and worries are shared by many people. Make the
              person feel that it is okay that they are scared and that you will
              stay with them. Tell them that you are sometimes scared too, but
              don't start talking about your own fears. It's your turn to listen
              right now. Let the person talk.
            </p>
            <p class='block_1'>Let the person talk.</p>
            <p class='block_1'>
              Ask open questions, like "What's scaring you?" instead of "Are you
              scared?" Find out what the person wants to protect, what they fear
              to lose.
            </p>
            <p class='block_1'>
              Don't ask questions about why or how, like, "Why does this bother
              you?" This can create pressure to find a good explanation or
              justification.
            </p>
            <p class='block_1'>
              If you feel comfortable with this, you can repeat from time to
              time in your own words what the person said and ask whether you
              understood it correctly. Try to focus on feelings in particular -
              the anger, the sadness, the despair.
            </p>
            <p class='block_1'>
              Make sure that the person can express everything that is going on
              inside them. Keep asking questions and encourage them to think the
              worries through.
            </p>
            <p class='block_1'>
              If you feel that they really told everything, ask them what would
              be good for them now. Also ask them what you could do to make them
              feel better. Sometimes there's something concrete you can do. It
              may feel like nothing is helping that person right now. You should
              embrace that feeling. Do not try to get rid of it, for example by
              giving good advice. Remember: It helps that you are there for
              them! Offer to get back to them after a certain time and ask them
              what they will do until then.
            </p>
            <p class='block_1'>
              If you have promised to get back in touch, make sure you keep it.
              If you feel unwell after the conversation, pick up the phone and
              talk to a friend. Because fear separates us. When we connect with
              others, it gets smaller.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Resources;
