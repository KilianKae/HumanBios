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
              href='https://hackmd.io/52ptNl2QTQSn-MI_AWORog?both'
            >
              <h3 className='moreText'>Emergency Heuristic</h3>
            </a>
          </Col>
          <Col
            md={{ span: 7, offset: 2 }}
            sm={12}
            className='contentCol textContainer'
          >
            <h3 className='subtitle'>How do you calm someone down?</h3>
            <p>
              The best way to calm a person is to listen to them. Ask them how
              they are. Don't try to talk them out of their worries and don't
              play them down. Someone who is worried does not need a lesson in
              statistics, but an open heart!
            </p>
            <p>Make short sentences.</p>
            <p>Do not leave the person alone.</p>
            <p>Make eye contact and show that you are listening.</p>
            <p>
              Ask questions from time to time to better understand what the
              person is afraid of.
            </p>
            <ul>
              <li>
                Does the person belong to a risk group and is afraid of dying
                from an infection?
              </li>
              <li>Do they have parents or grandparents they care about?</li>
              <li>
                Do they fear that the health care system will be overburdened
                and finally break down?
              </li>
              <li>Do they fear shortages of medicines or food?</li>
              <li>
                Did they lose their job or are they afraid of an economic
                recession in general?
              </li>
              <li>Or all of these together?</li>
            </ul>
            <p>
              All these fears and worries are shared by many people. Make the
              person feel that it is okay that they are scared and that you will
              stay with them. Tell them that you are sometimes scared too, but
              don't start talking about your own fears. It's your turn to listen
              right now. Let the person talk.
            </p>
            <p>Let the person talk.</p>
            <p>
              Ask open questions, like "What's scaring you?" instead of "Are you
              scared?" Find out what the person wants to protect, what they fear
              to lose.
            </p>
            <p>
              Don't ask questions about why or how, like, "Why does this bother
              you?" This can create pressure to find a good explanation or
              justification.
            </p>
            <p>
              If you feel comfortable with this, you can repeat from time to
              time in your own words what the person said and ask whether you
              understood it correctly. Try to focus on feelings in particular -
              the anger, the sadness, the despair.
            </p>
            <p>
              Make sure that the person can express everything that is going on
              inside them. Keep asking questions and encourage them to think the
              worries through.
            </p>
            <p>
              If you feel that they really told everything, ask them what would
              be good for them now. Also ask them what you could do to make them
              feel better. Sometimes there's something concrete you can do. It
              may feel like nothing is helping that person right now. You should
              embrace that feeling. Do not try to get rid of it, for example by
              giving good advice. Remember: It helps that you are there for
              them! Offer to get back to them after a certain time and ask them
              what they will do until then.
            </p>
            <p>
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
