import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Home.css';
import './More.css';

import logo from '../img/logo.png';

function Home() {
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
              im, [remove links pls] Google hangout). Sufficient redundancy and
              the use of pre-existing software will allow rapid deployment at
              large scale to provide a stable environment for caretaking
              personnel to perform their tasks while in quarantine or remotely.
              This will minimize the exposure to the virus, in both directions
              between personal and patient.
            </p>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className='contentCol textContainer'>
            <h3 className='subtitle'>Wie beruhigt man jemanden?</h3>
            <p class='block_1'>
              Du beruhigst eine Person am besten, indem du ihr zuhörst. Frag
              sie, wie es ihr geht. Versuche nicht, ihr die Sorgen auszureden
              und spiele sie nicht herunter. Jemand, der beunruhigt ist, braucht
              keine Statistiken, sondern ein offenes Ohr!
            </p>
            <p class='block_1'>Mach kurze Sätze.</p>
            <p class='block_1'>Lass die Person nicht allein.</p>
            <p class='block_1'>Halte Augenkontakt und zeig, dass du zuhörst.</p>
            <p class='block_1'>
              Stell ab und zu Nachfragen, mit dem Ziel, noch besser zu
              verstehen, wovor die Person Angst hat.
            </p>
            <ul class='list_'>
              <li class='block_2'>
                Gehört sie selbst einer Risikogruppe an und befürchtet an einer
                Infektion zu sterben?
              </li>
              <li class='block_3'>
                Hat sie Eltern oder Großeltern, um die sie sich sorgt?
              </li>
              <li class='block_3'>
                Befürchtet sie, dass das Gesundheitssystem überlastet wird und
                es zu einem Notstand kommt?
              </li>
              <li class='block_3'>
                Befürchtet sie Engpässe bei Medikamenten oder Nahrungsmitteln?
              </li>
              <li class='block_3'>
                Hat sie ihre Arbeit verloren oder fürchtet allgemein eine
                wirtschaftliche Rezession?
              </li>
              <li class='block_4'>Oder all das zusammen?</li>
            </ul>
            <p class='block_1'>
              Alle diese Ängste und Sorgen werden von vielen Menschen geteilt.
              Gib der Person das Gefühl, dass es okay ist, dass sie Angst hat,
              und dass du bei ihr bleibst. Sag ihr, dass du auch manchmal Angst
              hast, aber fang nicht an, über deine eigenen Ängste zu reden. Du
              bist jetzt gerade mit Zuhören dran.
            </p>
            <p class='block_1'>Lass die Person reden.</p>
            <p class='block_1'>
              Stell <i class='calibre1'>offene</i> Fragen, z.B. „Was macht dir
              Angst?“ statt „Hast du Angst?“ Finde heraus, was die Person
              beschützen möchte, was sie befürchtet, zu verlieren.
            </p>
            <p class='block_1'>
              Stell keine Fragen mit <i class='calibre1'>warum</i> oder{' '}
              <i class='calibre1'>wieso</i>, z.B. nicht „Wieso beunruhigt dich
              das?“ Das kann Druck erzeugen, jetzt eine gute Erklärung oder
              Begründung finden zu müssen.
            </p>
            <p class='block_1'>
              Wenn du dich damit wohlfühlst, kannst du von Zeit zu Zeit in
              deinen eigenen Worten wiederholen, was die Person gesagt hat und
              fragen, ob du es so richtig verstanden hast. Versuch dabei,
              besonders die Gefühle aufzugreifen &ndash; die Wut, die Trauer,
              die Verzweiflung.
            </p>
            <p class='block_1'>
              Stell sicher, dass die Person alles loswerden kann, was in ihr
              vorgeht. Frag immer weiter nach und ermutige sie, die Sorgen zu
              Ende zu denken.
            </p>
            <p class='block_1'>
              Wenn du das Gefühl hast, dass sie wirklich alles sagen konnte,
              frag sie, was ihr jetzt guttun würde. Frag sie auch, was du tun
              könntest, damit es ihr besser geht. Manchmal gibt es etwas
              Konkretes, das du tun kannst.
            </p>
            <p class='block_1'>
              Es kann das Gefühl aufkommen, dass der Person gerade gar nichts
              hilft. Dieses Gefühl kann man aushalten. Versuche nicht, es
              wegzumachen, z.B. indem du gute Ratschläge gibst. Denk daran: Es
              hilft der Person schon, dass du überhaupt für sie da bist!
            </p>
            <p class='block_1'>
              Biete an, dass du dich nach einer bestimmten Zeit wieder bei ihr
              meldest und frag sie, was sie bis dahin tun wird.
            </p>
            <p class='block_1'>
              Wenn du versprochen hast, dich noch einmal zu melden, halte es
              unbedingt ein.
            </p>
            <p class='block_1'>
              Falls es dir nach dem Gespräch nicht gut geht, nimm das Telefon
              und vertraue dich selbst jemandem an. Denn Angst trennt. Sie wird
              kleiner, wenn wir uns mit anderen verbinden.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
