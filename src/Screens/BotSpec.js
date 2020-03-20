import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Home.css';
import './More.css';

import logo from '../img/logo.png';

function BotSpec() {
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
            <p>**Parallelize Translations, randomize translation APIs.**</p>

            <p>
              Bot asks three Questions: Are you feeling okay? No [Use local
              spelling convention, allow partial answers, Bonus: Use local
              conventions]
            </p>

            <p>
              -> Do you have a fever? Yes [allow partial responses, Bonus: Use
              local conventions] → medics
            </p>

            <p>
              Find emoticons to make the questions more emphatic [consult with
              psychologists, Bonus: Use local conventions]
            </p>

            <p>
              Are you feeling okay? No [Allow partial answers, Bonus: Use local
              conventions]
            </p>

            <p>
              Do you have a fever? No [Disallow partial responses, Bonus: Use
              local conventions] → psychologists
            </p>

            <p>
              Find emoticons to make the questions more emphatic [consult with
              psychologists, Bonus: Use local conventions]
            </p>

            <p>
              Are you feeling okay? anything else: social workers, reassess,
              redirect to psychologists, medics manually, use random round robin
              with time slotting to load balance social workers, expose the user
              to counter.
            </p>

            <p>
              Back end load balancing: Round robin with time slotting, expose
              care worker, on available medics and psychologists.
            </p>

            <p>
              Optional: Measure speed and dynamically rebalance load based on
              performance. Store Data and publish with a shift.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BotSpec;
