import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Home.css';
import './More.css';

import logo from '../img/logo.png';

function Impressum() {
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
            <h1>Impressum</h1>
            <p>Informationspflicht laut § 5 TMG.</p>
            <p>
              Manifold UG (haftungsbeschränkt)
              <br />
              Arnulfstraße 140, Stiege 1 Tür 1,
              <br />
              80634 München,
              <br />
              Deutschland
              <span
                id='7ee9660d9736cb306fb72a3255b1bbc2-951716524678568'
                data-type=''
                title='Anonymous'
                class='cp-cursor-position'
                style={{
                  borderColor: 'rgb(211, 121, 82)',
                  backgroundColor: 'rgb(211, 121, 82)'
                }}
              ></span>
              <br />
            </p>
            <p>
              <strong>UID-Nummer:</strong> DE12345678
              <br />
              <strong>Wirtschafts-ID:</strong> DE123456789
              <br />
              <strong>Register:</strong> Handelsregister
              <br />
              <strong>Registernummer:</strong> HRB 240199
              <br />
              <strong>Registergericht:</strong> Amtsgerichts München
            </p>
            <p>
              <strong>Tel.:</strong> 01704480398
              <br />
              <strong>E-Mail:</strong>{' '}
              <a
                data-cke-saved-href='mailto:humansbiasorg@gmail.com'
                href='mailto:humansbiasorg@gmail.com'
              >
                humansbiasorg@gmail.com
              </a>
            </p>
            <p>
              <strong>Aufsichtsbehörde</strong>
              <br />
              Industrie- und Handelskammer für München und Oberbayern
            </p>
            <p>
              <strong>Geschäftsführer</strong>
              <br />
              Tobias Heldt
            </p>
            <p>
              Quelle: Erstellt&nbsp;mit dem{' '}
              <a
                data-cke-saved-href='https://www.adsimple.de/impressum-generator/'
                href='https://www.adsimple.de/impressum-generator/'
                rel='follow'
                style={{ textDecoration: 'none' }}
                title='Impressum Generator Deutschland'
              >
                Impressum Generator
              </a>{' '}
              von AdSimple&nbsp;in Kooperation mit{' '}
              <a
                data-cke-saved-href='https://www.hashtagbeauty.de'
                href='https://www.hashtagbeauty.de'
                rel='follow'
              >
                hashtagbeauty.de
              </a>
            </p>
            <h2>EU-Streitschlichtung</h2>
            <p>
              Gemäß Verordnung über Online-Streitbeilegung in
              Verbraucherangelegenheiten (ODR-Verordnung) möchten wir Sie über
              die Online-Streitbeilegungsplattform (OS-Plattform) informieren.
              <br />
              Verbraucher haben die Möglichkeit, Beschwerden an die Online
              Streitbeilegungsplattform der Europäischen Kommission unter{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&amp;lng=DE'
                href='https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&amp;lng=DE'
                rel='noopener'
              >
                http://ec.europa.eu/odr?tid=321162594
              </a>{' '}
              zu richten. Die dafür notwendigen Kontaktdaten finden Sie oberhalb
              in unserem Impressum.
            </p>
            <p>
              Wir möchten Sie jedoch darauf hinweisen, dass wir nicht bereit
              oder verpflichtet sind, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
            <h2>Haftung für Inhalte dieser Website</h2>
            <p>
              Wir entwickeln die Inhalte dieser Webseite ständig weiter und
              bemühen uns korrekte und aktuelle Informationen bereitzustellen.
              Laut Telemediengesetz{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://www.gesetze-im-internet.de/tmg/__7.html?tid=321162594'
                href='https://www.gesetze-im-internet.de/tmg/__7.html?tid=321162594'
                rel='noopener'
              >
                (TMG) §7 (1)
              </a>{' '}
              sind wir als Diensteanbieter für eigene Informationen, die wir zur
              Nutzung bereitstellen, nach den allgemeinen Gesetzen
              verantwortlich. Leider können wir keine Haftung für die
              Korrektheit aller Inhalte auf dieser Webseite übernehmen, speziell
              für jene die seitens Dritter bereitgestellt wurden. Als
              Diensteanbieter im Sinne der §§ 8 bis 10 sind wir nicht
              verpflichtet, die von ihnen übermittelten oder gespeicherten
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Unsere Verpflichtungen zur Entfernung von Informationen oder zur
              Sperrung der Nutzung von Informationen nach den allgemeinen
              Gesetzen aufgrund von gerichtlichen oder behördlichen Anordnungen
              bleiben auch im Falle unserer Nichtverantwortlichkeit nach den §§
              8 bis 10 unberührt.
            </p>
            <p>
              Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen,
              bitte wir Sie uns umgehend zu kontaktieren, damit wir die
              rechtswidrigen Inhalte entfernen können. Sie finden die
              Kontaktdaten im Impressum.
            </p>
            <h2>Haftung für Links auf dieser Website</h2>
            <p>
              Unsere Webseite enthält Links zu anderen Webseiten für deren
              Inhalt wir nicht verantwortlich sind. Haftung für verlinkte
              Websites besteht für uns nicht, da wir keine Kenntnis
              rechtswidriger Tätigkeiten hatten und haben, uns solche
              Rechtswidrigkeiten auch bisher nicht aufgefallen sind und wir
              Links sofort entfernen würden, wenn uns Rechtswidrigkeiten bekannt
              werden.
            </p>
            <p>
              Wenn Ihnen rechtswidrige Links auf unserer Website auffallen,
              bitte wir Sie uns zu kontaktieren. Sie finden die Kontaktdaten im
              Impressum.
            </p>
            <h2>Urheberrechtshinweis</h2>
            <p>
              Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos)
              unterliegen dem Urheberrecht der Bundesrepublik Deutschland. Bitte
              fragen Sie uns bevor Sie die Inhalte dieser Website verbreiten,
              vervielfältigen oder verwerten wie zum Beispiel auf anderen
              Websites erneut veröffentlichen. Falls notwendig, werden wir die
              unerlaubte Nutzung von Teilen der Inhalte unserer Seite rechtlich
              verfolgen.
            </p>
            <p>
              Sollten Sie auf dieser Webseite Inhalte finden, die das
              Urheberrecht verletzen, bitten wir Sie uns zu kontaktieren.
            </p>
            <h2>Bildernachweis</h2>
            <p>
              Die Bilder, Fotos und Grafiken auf dieser Webseite sind
              urheberrechtlich geschützt.
            </p>
            <p>
              Die Bilderrechte liegen bei den folgenden Fotografen und
              Unternehmen:
            </p>
            <ul>
              <li>Fotograf Mustermann</li>
            </ul>
            <h1>Datenschutzerklärung</h1>
            <h2>Datenschutz</h2>
            <p>
              Wir haben diese Datenschutzerklärung (Fassung
              16.03.2020-321162594) verfasst, um Ihnen gemäß der Vorgaben der{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679&amp;tid=321162594'
                href='https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679&amp;tid=321162594'
                rel='noopener'
              >
                Datenschutz-Grundverordnung (EU) 2016/679
              </a>{' '}
              zu erklären, welche Informationen wir sammeln, wie wir Daten
              verwenden und welche Entscheidungsmöglichkeiten Sie als Besucher
              dieser Webseite haben.
            </p>
            <p>
              Leider liegt es in der Natur der Sache, dass diese Erklärungen
              sehr technisch klingen, wir haben uns bei der Erstellung jedoch
              bemüht die wichtigsten Dinge so einfach und klar wie möglich zu
              beschreiben.
            </p>
            <h2>Cookies</h2>
            <p>
              Unsere Website verwendet HTTP-Cookies um nutzerspezifische Daten
              zu speichern.
              <br />
              Im Folgenden erklären wir, was Cookies sind und warum Sie genutzt
              werden, damit Sie die folgende Datenschutzerklärung besser
              verstehen.
            </p>
            <h3>Was genau sind Cookies?</h3>
            <p>
              Immer wenn Sie durch das Internet surfen, verwenden Sie einen
              Browser. Bekannte Browser sind beispielsweise Chrome, Safari,
              Firefox, Internet Explorer und Microsoft Edge. Die meisten
              Webseiten speichern kleine Text-Dateien in Ihrem Browser. Diese
              Dateien nennt man Cookies.
            </p>
            <p>
              Eines ist nicht von der Hand zu weisen: Cookies sind echt
              nützliche Helferlein. Fast alle Webseiten verwenden&nbsp;Cookies.
              Genauer gesprochen sind es HTTP-Cookies, da es auch noch
              andere&nbsp;Cookies für andere Anwendungsbereiche gibt.
              HTTP-Cookies&nbsp;sind kleine Dateien, die von unserer Website auf
              Ihrem Computer gespeichert werden. Diese Cookie-Dateien werden
              automatisch im Cookie-Ordner, quasi dem “Hirn” Ihres Browsers,
              untergebracht. Ein Cookie besteht aus einem Namen und einem Wert.
              Bei der Definition eines Cookies müssen zusätzlich ein oder
              mehrere Attribute angegeben werden.
            </p>
            <p>
              Cookies&nbsp;speichern gewisse Nutzerdaten von Ihnen, wie
              beispielsweise Sprache oder persönliche Seiteneinstellungen. Wenn
              Sie unsere Seite wieder aufrufen, übermittelt Ihr Browser die
              „userbezogenen“ Informationen an unsere Seite zurück. Dank der
              Cookies weiß unsere Website, wer Sie sind und bietet Ihnen Ihre
              gewohnte Standardeinstellung. In einigen Browsern hat
              jedes&nbsp;Cookie&nbsp;eine eigene Datei, in anderen wie
              beispielsweise Firefox sind alle&nbsp;Cookies&nbsp;in einer
              einzigen Datei gespeichert.
            </p>
            <p>
              Es gibt sowohl Erstanbieter Cookies als auch
              Drittanbieter-Cookies. Erstanbieter-Cookies werden direkt von
              unserer Seite erstellt, Drittanbieter-Cookies werden von
              Partner-Webseiten (z.B. Google Analytics) erstellt.&nbsp;Jedes
              Cookie ist individuell zu bewerten, da jedes Cookie andere Daten
              speichert. Auch die Ablaufzeit eines Cookies variiert von ein paar
              Minuten bis hin zu ein paar Jahren.&nbsp;Cookies sind keine
              Software-Programme und enthalten keine Viren, Trojaner oder andere
              „Schädlinge“. Cookies können auch nicht auf Informationen Ihres
              PCs zugreifen.
            </p>
            <p>So können zum Beispiel Cookie-Daten aussehen:</p>
            <ul>
              <li>Name: _ga</li>
              <li>Ablaufzeit: 2 Jahre</li>
              <li>Verwendung: Unterscheidung der Webseitenbesucher</li>
              <li>Beispielhafter Wert:&nbsp;GA1.2.1326744211.152321162594</li>
            </ul>
            <p>Ein Browser sollte folgende Mindestgrößen unterstützen:</p>
            <ul>
              <li>Ein Cookie soll mindestens 4096 Bytes enthalten können</li>
              <li>
                Pro Domain sollen mindestens 50 Cookies gespeichert werden
                können
              </li>
              <li>
                Insgesamt sollen mindestens 3000 Cookies gespeichert werden
                können
              </li>
            </ul>
            <h3>Welche Arten von Cookies gibt es?</h3>
            <p>
              Die Frage welche Cookies wir im Speziellen verwenden, hängt von
              den verwendeten Diensten ab und wird in der folgenden Abschnitten
              der Datenschutzerklärung geklärt. An dieser Stelle möchten wir
              kurz auf die verschiedenen Arten von HTTP-Cookies eingehen.
            </p>
            <p>Man kann 4 Arten von Cookies unterscheiden:</p>
            <p>
              <strong>Unbedingt notwendige Cookies</strong>
              <br />
              Diese Cookies sind nötig, um grundlegende Funktionen der Website
              sicherzustellen. Zum Beispiel braucht es diese Cookies, wenn ein
              User ein Produkt in den Warenkorb legt, dann auf anderen Seiten
              weitersurft und später erst zur Kasse geht. Durch diese Cookies
              wird der Warenkorb nicht gelöscht, selbst wenn der User sein
              Browserfenster schließt.
            </p>
            <p>
              <strong>Funktionelle Cookies</strong>
              <br />
              Diese Cookies sammeln Infos über das Userverhalten und ob der User
              etwaige Fehlermeldungen bekommt. Zudem werden mithilfe dieser
              Cookies auch die Ladezeit und das Verhalten der Website bei
              verschiedenen Browsern gemessen.
            </p>
            <p>
              <strong>Zielorientierte Cookies</strong>
              <br />
              Diese Cookies sorgen für eine bessere Nutzerfreundlichkeit.
              Beispielsweise werden eingegebene Standorte, Schriftgrößen oder
              Formulardaten gespeichert.
            </p>
            <p>
              <strong>Werbe-Cookies</strong>
              <br />
              Diese Cookies werden auch Targeting-Cookies genannt. Sie dienen
              dazu dem User individuell angepasste Werbung zu liefern. Das kann
              sehr praktisch, aber auch sehr nervig sein.
            </p>
            <p>
              Üblicherweise werden Sie beim erstmaligen Besuch einer Webseite
              gefragt, welche dieser Cookiearten Sie zulassen möchten. Und
              natürlich wird diese Entscheidung auch in einem Cookie
              gespeichert.
            </p>
            <h3>Wie kann ich Cookies löschen?</h3>
            <p>
              Wie und ob Sie Cookies verwenden wollen, entscheiden Sie selbst.
              Unabhängig von welchem Service oder welcher Website die Cookies
              stammen, haben Sie immer die Möglichkeit&nbsp;Cookies zu löschen,
              nur teilweise zuzulassen oder zu deaktivieren. Zum Beispiel können
              Sie Cookies von Drittanbietern blockieren, aber alle anderen
              Cookies zulassen.
            </p>
            <p>
              Wenn Sie feststellen möchten, welche Cookies in Ihrem Browser
              gespeichert wurden, wenn Sie Cookie-Einstellungen ändern oder
              löschen wollen, können Sie dies in Ihren Browser-Einstellungen
              finden:
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.google.com/chrome/answer/95647?tid=321162594'
                href='https://support.google.com/chrome/answer/95647?tid=321162594'
                rel='noopener'
              >
                Chrome: Cookies in Chrome löschen, aktivieren und verwalten
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=321162594'
                href='https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=321162594'
                rel='noopener'
              >
                Safari: Verwalten von Cookies und Websitedaten mit Safari
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=321162594'
                href='https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=321162594'
                rel='noopener'
              >
                Firefox: Cookies löschen, um Daten zu entfernen, die Websites
                auf Ihrem Computer abgelegt haben
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=321162594'
                href='https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=321162594'
                rel='noopener'
              >
                Internet Explorer: Löschen und Verwalten von Cookies
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=321162594'
                href='https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=321162594'
                rel='noopener'
              >
                Microsoft Edge: Löschen und Verwalten von Cookies
              </a>
            </p>
            <p>
              Falls Sie grundsätzlich keine Cookies haben wollen, können Sie
              Ihren Browser so einrichten, dass er Sie immer informiert, wenn
              ein Cookie gesetzt werden soll. So können Sie bei jedem einzelnen
              Cookie entscheiden, ob Sie das Cookie erlauben oder nicht. Die
              Vorgangsweise ist je nach Browser verschieden. Am besten ist es
              Sie suchen die Anleitung in Google mit dem Suchbegriff “Cookies
              löschen Chrome” oder “Cookies deaktivieren Chrome” im Falle eines
              Chrome Browsers oder tauschen das Wort “Chrome” gegen den Namen
              Ihres Browsers, z.B. Edge, Firefox, Safari aus.
            </p>
            <h3>Wie sieht es mit meinem Datenschutz aus?</h3>
            <p>
              Seit 2009 gibt es die sogenannten „Cookie-Richtlinien“. Darin ist
              festgehalten, dass das Speichern von Cookies eine Einwilligung des
              Website-Besuchers (also von Ihnen) verlangt. Innerhalb der
              EU-Länder gibt es allerdings noch sehr unterschiedliche Reaktionen
              auf diese Richtlinien. In Deutschland wurden die
              Cookie-Richtlinien nicht als nationales Recht umgesetzt.
              Stattdessen erfolgte die Umsetzung dieser Richtlinie weitgehend in
              § 15 Abs.3 des Telemediengesetzes (TMG).
            </p>
            <p>
              Wenn Sie mehr über Cookies wissen möchten und vor technischen
              Dokumentationen nicht zurückscheuen, empfehlen wir&nbsp;
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://tools.ietf.org/html/rfc6265'
                href='https://tools.ietf.org/html/rfc6265'
                rel='nofollow noopener'
              >
                https://tools.ietf.org/html/rfc6265
              </a>
              , dem Request for Comments der Internet Engineering Task Force
              (IETF) namens “HTTP State Management Mechanism”.
            </p>
            <h2>Speicherung persönlicher Daten</h2>
            <p>
              Persönliche Daten, die Sie uns auf dieser Website elektronisch
              übermitteln, wie zum Beispiel Name, E-Mail-Adresse, Adresse oder
              andere persönlichen Angaben im Rahmen der Übermittlung eines
              Formulars oder Kommentaren im Blog, werden von uns gemeinsam mit
              dem Zeitpunkt und der IP-Adresse nur zum jeweils angegebenen Zweck
              verwendet, sicher verwahrt und nicht an Dritte weitergegeben.
            </p>
            <p>
              Wir nutzen Ihre persönlichen Daten somit nur für die Kommunikation
              mit jenen Besuchern, die Kontakt ausdrücklich wünschen und für die
              Abwicklung der auf dieser Webseite angebotenen Dienstleistungen
              und Produkte. Wir geben Ihre persönlichen Daten ohne Zustimmung
              nicht weiter, können jedoch nicht ausschließen, dass diese Daten
              beim Vorliegen von rechtswidrigem Verhalten eingesehen werden.
            </p>
            <p>
              Wenn Sie uns persönliche Daten per E-Mail schicken – somit abseits
              dieser Webseite – können wir keine sichere Übertragung und den
              Schutz Ihrer Daten garantieren. Wir empfehlen Ihnen, vertrauliche
              Daten niemals unverschlüsselt per E-Mail zu übermitteln.
            </p>
            <p>
              Die Rechtsgrundlage besteht nach{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&amp;from=DE&amp;tid=321162594'
                href='https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&amp;from=DE&amp;tid=321162594'
                rel='noopener'
              >
                Artikel 6&nbsp; Absatz 1 a DSGVO
              </a>{' '}
              (Rechtmäßigkeit der Verarbeitung) darin, dass Sie uns die
              Einwilligung zur Verarbeitung der von Ihnen eingegebenen Daten
              geben. Sie können diesen Einwilligung jederzeit widerrufen – eine
              formlose E-Mail reicht aus, Sie finden unsere Kontaktdaten im
              Impressum.
            </p>
            <h2>Rechte laut Datenschutzgrundverordnung</h2>
            <p>
              Ihnen stehen laut den Bestimmungen der DSGVO grundsätzlich die
              folgende Rechte zu:
            </p>
            <ul>
              <li>Recht auf Berichtigung (Artikel 16 DSGVO)</li>
              <li>
                Recht auf Löschung („Recht auf Vergessenwerden“) (Artikel 17
                DSGVO)
              </li>
              <li>
                Recht auf Einschränkung der Verarbeitung (Artikel 18 DSGVO)
              </li>
              <li>
                Recht auf Benachrichtigung – Mitteilungspflicht im Zusammenhang
                mit der Berichtigung oder Löschung personenbezogener Daten oder
                der Einschränkung der Verarbeitung (Artikel 19 DSGVO)
              </li>
              <li>Recht auf Datenübertragbarkeit (Artikel 20 DSGVO)</li>
              <li>Widerspruchsrecht (Artikel 21 DSGVO)</li>
              <li>
                Recht, nicht einer ausschließlich auf einer automatisierten
                Verarbeitung — einschließlich Profiling — beruhenden
                Entscheidung unterworfen zu werden (Artikel 22 DSGVO)
              </li>
            </ul>
            <p>
              Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das
              Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen
              Ansprüche sonst in einer Weise verletzt worden sind, können Sie
              sich an die{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://www.bfdi.bund.de'
                href='https://www.bfdi.bund.de'
                rel='noopener'
              >
                Bundesbeauftragte für den Datenschutz und die
                Informationsfreiheit (BfDI)
              </a>{' '}
              wenden.
            </p>
            <h2>Auswertung des Besucherverhaltens</h2>
            <p>
              In der folgenden Datenschutzerklärung informieren wir Sie darüber,
              ob und wie wir Daten Ihres Besuchs dieser Website auswerten. Die
              Auswertung der gesammelten Daten erfolgt in der Regel anonym und
              wir können von Ihrem Verhalten auf dieser Website nicht auf Ihre
              Person schließen.
            </p>
            <p>
              Mehr über Möglichkeiten dieser Auswertung der Besuchsdaten zu
              widersprechen erfahren Sie in der folgenden Datenschutzerklärung.
            </p>
            <h2>TLS-Verschlüsselung mit https</h2>
            <p>
              Wir verwenden https um Daten abhörsicher im Internet zu übertragen
              (Datenschutz durch Technikgestaltung{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&amp;from=DE&amp;tid=321162594'
                href='https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&amp;from=DE&amp;tid=321162594'
                rel='noopener'
              >
                Artikel 25 Absatz 1 DSGVO
              </a>
              ). Durch den Einsatz von TLS (Transport Layer Security), einem
              Verschlüsselungsprotokoll zur sicheren Datenübertragung im
              Internet können wir den Schutz vertraulicher Daten sicherstellen.
              Sie erkennen die Benutzung dieser Absicherung der Datenübertragung
              am kleinen Schloßsymbol links oben im Browser und der Verwendung
              des Schemas https (anstatt http) als Teil unserer Internetadresse.
            </p>
            <h2>Google Maps Datenschutzerklärung</h2>
            <p>
              Wir benützen auf unserer Website Google Maps der Firma Google Inc.
              (1600 Amphitheatre Parkway Mountain View, CA 94043, USA). Mit
              Google Maps können wir Standorte visuell besser darstellen und
              damit unser Service verbessern. Durch die Verwendung von Google
              Maps werden Daten an Google übertragen und auf den Google-Servern
              gespeichert. Hier wollen wir nun genauer darauf eingehen, was
              Google Maps ist, warum wir diesen Google-Dienst in Anspruch
              nehmen, welche Daten gespeichert werden und wie Sie dies
              unterbinden können.
            </p>
            <h3>Was ist Google Maps?</h3>
            <p>
              Google Maps ist ein Online-Kartendienst der Firma Google Inc. Mit
              Google Maps können Sie im Internet über einen PC oder über eine
              App genaue Standorte von Städten, Sehenswürdigkeiten, Unterkünften
              oder Unternehmen suchen. Wenn Unternehmen auf Google My Business
              vertreten sind, werden neben dem Standort noch weitere
              Informationen über die Firma angezeigt. Um&nbsp; die
              Anfahrtsmöglichkeit anzuzeigen, können Kartenausschnitte eines
              Standorts per HTML-Code in eine Website eingebunden werden. Google
              Maps zeigt die Erdoberfläche als Straßenkarte oder als Luft- bzw.
              Satellitenbild an. Dank der Street View Bilder und den qualitativ
              hochwertigen Satellitenbildern sind sehr genaue Darstellungen
              möglich.
            </p>
            <h3>Warum verwenden wir Google Maps auf unserer Website?</h3>
            <p>
              All unsere Bemühungen auf dieser Seite verfolgen das Ziel, Ihnen
              eine nützliche und sinnvolle Zeit auf unserer Website zu bieten.
              Durch die Einbindung von Google Maps können wir Ihnen die
              wichtigsten Informationen zu diversen Standorten liefern. Dank
              Google Maps sehen Sie auf einen Blick wo wir unseren Firmensitz
              haben. Die Wegbeschreibung zeigt Ihnen immer den besten bzw.
              schnellsten Weg zu uns. Sie können den Anfahrtsweg für Routen mit
              dem Auto, mit öffentlichen Verkehrsmitteln, zu Fuß oder mit dem
              Fahrrad abrufen. Für uns ist die Bereitstellung von Google Maps
              Teil unseres Kundenservice.
            </p>
            <h3>Welche Daten werden von Google Maps gespeichert?</h3>
            <p>
              Damit Google Maps ihren Dienst vollständig anbieten kann, muss das
              Unternehmen Daten von Ihnen aufnehmen und speichern. Dazu zählen
              unter anderem die eingegebenen Suchbegriffe, Ihre IP-Adresse und
              die Breiten- bzw. Längenkoordinaten. Benutzen Sie die
              Routenplaner-Funktion wird auch die eingegebene Startadresse
              gespeichert. Diese Datenspeicherung passiert allerdings auf den
              Webseiten von Google Maps. Wir können Sie darüber nur informieren,
              aber keinen Einfluss nehmen. Da wir Google Maps in unsere Website
              eingebunden haben, setzt Google mindestens ein Cookie (Name: NID)
              in Ihrem Browser. Dieses Cookie speichert Daten über Ihr
              Userverhalten. Google nutzt diese Daten in erster Linie, um eigene
              Dienste zu optimieren und individuelle, personalisierte Werbung
              für Sie bereitzustellen.
            </p>
            <p>
              Folgendes Cookie wird aufgrund der Einbindung von Google Maps in
              Ihrem Browser gesetzt:
            </p>
            <ul>
              <li>
                <strong>Name:</strong> NID
              </li>
              <li>
                <strong>Ablaufzeit:</strong> nach 6 Monaten
              </li>
              <li>
                <strong>Verwendung:</strong> NID wird von Google verwendet, um
                Werbeanzeigen an Ihre Google-Suche anzupassen. Mit Hilfe des
                Cookies „erinnert“ sich Google an Ihre am häufigsten
                eingegebenen Suchanfragen oder Ihre frühere Interaktion mit
                Anzeigen. So bekommen Sie immer maßgeschneiderte Werbeanzeigen.
                Das Cookie enthält eine einzigartige ID, die Google benutzt,
                persönliche Einstellungen des Users für Werbezwecke zu sammeln.
              </li>
              <li>
                <strong>Beispielwert:</strong>{' '}
                188=h26c1Ktha7fCQTx8rXgLyATyITJ321162594
              </li>
            </ul>
            <p>
              <strong>Anmerkung:</strong> Wir können bei den Angaben der
              gespeicherten Daten keine Vollständigkeit gewährleisten. Speziell
              bei der Verwendung von Cookies sind Veränderungen bei Google nie
              auszuschließen. Um das Cookie NID zu identifizieren, wurde eine
              eigene Testseite angelegt, wo ausschließlich Google Maps
              eingebunden war.
            </p>
            <h3>Wie lange und wo werden die Daten gespeichert?</h3>
            <p>
              Die Google-Server stehen in Rechenzentren auf der ganzen Welt. Die
              meisten Server befinden sich allerdings in Amerika. Aus diesem
              Grund werden Ihre Daten auch vermehrt in den USA gespeichert. Hier
              können Sie genau nachlesen wo sich die Google-Rechenzentren
              befinden:{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://www.google.com/about/datacenters/inside/locations/?hl=de'
                href='https://www.google.com/about/datacenters/inside/locations/?hl=de'
                rel='noopener'
              >
                https://www.google.com/about/datacenters/inside/locations/?hl=de
              </a>
            </p>
            <p>
              Die Daten verteilt Google auf verschiedenen Datenträgern. Dadurch
              sind die Daten schneller abrufbar und werden vor etwaigen
              Manipulationsversuchen besser geschützt. Jedes Rechenzentrum hat
              auch spezielle Notfallprogramme. Wenn es zum Beispiel Probleme bei
              der Google-Hardware gibt oder eine Naturkatastrophe die Server
              beeinträchtigt, bleiben die Daten mit hoher Wahrscheinlich dennoch
              geschützt.
            </p>
            <p>
              Manche Daten speichert Google für einen festgelegten Zeitraum. Bei
              anderen Daten bietet Google lediglich die Möglichkeit, diese
              manuell zu löschen. Weiters anonymisiert das Unternehmen auch
              Informationen (wie zum Beispiel Werbedaten) in Serverprotokollen,
              indem sie einen Teil der IP-Adresse und Cookie-Informationen nach
              9 bzw.18 Monaten löschen.
            </p>
            <h3>
              Wie kann ich meine Daten löschen bzw. die Datenspeicherung
              verhindern?
            </h3>
            <p>
              Mit der 2019 eingeführten automatischen Löschfunktion von
              Standort- und Aktivitätsdaten werden Informationen zur
              Standortbestimmung und Web-/App-Aktivität – abhängig von Ihrer
              Entscheidung – entweder 3 oder 18 Monate gespeichert und dann
              gelöscht. Zudem kann man diese Daten über das Google-Konto auch
              jederzeit manuell aus dem Verlauf löschen. Wenn Sie Ihre
              Standorterfassung vollständig verhindern wollen, müssen Sie im
              Google-Konto die Rubrik „Web- und App-Aktivität“ pausieren.
              Klicken Sie „Daten und Personalisierung“ und dann auf die Option
              „Aktivitätseinstellung“. Hier können Sie die Aktivitäten ein- bzw.
              ausschalten.
            </p>
            <p>
              In Ihrem Browser können Sie weiters auch einzelne Cookies
              deaktivieren, löschen oder verwalten. Je nach dem welchen Browser
              Sie verwenden, funktioniert dies auf unterschiedliche Art und
              Weise. Die folgenden Anleitungen zeigen, wie Sie Cookies in Ihrem
              Browser verwalten:
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.google.com/chrome/answer/95647?tid=321162594'
                href='https://support.google.com/chrome/answer/95647?tid=321162594'
                rel='noopener'
              >
                Chrome: Cookies in Chrome löschen, aktivieren und verwalten
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=321162594'
                href='https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=321162594'
                rel='noopener'
              >
                Safari: Verwalten von Cookies und Websitedaten mit Safari
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=321162594'
                href='https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=321162594'
                rel='noopener'
              >
                Firefox: Cookies löschen, um Daten zu entfernen, die Websites
                auf Ihrem Computer abgelegt haben
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=321162594'
                href='https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=321162594'
                rel='noopener'
              >
                Internet Explorer: Löschen und Verwalten von Cookies
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=321162594'
                href='https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=321162594'
                rel='noopener'
              >
                Microsoft Edge: Löschen und Verwalten von Cookies
              </a>
            </p>
            <p>
              Falls Sie grundsätzlich keine Cookies haben wollen, können Sie
              Ihren Browser so einrichten, dass er Sie immer informiert, wenn
              ein Cookie gesetzt werden soll. So können Sie bei jedem einzelnen
              Cookie entscheiden, ob Sie es erlauben oder nicht.
            </p>
            <p>
              Google ist aktiver Teilnehmer beim EU-U.S. Privacy Shield
              Framework, wodurch der korrekte und sichere Datentransfer
              persönlicher Daten geregelt wird. Mehr Informationen dazu finden
              Sie auf{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI'
                href='https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI'
                rel='noopener'
              >
                https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI
              </a>
              . Wenn Sie mehr über die Datenverarbeitung von Google erfahren
              wollen, empfehlen wir Ihnen die hauseigene Datenschutzerklärung
              des Unternehmens unter{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://policies.google.com/privacy?hl=de'
                href='https://policies.google.com/privacy?hl=de'
                rel='noopener'
              >
                https://policies.google.com/privacy?hl=de
              </a>
              .
            </p>
            <h2>Google Fonts Datenschutzerklärung</h2>
            <p>
              Wir verwenden Google Fonts der Firma Google Inc. (1600
              Amphitheatre Parkway Mountain View, CA 94043, USA) auf unserer
              Webseite.
            </p>
            <p>
              Für die Verwendung von Google-Schriftarten müssen Sie sich nicht
              anmelden bzw. ein Passwort hinterlegen. Weiters werden auch keine
              Cookies in Ihrem Browser gespeichert. Die Dateien (CSS,
              Schriftarten/Fonts) werden über die Google-Domains
              fonts.googleapis.com und fonts.gstatic.com angefordert. Laut
              Google sind die Anfragen nach CSS und Schriften vollkommen
              getrennt von allen anderen Google-Diensten. Wenn Sie ein
              Google-Konto haben, brauchen Sie keine Sorge haben, dass Ihre
              Google-Kontodaten, während der Verwendung von Google Fonts, an
              Google übermittelt werden. Google erfasst die Nutzung von CSS
              (Cascading Style Sheets) und der verwendeten Schriftarten und
              speichert diese Daten sicher. Wie die Datenspeicherung genau
              aussieht, werden wir uns noch im Detail ansehen.
            </p>
            <h3>Was sind Google Fonts?</h3>
            <p>
              Google Fonts&nbsp;(früher&nbsp;Google Web Fonts) ist ein
              interaktives Verzeichnis mit mehr als 800&nbsp;Schriftarten, die
              die&nbsp;
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://de.wikipedia.org/wiki/Google_LLC?tid=321162594'
                href='https://de.wikipedia.org/wiki/Google_LLC?tid=321162594'
                rel='noopener'
              >
                Google LLC
              </a>
              &nbsp;zur freien Verwendung bereitstellt.
            </p>
            <p>
              Viele dieser Schriftarten sind unter der&nbsp;SIL Open Font
              License&nbsp;veröffentlicht, während andere unter
              der&nbsp;Apache-Lizenz&nbsp;veröffentlicht wurden. Beides
              sind&nbsp;freie Software-Lizenzen. Somit können wir sie frei
              verwenden, ohne dafür Lizenzgebühren zu zahlen.
            </p>
            <h3>Warum verwenden wir Google Fonts auf unserer Webseite?</h3>
            <p>
              Mit Google Fonts können wir auf der eigenen Webseite Schriften
              nutzen, und müssen sie nicht auf unserem eigenen Server hochladen.
              Google Fonts ist ein wichtiger Baustein, um die Qualität unserer
              Webseite hoch zu halten. Alle Google-Schriften sind automatisch
              für das Web optimiert und dies spart Datenvolumen und ist speziell
              für die Verwendung bei mobilen Endgeräten ein großer Vorteil. Wenn
              Sie unsere Seite besuchen, sorgt die niedrige Dateigröße für eine
              schnelle Ladezeit. Des Weiteren sind Google Fonts sogenannte
              sichere Web Fonts. Unterschiedliche Bildsynthese-Systeme
              (Rendering) in verschiedenen Browsern, Betriebssystemen und
              mobilen Endgeräten können zu Fehlern führen. Solche Fehler können
              teilweise Texte bzw. ganze Webseiten optisch verzerren. Dank des
              schnellen Content Delivery Network (CDN) gibt es mit Google Fonts
              keine plattformübergreifenden Probleme. Google Fonts unterstützt
              alle gängigen Browser ( Google Chrome,&nbsp;Mozilla
              Firefox,&nbsp;Apple Safari,&nbsp;Opera)&nbsp; und funktioniert
              zuverlässig auf den meisten modernen mobilen Betriebssystemen,
              einschließlich Android 2.2+ und iOS 4.2+ (iPhone, iPad, iPod).
            </p>
            <p>
              Wir verwenden die Google Fonts also, damit wir unser gesamtes
              Online-Service so schön und einheitlich wie möglich darstellen
              können. Nach dem Art. 6 Abs. 1 f lit. F DSGVO stellt das bereits
              ein „berechtigtes Interesse“ an der Verarbeitung von
              personenbezogenen Daten dar. Unter „berechtigtem Interesse“
              versteht man in diesem Fall sowohl rechtliche als auch
              wirtschaftliche oder ideelle Interessen, die vom Rechtssystem
              anerkannt werden.
            </p>
            <h3>Welche Daten werden von Google gespeichert?</h3>
            <p>
              Wenn Sie unsere Webseite besuchen, werden die Schriften über einen
              Google-Server nachgeladen. Durch diesen externen Aufruf werden
              Daten an die Google-Server übermittelt. So erkennt Google auch,
              dass Sie bzw. Ihre IP-Adresse unsere Webseite besucht. Die Google
              Fonts API wurde entwickelt, um die Erfassung, Speicherung und
              Verwendung von Endnutzerdaten auf das zu reduzieren, was für eine
              effiziente Bereitstellung von Schriften nötig ist. API steht
              übrigens für „Application Programming Interface“ und dient unter
              anderem als Datenübermittler im Softwarebereich.
            </p>
            <p>
              Google Fonts speichert CSS- und Font-Anfragen sicher bei Google
              und ist somit geschützt.&nbsp;Durch die gesammelten Nutzungszahlen
              kann Google die Beliebtheit der Schriften feststellen. Die
              Ergebnisse veröffentlicht Google auf internen Analyseseiten, wie
              beispielsweise Google Analytics. Zudem verwendet Google auch Daten
              des eigenen Web-Crawlers, um festzustellen, welche Webseiten
              Google-Schriften verwenden. Diese Daten werden in der
              BigQuery-Datenbank von Google Fonts veröffentlicht. BigQuery ist
              ein Webservice von Google für Unternehmen, die große Datenmengen
              bewegen und analysieren wollen.
            </p>
            <p>
              Zu bedenken gilt allerdings noch, dass durch jede Google Font
              Anfrage auch Informationen wie IP-Adresse, Spracheinstellungen,
              Bildschirmauflösung des Browsers, Version des Browsers und Name
              des Browsers automatisch an die Google-Server übertragen werden.
              Ob diese Daten auch gespeichert werden, ist nicht klar
              feststellbar bzw. wird von Google nicht eindeutig kommuniziert.
            </p>
            <h3>Wie lange und wo werden die Daten gespeichert?</h3>
            <p>
              Anfragen für CSS-Assets speichert Google einen Tag lang auf Ihren
              Servern, die hauptsächlich außerhalb der EU angesiedelt sind. Das
              ermöglicht uns, mithilfe eines Google-Stylesheets die Schriftarten
              zu nutzen.&nbsp;Ein Stylesheet ist eine Formatvorlage, über die
              man einfach und schnell z.B. das Design bzw. die Schriftart einer
              Webseite ändern kann.
            </p>
            <p>
              Die Font-Dateien werden bei Google ein Jahr gespeichert. Google
              verfolgt damit das Ziel, die Ladezeit von Webseiten grundsätzlich
              zu verbessern. Wenn Millionen von Webseiten auf die gleichen
              Schriften verweisen, werden sie nach dem ersten Besuch
              zwischengespeichert und erscheinen sofort auf allen anderen später
              besuchten Webseiten wieder. Manchmal aktualisiert Google
              Schriftdateien, um die Dateigröße zu reduzieren, die Abdeckung von
              Sprache zu erhöhen und das Design zu verbessern.
            </p>
            <h3>
              Wie kann ich meine Daten löschen bzw. die Datenspeicherung
              verhindern?
            </h3>
            <p>
              Jene Daten, die Google für einen Tag bzw. ein Jahr speichert
              können nicht einfach gelöscht werden. Die Daten werden beim
              Seitenaufruf automatisch an Google übermittelt. Um diese Daten
              vorzeitig löschen zu können, müssen Sie den Google-Support auf{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.google.com/?hl=de&amp;tid=321162594'
                href='https://support.google.com/?hl=de&amp;tid=321162594'
                rel='noopener'
              >
                https://support.google.com/?hl=de&amp;tid=321162594
              </a>{' '}
              kontaktieren. Datenspeicherung verhindern Sie in diesem Fall nur,
              wenn Sie unsere Seite nicht besuchen.
            </p>
            <p>
              Anders als andere Web-Schriften erlaubt uns Google
              uneingeschränkten Zugriff auf alle Schriftarten. Wir können also
              unlimitiert auf ein Meer an Schriftarten zugreifen und so das
              Optimum für unsere Webseite rausholen. Mehr zu Google Fonts und
              weiteren Fragen finden Sie auf{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://developers.google.com/fonts/faq?tid=321162594'
                href='https://developers.google.com/fonts/faq?tid=321162594'
                rel='noopener'
              >
                https://developers.google.com/fonts/faq?tid=321162594
              </a>
              . Dort geht zwar Google auf datenschutzrelevante Angelegenheiten
              ein, doch wirklich detaillierte Informationen über
              Datenspeicherung sind nicht enthalten. Es ist relativ schwierig
              (beinahe unmöglich), von Google wirklich präzise Informationen
              über gespeicherten Daten zu bekommen.
            </p>
            <p>
              Welche Daten grundsätzlich von Google erfasst werden und wofür
              diese Daten verwendet werden, können Sie auch auf{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://policies.google.com/privacy?hl=de&amp;tid=321162594'
                href='https://policies.google.com/privacy?hl=de&amp;tid=321162594'
                rel='noopener'
              >
                https://www.google.com/intl/de/policies/privacy/
              </a>{' '}
              nachlesen.
            </p>
            <h2>Google Fonts Lokal Datenschutzerklärung</h2>
            <p>
              Wir verwenden Google Fonts der Firma Google Inc. (1600
              Amphitheatre Parkway Mountain View, CA 94043, USA) auf unserer
              Webseite. Wir haben die Google-Schriftarten lokal, d.h. auf
              unserem Webserver – nicht auf den Servern von Google –
              eingebunden. Dadurch gibt es keine Verbindung zu Server von Google
              und somit auch keine Datenübertragung bzw. Speicherung.
            </p>
            <h3>Was sind Google Fonts?</h3>
            <p>
              Google Fonts&nbsp;(früher&nbsp;Google Web Fonts) ist ein
              interaktives Verzeichnis mit mehr als 800&nbsp;Schriftarten, die
              die&nbsp;
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://de.wikipedia.org/wiki/Google_LLC?tid=321162594'
                href='https://de.wikipedia.org/wiki/Google_LLC?tid=321162594'
              >
                Google LLC
              </a>
              &nbsp;zur freien Verwendung bereitstellt. Mit Google Fonts könnte
              man die Schriften nutzen, ohne sie auf den eigenen Server
              hochzuladen. Doch um diesbezüglich jede Informationsübertragung
              zum Google-Server zu unterbinden, haben wir die Schriftarten auf
              unseren Server heruntergeladen. Auf diese Weise handeln wir
              datenschutzkonform und senden keine Daten an Google Fonts weiter.
            </p>
            <p>
              Anders als andere Web-Schriften erlaubt uns Google
              uneingeschränkten Zugriff auf alle Schriftarten. Wir können also
              unlimitiert auf ein Meer an Schriftarten zugreifen und so das
              Optimum für unsere Webseite rausholen. Mehr zu Google Fonts und
              weiteren Fragen finden Sie auf{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://developers.google.com/fonts/faq?tid=321162594'
                href='https://developers.google.com/fonts/faq?tid=321162594'
              >
                https://developers.google.com/fonts/faq?tid=321162594
              </a>
              .
            </p>
            <h2>Automatische Datenspeicherung</h2>
            <p>
              Wenn Sie heutzutage Webseiten besuchen, werden gewisse
              Informationen automatisch erstellt und gespeichert, so auch auf
              dieser Webseite.
            </p>
            <p>
              Wenn Sie unsere Webseite so wie jetzt gerade besuchen, speichert
              unser Webserver (Computer auf dem diese Webseite gespeichert ist)
              automatisch Daten wie
            </p>
            <ul>
              <li>die Adresse (URL) der aufgerufenen Webseite</li>
              <li>Browser und Browserversion</li>
              <li>das verwendete Betriebssystem</li>
              <li>
                die Adresse (URL) der zuvor besuchten Seite (Referrer URL)
              </li>
              <li>
                den Hostname und die IP-Adresse des Geräts von welchem aus
                zugegriffen wird
              </li>
              <li>Datum und Uhrzeit</li>
            </ul>
            <p>in Dateien (Webserver-Logfiles).</p>
            <p>
              In der Regel werden Webserver-Logfiles zwei Wochen gespeichert und
              danach automatisch gelöscht. Wir geben diese Daten nicht weiter,
              können jedoch nicht ausschließen, dass diese Daten beim Vorliegen
              von rechtswidrigem Verhalten eingesehen werden.
            </p>
            <h2>Eingebettete Social Media Elemente Datenschutzerklärung</h2>
            <p>
              Wir binden auf unserer Webseite Elemente von Social Media Diensten
              ein um Bilder, Videos und Texte anzuzeigen.
              <br />
              Durch den Besuch von Seiten die diese Elemente darstellen, werden
              Daten von Ihrem Browser zum jeweiligen Social Media Dienst
              übertragen und dort gespeichert. Wir haben keinen Zugriff auf
              diese Daten.
              <br />
              Die folgenden Links führen Sie zu den Seiten der jeweiligen Social
              Media Dienste wo erklärt wird, wie diese mit Ihren Daten umgehen:
            </p>
            <ul>
              <li>
                Instagram-Datenschutzrichtlinie:{' '}
                <a
                  class='adsimple-321162594'
                  data-cke-saved-href='https://help.instagram.com/519522125107875?tid=321162594'
                  href='https://help.instagram.com/519522125107875?tid=321162594'
                  rel='noopener'
                >
                  https://help.instagram.com/519522125107875
                </a>
              </li>
              <li>
                Für YouTube gilt die Google Datenschutzerklärung:{' '}
                <a
                  class='adsimple-321162594'
                  data-cke-saved-href='https://policies.google.com/privacy?hl=de&amp;tid=321162594'
                  href='https://policies.google.com/privacy?hl=de&amp;tid=321162594'
                  rel='noopener'
                >
                  https://policies.google.com/privacy?hl=de
                </a>
              </li>
              <li>
                Facebook-Datenrichtline:&nbsp;
                <a
                  class='adsimple-321162594'
                  data-cke-saved-href='https://www.facebook.com/about/privacy?tid=321162594'
                  href='https://www.facebook.com/about/privacy?tid=321162594'
                  rel='noopener'
                >
                  https://www.facebook.com/about/privacy
                </a>
              </li>
              <li>
                Twitter Datenschutzrichtlinie:&nbsp;
                <a
                  class='adsimple-321162594'
                  data-cke-saved-href='https://twitter.com/de/privacy?tid=321162594'
                  href='https://twitter.com/de/privacy?tid=321162594'
                  rel='noopener'
                >
                  https://twitter.com/de/privacy
                </a>
              </li>
            </ul>
            <h2>Facebook Datenschutzerklärung</h2>
            <p>
              Wir verwenden auf unserer Webseite ausgewählte Facebook Tools von
              Facebook. Facebook ist ein Social Media Network des Unternehmens
              Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour,
              Dublin 2 Ireland. Mithilfe dieser Tools können wir Ihnen und
              Menschen, die sich für unsere Produkte und Dienstleistungen
              interessieren, das bestmögliche Angebot bieten. Im Folgenden geben
              wir einen Überblick über die verschiedenen Facebook Tools, welche
              Daten an Facebook gesendet werden und wie Sie diese Daten löschen
              können.
            </p>
            <h3>Was sind Facebook-Tools?</h3>
            <p>
              Neben vielen anderen Produkten bietet Facebook auch die
              sogenannten “Facebook Business Tools” an.&nbsp;Das ist die
              offizielle Bezeichnung von Facebook. Da der Begriff aber kaum
              bekannt ist, haben wir uns dafür entschieden, sie lediglich
              Facebook-Tools zu nennen. Darunter finden sich unter anderem:
            </p>
            <ul>
              <li>Facebook-Pixel</li>
              <li>
                soziale Plug-ins (wie z.B der „Gefällt mir“- oder
                „Teilen“-Button)
              </li>
              <li>Facebook Login</li>
              <li>Account Kit</li>
              <li>APIs (Programmierschnittstelle)</li>
              <li>SDKs (Sammlung von Programmierwerkzeugen)</li>
              <li>Plattform-Integrationen</li>
              <li>Plugins</li>
              <li>Codes</li>
              <li>Spezifikationen</li>
              <li>Dokumentationen</li>
              <li>Technologien und Dienstleistungen</li>
            </ul>
            <p>
              Durch diese Tools erweitert Facebook Dienstleistungen und hat die
              Möglichkeit, Informationen über User-Aktivitäten außerhalb von
              Facebook zu erhalten.
            </p>
            <h3>Warum verwenden wir Facebook-Tools auf unserer Webseite?</h3>
            <p>
              Wir wollen unsere Dienstleistungen und Produkte nur Menschen
              zeigen, die sich auch wirklich dafür interessieren. Mithilfe von
              Werbeanzeigen (Facebook-Ads) können wir genau diese Menschen
              erreichen. Damit den Usern passende Werbung gezeigt werden kann,
              benötigt Facebook allerdings Informationen über die Wünsche und
              Bedürfnisse der Menschen. So werden dem
              Unternehmen&nbsp;Informationen über das Userverhalten (und
              Kontaktdaten) auf unserer Webseite zur Verfügung gestellt. Dadurch
              sammelt Facebook bessere User-Daten und kann interessierten
              Menschen die passende Werbung über unsere Produkte bzw.
              Dienstleistungen anzeigen. Die Tools ermöglichen somit
              maßgeschneiderte Werbekampagnen auf Facebook.
            </p>
            <p>
              Daten über Ihr Verhalten auf unserer Webseite nennt Facebook
              „Event-Daten“. Diese werden auch für Messungs- und Analysedienste
              verwendet. Facebook kann so in unserem Auftrag „Kampagnenberichte“
              über die Wirkung unserer Werbekampagnen erstellen. Weiters
              bekommen wir durch Analysen einen besseren Einblick, wie Sie
              unsere Dienstleistungen, Webseite oder Produkte verwenden. Dadurch
              optimieren wir mit einigen dieser Tools Ihre Nutzererfahrung auf
              unserer Webseite. Beispielsweise können Sie mit den sozialen
              Plug-ins Inhalte auf unserer Seite direkt auf Facebook teilen.
            </p>
            <h3>Welche Daten werden von Facebook-Tools gespeichert?</h3>
            <p>
              Durch die Nutzung einzelner Facebook-Tools können personenbezogene
              Daten (Kundendaten) an Facebook gesendet werden. Abhängig von den
              benutzten Tools können Kundendaten wie Name, Adresse,
              Telefonnummer und IP-Adresse versandt werden.
            </p>
            <p>
              Facebook verwendet diese Informationen, um die Daten mit den ihren
              eigenen Daten, die es von Ihnen hat (sofern Sie Facebook-Mitglied
              sind) abzugleichen. Bevor Kundendaten an Facebook übermittelt
              werden, erfolgt ein sogenanntes „Hashing“. Das bedeutet, dass ein
              beliebig großer Datensatz in eine Zeichenkette transformiert wird.
              Dies dient auch der Verschlüsselung von Daten.
            </p>
            <p>
              Neben den Kontaktdaten werden auch „Event-Daten“ übermittelt.
              Unter „Event-Daten“ sind jene Informationen gemeint, die wir über
              Sie auf unserer Webseite erhalten. Zum Beispiel, welche
              Unterseiten Sie besuchen oder welche Produkte Sie bei uns kaufen.
              Facebook teilt die erhaltenen Informationen nicht mit
              Drittanbietern (wie beispielsweise Werbetreibende), außer das
              Unternehmen hat eine explizite Genehmigung oder ist rechtlich dazu
              verpflichtet. „Event-Daten“ können auch mit Kontaktdaten verbunden
              werden. Dadurch kann Facebook bessere personalisierte Werbung
              anbieten. Nach dem bereits erwähnten Abgleichungsprozess löscht
              Facebook die Kontaktdaten wieder.
            </p>
            <p>
              Um Werbeanzeigen optimiert ausliefern zu können, verwendet
              Facebook die Event-Daten nur, wenn diese mit anderen Daten (die
              auf andere Weise von Facebook erfasst wurden) zusammengefasst
              wurden. Diese Event-Daten nützt Facebook auch für Sicherheits-,
              Schutz-, Entwicklungs- und Forschungszwecken. Viele dieser Daten
              werden über Cookies zu Facebook übertragen. Cookies sind kleine
              Text-Dateien, die zum Speichern von Daten bzw. Informationen in
              Browsern verwendet werden. Je nach verwendeten Tools und abhängig,
              ob Sie Facebook-Mitglied sind, werden unterschiedlich viele
              Cookies in Ihrem Browser angelegt. In den Beschreibungen der
              einzelnen Facebook Tools gehen wir näher auf einzelne
              Facebook-Cookies ein. Allgemeine Informationen über die Verwendung
              von Facebook-Cookies erfahren Sie auch auf{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://www.facebook.com/policies/cookies?tid=321162594'
                href='https://www.facebook.com/policies/cookies?tid=321162594'
                rel='noopener'
              >
                https://www.facebook.com/policies/cookies
              </a>
              .
            </p>
            <h3>Wie lange und wo werden die Daten gespeichert?</h3>
            <p>
              Grundsätzlich speichert Facebook Daten bis sie nicht mehr für die
              eigenen Dienste und Facebook-Produkte benötigt werden. Facebook
              hat auf der ganzen Welt Server verteilt, wo Ihre Daten gespeichert
              werden. Kundendaten werden allerdings, nachdem sie mit den eigenen
              Userdaten abgeglichen wurden, innerhalb von 48 Stunden gelöscht.
            </p>
            <h3>
              Wie kann ich meine Daten löschen bzw. die Datenspeicherung
              verhindern?
            </h3>
            <p>
              Entsprechend der Datenschutz Grundverordnung haben Sie das Recht
              auf Auskunft, Berichtigung, Übertragbarkeit und Löschung Ihrer
              Daten.
            </p>
            <p>
              Eine komplette Löschung der Daten erfolgt nur, wenn Sie Ihr
              Facebook-Konto vollständig löschen. Und so funktioniert das
              Löschen Ihres Facebook-Kontos:
            </p>
            <p>1) Klicken Sie rechts bei Facebook auf Einstellungen.</p>
            <p>
              2) Anschließend klicken Sie in der linken Spalte auf „Deine
              Facebook-Informationen“.
            </p>
            <p>3) Nun klicken Sie “Deaktivierung und Löschung”.</p>
            <p>
              4) Wählen Sie jetzt „Konto löschen“ und klicken Sie dann auf
              „Weiter und Konto löschen“
            </p>
            <p>
              5) Geben Sie nun Ihr Passwort ein, klicken Sie auf „Weiter“ und
              dann auf „Konto löschen“
            </p>
            <p>
              Die Speicherung der Daten, die Facebook über unsere Seite erhält,
              erfolgt unter anderem über Cookies (z.B. bei sozialen Plugins). In
              Ihrem Browser können Sie einzelne oder alle Cookies deaktivieren,
              löschen oder verwalten. Je nach dem welchen Browser Sie verwenden,
              funktioniert dies auf unterschiedliche Art und Weise. Die
              folgenden Anleitungen zeigen, wie Sie Cookies in Ihrem Browser
              verwalten:
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.google.com/chrome/answer/95647?tid=321162594'
                href='https://support.google.com/chrome/answer/95647?tid=321162594'
                rel='noopener'
              >
                Chrome: Cookies in Chrome löschen, aktivieren und verwalten
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=321162594'
                href='https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=321162594'
                rel='noopener'
              >
                Safari: Verwalten von Cookies und Websitedaten mit Safari
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=321162594'
                href='https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=321162594'
                rel='noopener'
              >
                Firefox: Cookies löschen, um Daten zu entfernen, die Websites
                auf Ihrem Computer abgelegt haben
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=321162594'
                href='https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=321162594'
                rel='noopener'
              >
                Internet Explorer: Löschen und Verwalten von Cookies
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=321162594'
                href='https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=321162594'
                rel='noopener'
              >
                Microsoft Edge: Löschen und Verwalten von Cookies
              </a>
            </p>
            <p>
              Falls Sie grundsätzlich keine Cookies haben wollen, können Sie
              Ihren Browser so einrichten, dass er Sie immer informiert, wenn
              ein Cookie gesetzt werden soll. So können Sie bei jedem einzelnen
              Cookie entscheiden, ob Sie es erlauben oder nicht.
            </p>
            <p>
              Facebook ist aktiver Teilnehmer beim EU-U.S. Privacy Shield
              Framework, wodurch der korrekte und sichere Datentransfer
              persönlicher Daten geregelt wird. Mehr Informationen dazu finden
              Sie auf{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC'
                href='https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC'
                rel='follow noopener'
              >
                https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC
              </a>
              . Wir hoffen wir haben Ihnen die wichtigsten Informationen über
              die Nutzung und Datenverarbeitung durch die Facebook-Tools
              nähergebracht. Wenn Sie mehr darüber erfahren wollen, wie Facebook
              Ihre Daten verwendet, empfehlen wir Ihnen die Datenrichtlinien auf{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://www.facebook.com/about/privacy/update'
                href='https://www.facebook.com/about/privacy/update'
                rel='noopener'
              >
                https://www.facebook.com/about/privacy/update
              </a>
              .
            </p>
            <h2>Facebook Soziale Plug-ins Datenschutzerklärung</h2>
            <p>
              Auf unserer Webseite sind sogenannte soziale Plug-ins des
              Unternehmens Facebook Inc. eingebaut. Sie erkennen diese Buttons
              am klassischen Facebook-Logo, wie dem „Gefällt mir“-Button (die
              Hand mit erhobenem Daumen) oder an einer eindeutigen „Facebook
              Plug-in“-Kennzeichnung. Ein soziales Plug-in ist ein kleiner Teil
              von Facebook, der in unsere Seite integriert ist. Jedes Plug-in
              hat eine eigene Funktion. Die am meisten verwendeten Funktionen
              sind die bekannten “Gefällt mir”- und “Teilen”-Buttons.
            </p>
            <p>Folgende soziale Plug-ins werden von Facebook angeboten:</p>
            <ul>
              <li>“Speichern”-Button</li>
              <li>“Gefällt mir”-Button, Teilen, Senden und Zitat</li>
              <li>Seiten-Plug-in</li>
              <li>Kommentare</li>
              <li>Messenger-Plug-in</li>
              <li>Eingebettete Beiträge und Videoplayer</li>
              <li>Gruppen-Plug-in</li>
            </ul>
            <p>
              Auf{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://developers.facebook.com/docs/plugins'
                href='https://developers.facebook.com/docs/plugins'
                rel='noopener'
              >
                https://developers.facebook.com/docs/plugins
              </a>{' '}
              erhalten Sie nähere Informationen, wie die einzelnen Plug-ins
              verwendet werden. Wir nützen die sozialen Plug-ins einerseits, um
              Ihnen ein besseres Usererlebnis auf unserer Seite zu bieten,
              andererseits weil Facebook dadurch unsere Werbeanzeigen optimieren
              kann.
            </p>
            <p>
              Sofern Sie ein Facebook-Konto haben oder{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://www.facebook.com/'
                href='https://www.facebook.com/'
                rel='follow noopener'
              >
                facebook.com
              </a>{' '}
              schon mal besucht haben, hat Facebook bereits mindestens ein
              Cookie in Ihrem Browser gesetzt. In diesem Fall sendet Ihr Browser
              über dieses Cookie Informationen an Facebook, sobald Sie unsere
              Seite besuchen bzw. mit sozialen Plug-ins (z.B. dem „Gefällt
              mir“-Button) interagieren.
            </p>
            <p>
              Die erhaltenen Informationen werden innerhalb von 90 Tagen wieder
              gelöscht bzw. anonymisiert. Laut Facebook gehören zu diesen Daten
              Ihre IP-Adresse, welche Webseite Sie besucht haben, das Datum, die
              Uhrzeit und weitere Informationen, die Ihren Browser betreffen.
            </p>
            <p>
              Um zu verhindern, dass Facebook während Ihres Besuches auf unserer
              Webseite viele Daten sammelt und mit den Facebook-Daten verbindet,
              müssen Sie sich während des Webseitenbesuchs von Facebook abmelden
              (ausloggen).
            </p>
            <p>
              Falls Sie bei Facebook nicht angemeldet sind oder kein
              Facebook-Konto besitzen, sendet Ihr Browser weniger Informationen
              an Facebook, weil Sie weniger Facebook-Cookies haben. Dennoch
              können Daten wie beispielsweise Ihre IP-Adresse oder welche
              Webseite Sie besuchen an Facebook übertragen werden. Wir möchten
              noch ausdrücklich darauf hinweisen, dass wir über die genauen
              Inhalte der Daten nicht exakt Bescheid wissen. Wir versuchen aber
              Sie nach unserem aktuellen Kenntnisstand so gut als möglich über
              die Datenverarbeitung aufzuklären. Wie Facebook die Daten nutzt,
              können Sie auch in den Datenrichtline des Unternehmens unter{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://www.facebook.com/about/privacy/update'
                href='https://www.facebook.com/about/privacy/update'
                rel='noopener'
              >
                https://www.facebook.com/about/privacy/update
              </a>{' '}
              nachlesen.
            </p>
            <p>
              Folgende Cookies werden in Ihrem Browser mindestens gesetzt, wenn
              Sie eine Webseite mit sozialen Plug-ins von Facebook besuchen:
            </p>
            <p>
              <strong>Name:</strong> dpr
              <br />
              <strong>Wert:</strong> keine Angabe
              <br />
              <strong>Verwendungszweck:</strong> Dieses Cookie wird verwendet,
              damit die sozialen Plug-ins auf unserer Webseite funktionieren.
              <br />
              <strong>Ablaufdatum:</strong> nach Sitzungsende
            </p>
            <p>
              <strong>Name:</strong> fr
              <br />
              <strong>Wert:</strong>{' '}
              0jieyh4321162594c2GnlufEJ9..Bde09j…1.0.Bde09j
              <br />
              <strong>Verwendungszweck:</strong>&nbsp;Auch das Cookie ist nötig,
              dass die Plug-ins einwandfrei funktionieren.
              <br />
              <strong>Ablaufdatum::</strong>&nbsp;nach 3 Monaten
            </p>
            <p>
              <strong>Anmerkung:</strong> Diese Cookies wurden nach einem Test
              gesetzt, auch wenn Sie nicht Facebook-Mitglied sind.
            </p>
            <p>
              Sofern Sie bei Facebook angemeldet sind, können Sie Ihre
              Einstellungen für Werbeanzeigen unter{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen'
                href='https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen'
                rel='noopener'
              >
                https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen
              </a>
              &nbsp;selbst verändern. Falls Sie kein Facebook-User sind, können
              Sie auf{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='http://www.youronlinechoices.com/de/praferenzmanagement/?tid=321162594'
                href='http://www.youronlinechoices.com/de/praferenzmanagement/?tid=321162594'
                rel='noopener'
              >
                http://www.youronlinechoices.com/de/praferenzmanagement/
              </a>
              grundsätzlich Ihre nutzungsbasierte Online-Werbung verwalten. Dort
              haben Sie die Möglichkeit, Anbieter zu deaktivieren bzw. zu
              aktivieren.
            </p>
            <p>
              Wenn Sie mehr über den Datenschutz von Facebook erfahren wollen,
              empfehlen wir Ihnen die eigenen Datenrichtlinien des Unternehmens
              auf{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://www.facebook.com/policy.php?tip=321162594'
                href='https://www.facebook.com/policy.php?tip=321162594'
                rel='noopener'
              >
                https://www.facebook.com/policy.php
              </a>
              .
            </p>
            <h2>Facebook Login Datenschutzerklärung</h2>
            <p>
              Wir haben auf unserer Seite das praktische Facebook Login
              integriert. So können Sie sich bei uns ganz einfach mit Ihrem
              Facebook-Konto einloggen, ohne ein weiteres Benutzerkonto anlegen
              zu müssen. Wenn Sie sich entscheiden, Ihre Registrierung über das
              Facebook Login zu machen, werden Sie auf das Social Media Network
              Facebook weitergeleitet. Dort erfolgt die Anmeldung über Ihre
              Facebook Nutzerdaten. Durch dieses Login-Verfahren werden Daten
              über Sie bzw. Ihr Userverhalten gespeichert und an Facebook
              übermittelt.
            </p>
            <p>
              Um die Daten zu speichern, benutzt Facebook verschiedene Cookies.
              Im Folgenden zeigen wir Ihnen die wichtigsten Cookies, die in
              Ihrem Browser gesetzt werden bzw. schon bestehen, wenn Sie sich
              über das Facebook Login auf unserer Seite anmelden:
            </p>
            <p>
              <strong>Name:</strong> fr
              <br />
              <strong>Wert:</strong> 0jieyh4c2GnlufEJ9..Bde09j…1.0.Bde09j
              <br />
              <strong>Verwendungszweck:</strong> Dieses Cookie wird verwendet,
              damit das sozialen Plugin auf unserer Webseite bestmöglich
              funktioniert.
              <br />
              <strong>Ablaufdatum:</strong>&nbsp;nach 3 Monaten
            </p>
            <p>
              <strong>Name:</strong> datr
              <br />
              <strong>Wert:</strong> 4Jh7XUA2321162594SEmPsSfzCOO4JFFl
              <br />
              <strong>Verwendungszweck:</strong> Facebook setzt das
              “datr”-Cookie, wenn ein Webbrowser auf facebook.com zugreift, und
              das Cookie hilft, Anmeldeaktivitäten zu identifizieren und die
              Benutzer zu schützen.
              <br />
              <strong>Ablaufdatum:</strong>&nbsp;nach 2 Jahren
            </p>
            <p>
              <strong>Name:</strong> _js_datr
              <br />
              <strong>Wert:</strong> deleted
              <br />
              <strong>Verwendungszweck:</strong> Dieses Session-Cookie setzt
              Facebook zu Trackingzwecken, auch wenn Sie kein Facebook-Konto
              haben oder ausgeloggt sind.
              <br />
              <strong>Ablaufdatum:</strong> nach Sitzungsende
            </p>
            <p>
              <strong>Anmerkung:</strong> Die angeführten Cookies sind nur eine
              kleine Auswahl der Cookies, die Facebook zur Verfügung stehen.
              Weitere Cookies sind beispielsweise _ fbp, sb oder wd. Eine
              vollständige Aufzählung ist nicht möglich, da Facebook über eine
              Vielzahl an Cookies verfügt und diese variabel einsetzt.
            </p>
            <p>
              Der Facebook Login bietet Ihnen einerseits einen schnellen und
              einfachen Registrierungsprozess, andererseits haben wir so die
              Möglichkeit Daten mit Facebook zu teilen. Dadurch können wir unser
              Angebot und unsere Werbeaktionen besser an Ihre Interessen und
              Bedürfnisse anpassen. Daten, die wir auf diese Weise von Facebook
              erhalten, sind öffentliche Daten wie
            </p>
            <ul>
              <li>Ihr Facebook-Name</li>
              <li>Ihr Profilbild</li>
              <li>eine hinterlegte E-Mail-Adresse</li>
              <li>Freundeslisten</li>
              <li>Buttons-Angaben (z.B. „Gefällt mir“-Button)</li>
              <li>Geburtstagsdatum</li>
              <li>Sprache</li>
              <li>Wohnort</li>
            </ul>
            <p>
              Im Gegenzug stellen wir Facebook Informationen über Ihre
              Aktivitäten auf unserer Webseite bereit. Das sind unter anderem
              Informationen über Ihr verwendetes Endgerät, welche Unterseiten
              Sie bei uns besuchen oder welche Produkte Sie bei uns erworben
              haben.
            </p>
            <p>
              Durch die Verwendung von Facebook Login willigen Sie der
              Datenverarbeitung ein. Sie können diese Vereinbarung jederzeit
              widerrufen. Wenn Sie mehr Informationen über die Datenverarbeitung
              durch Facebook erfahren wollen, empfehlen wir Ihnen die
              Facebook-Datenschutzerklärung unter{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://de-de.facebook.com/policy.php?tid=321162594'
                href='https://de-de.facebook.com/policy.php?tid=321162594'
                rel='noopener'
              >
                https://de-de.facebook.com/policy.php
              </a>
              .
            </p>
            <p>
              Sofern Sie bei Facebook angemeldet sind, können Sie Ihre
              Einstellungen für Werbeanzeigen unter{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen'
                href='https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen'
                rel='noopener'
              >
                https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen
              </a>
              &nbsp;selbst verändern.
            </p>
            <h2>Cloudflare Datenschutzerklärung</h2>
            <p>
              Wir verwenden auf dieser Webseite Cloudflare der Firma Cloudflare,
              Inc. (101 Townsend St., San Francisco, CA 94107, USA), um unsere
              Webseite schneller und sicherer zu machen. Dabei verwendet
              Cloudflare Cookies und verarbeitet User-Daten. Cloudflare, Inc.
              ist eine amerikanische Firma, die ein Content Delivery Network und
              diverse Sicherheitsdienste bereitstellt. Diese Dienste befinden
              sich zwischen dem User und unserem Hosting-Anbieter und fungieren
              als{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://de.wikipedia.org/wiki/Reverse_Proxy'
                href='https://de.wikipedia.org/wiki/Reverse_Proxy'
                rel='noopener'
              >
                Reverse Proxy
              </a>
              &nbsp;für Webseiten. Was das alles genau bedeutet, versuchen wir
              im Folgenden genauer zu erläutern.
            </p>
            <h3>Was ist Cloudflare?</h3>
            <p>
              Ein Content Delivery Network (CDN), wie es die Firma Cloudflare
              bereitstellt, ist nichts anderes als ein Netzwerk aus über das
              Internet verbundenen Servern. Cloudflare hat auf der ganzen Welt
              solche Server verteilt, um Webseiten schneller auf Ihren
              Bildschirm zu bringen. Ganz einfach gesagt, legt Cloudflare Kopien
              unserer Website an und platziert sie auf ihren eigenen Servern.
              Wenn Sie jetzt unsere Webseite besuchen, stellt ein System der
              Lastenverteilung sicher, dass die größten Teile unsere Webseite
              von jenem Server ausgeliefert werden, der Ihnen unsere Webseite am
              schnellsten anzeigen kann. Die Strecke der Datenübertragung zu
              Ihrem Browser wird durch ein CDN deutlich verkürzt. Somit wird
              Ihnen der Content unserer Webseite durch Cloudflare nicht nur von
              unserem Hosting-Server geliefert, sondern von Servern aus der
              ganzen Welt. Besonders hilfreich wird der Einsatz von Cloudflare
              für User aus dem Ausland, da hier die Seite von einem Server in
              der Nähe ausgeliefert werden kann. Neben dem schnellen Ausliefern
              von Webseiten bietet Cloudflare auch diverse Sicherheitsdienste,
              wie den DDoS-Schutz oder die Web Application Firewall an.
            </p>
            <h3>Warum wir Cloudflare auf unserer Website verwenden?</h3>
            <p>
              Natürlich wollen wir Ihnen mit unserer Webseite das bestmögliche
              Service bieten. Cloudflare hilft uns dabei, unsere Webseite
              schneller und sicherer zu machen. Cloudflare bietet uns sowohl
              Web-Optimierungen als auch Sicherheitsdienste, wie DDoS-Schutz und
              Web-Firewall, an. Dazu gehören auch ein{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://de.wikipedia.org/wiki/Reverse_Proxy'
                href='https://de.wikipedia.org/wiki/Reverse_Proxy'
                rel='noopener'
              >
                Reverse-Proxy
              </a>{' '}
              und das Content-Verteilungsnetzwerk (CDN). Cloudflare blockiert
              Bedrohungen und begrenzt missbräuchliche Bots und Crawler, die
              unsere Bandbreite und Serverressourcen verschwenden. Durch das
              Speichern unserer Webseite auf lokalen Datenzentren und das
              Blockieren von Spam-Software ermöglicht Cloudflare, unsere
              Bandbreitnutzung etwa um 60% zu reduzieren. Das Bereitstellen von
              Inhalten über ein Datenzentrum in Ihrer Nähe und einiger dort
              durchgeführten Web-Optimierungen reduziert die durchschnittliche
              Ladezeit einer Website etwa um die Hälfte. Durch die Einstellung
              „I´m Under Attack Mode“ („Ich werde angegriffen“-Modus) können
              laut Cloudflare weitere Angriffe abgeschwächt werden, indem eine
              JavaScript-Rechenaufgabe angezeigt wird, die man lösen muss, bevor
              ein User auf eine Webseite zugreifen kann. Insgesamt wird dadurch
              unsere Website deutlich leistungsstärker und weniger anfällig auf
              Spam oder andere Angriffe.
            </p>
            <h3>Welche Daten werden von Cloudflare gespeichert?</h3>
            <p>
              Cloudflare leitet im Allgemeinen nur jene Daten weiter, die von
              Websitebetreibern gesteuert werden. Die Inhalte werden also nicht
              von Cloudflare bestimmt, sondern immer vom Websitebetreiber
              selbst. Zudem erfasst Cloudflare unter Umständen bestimmte
              Informationen zur Nutzung unserer Webseite und verarbeitet Daten,
              die von uns versendet werden oder für die Cloudflare entsprechende
              Anweisungen erhalten hat. In den meisten Fällen erhält Cloudflare
              Daten wie Kontaktinformationen, IP-Adressen,
              Sicherheitsfingerabdrücke, DNS-Protokolldaten und Leistungsdaten
              für Webseiten, die aus der Browseraktivitäten abgeleitet werden.
              Protokolldaten helfen Cloudflare beispielsweise dabei, neue
              Bedrohungen zu erkennen. So kann Cloudflare einen hohen
              Sicherheitsschutz für unsere Webseite gewährleisten. Cloudflare
              verarbeitet diese Daten im Rahmen der Services unter Einhaltung
              der geltenden Gesetze. Dazu zählt natürlich auch die
              Datenschutzgrundverordnung (DSGVO).
            </p>
            <p>
              Aus Sicherheitsgründen verwendet Cloudflare auch ein Cookie. Das
              Cookie (__cfduid) wird verwendet, um einzelne User hinter einer
              gemeinsam genutzten IP-Adresse zu identifizieren und
              Sicherheitseinstellungen für jeden einzelnen User anzuwenden. Sehr
              nützlich wird dieses Cookie beispielweise, wenn Sie unsere
              Webseite aus einem Lokal benutzen, in dem sich eine Reihe
              infizierter Computer befinden. Wenn aber Ihr Computer
              vertrauenswürdig ist, können wir dies anhand des Cookies erkennen.
              So können Sie, trotz infizierter PCs im Umfeld, ungehindert durch
              unsere Webseite surfen. Wichtig zu wissen ist auch noch, dass
              dieses Cookie keine personenbezogenen Daten speichert. Dieses
              Cookie ist für die Cloudflare-Sicherheitsfunktionen unbedingt
              erforderlich und kann nicht deaktiviert werden.
            </p>
            <h3>Cookies von Cloudflare</h3>
            <ul>
              <li>
                __cfduid
                <ul>
                  <li>Ablaufzeit: 1 Jahr</li>
                  <li>
                    Verwendung: Sicherheitseinstellungen für jeden einzelnen
                    Besucher
                  </li>
                  <li>
                    Beispielhafter
                    Wert:&nbsp;d798bf7df9c1ad5b7583eda5cc5e78321162594
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Cloudflare arbeitet auch mit Drittanbietern zusammen. Diese dürfen
              personenbezogene Daten nur unter Anweisung der Firma Cloudflare
              und in Übereinstimmung mit den Datenschutzrichtlinien und anderer
              Vertraulichkeits- und Sicherheitsmaßnahmen verarbeiten. Ohne
              explizite Einwilligung von uns gibt Cloudflare keine
              personenbezogenen Daten weiter.
            </p>
            <h3>Wie lange und wo werden die Daten gespeichert?</h3>
            <p>
              Cloudflare speichert Ihre Informationen hauptsächlich in den USA
              und im Europäischen Wirtschaftsraum. Cloudflare kann die oben
              beschriebenen Informationen aus der ganzen Welt übertragen und
              darauf zugreifen. Im Allgemeinen speichert Cloudflare Daten auf
              User-Ebene für Domains in den Versionen Free, Pro und Business für
              weniger als 24 Stunden. Für Enterprise Domains, die Cloudflare
              Logs (früher Enterprise LogShare oder ELS) aktiviert haben, können
              die Daten bis zu 7 Tage gespeichert werden. Wenn allerdings
              IP-Adressen bei Cloudflare Sicherheitswarnungen auslösen, kann es
              zu Ausnahmen der oben angeführten Speicherungsdauer kommen.
            </p>
            <h3>
              Wie kann ich meine Daten löschen bzw. die Datenspeicherung
              verhindern?
            </h3>
            <p>
              Cloudflare bewahrt Daten-Protokolle nur solange wie nötig auf und
              diese Daten werden auch in den meisten Fällen innerhalb von 24
              Stunden wieder gelöscht. Cloudflare speichert auch keine
              personenbezogenen Daten, wie beispielsweise Ihre IP-Adresse. Es
              gibt allerdings Informationen, die Cloudflare als Teil seiner
              permanenten Protokolle auf unbestimmte Zeit speichert, um so die
              Gesamtleistung von Cloudflare Resolver zu verbessern und etwaige
              Sicherheitsrisiken zu erkennen. Welche permanenten Protokolle
              genau speichert werden, können Sie auf{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://developers.cloudflare.com/1.1.1.1/commitment-to-privacy/privacy-policy/privacy-policy/'
                href='https://developers.cloudflare.com/1.1.1.1/commitment-to-privacy/privacy-policy/privacy-policy/'
                rel='noopener'
              >
                https://developers.cloudflare.com/1.1.1.1/commitment-to-privacy/privacy-policy/privacy-policy/
              </a>{' '}
              nachlesen. Alle Daten, die Cloudflare sammelt (temporär oder
              permanent), werden von allen personenbezogenen Daten bereinigt.
              Alle permanenten Protokolle werden zudem von Cloudflare
              anonymisiert.
            </p>
            <p>
              Cloudflare geht in Ihrer Datenschutzerklärung darauf ein, dass sie
              für die Inhalte, die sie erhalten nicht verantwortlich sind. Wenn
              Sie beispielsweise bei Cloudflare anfragen, ob sie Ihre Inhalte
              aktualisieren oder löschen können, verweist Cloudflare
              grundsätzlich auf uns als Websitebetreiber. Sie können auch die
              gesamte Erfassung und Verarbeitung Ihrer Daten durch Cloudflare
              komplett unterbinden, indem Sie die Ausführung von Script-Code in
              Ihrem Browser deaktivieren oder einen Script-Blocker in Ihren
              Browser einbinden.
            </p>
            <p>
              Cloudflare ist aktiver Teilnehmer beim EU-U.S. Privacy Shield
              Framework wodurch der korrekte und sichere Datentransfer
              persönlicher Daten geregelt wird. Mehr Informationen dazu finden
              Sie auf{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://www.privacyshield.gov/participant?id=a2zt0000000GnZKAA0&amp;tid=321162594'
                href='https://www.privacyshield.gov/participant?id=a2zt0000000GnZKAA0&amp;tid=321162594'
                rel='noopener'
              >
                https://www.privacyshield.gov/participant?id=a2zt0000000GnZKAA0
              </a>
              .<br />
              Mehr Informationen zum Datenschutz bei Cloudflare finden Sie auf{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://www.cloudflare.com/de-de/privacypolicy/?tid=321162594'
                href='https://www.cloudflare.com/de-de/privacypolicy/?tid=321162594'
                rel='noopener'
              >
                https://www.cloudflare.com/de-de/privacypolicy/
              </a>
            </p>
            <h2>Instagram Datenschutzerklärung</h2>
            <p>
              Wir haben auf unserer Webseite Funktionen von Instagram eingebaut.
              Instagram ist eine Social Media Plattform des Unternehmens
              Instagram LLC, 1601 Willow Rd, Menlo Park CA 94025, USA. Instagram
              ist seit 2012 ein Tochterunternehmen von Facebook Inc. und gehört
              zu den Facebook-Produkten. Das Einbetten von Instagram-Inhalten
              auf unserer Webseite nennt man Embedding. Dadurch können wir Ihnen
              Inhalte wie Buttons, Fotos oder Videos von Instagram direkt auf
              unserer Webseite zeigen. Wenn Sie Webseiten unserer Webpräsenz
              aufrufen, die eine Instagram-Funktion integriert haben, werden
              Daten an Instagram übermittelt, gespeichert und verarbeitet.
              Instagram verwendet dieselben Systeme und Technologien wie
              Facebook. Ihre Daten werden somit über alle Facebook-Firmen hinweg
              verarbeitet.
            </p>
            <p>
              Im Folgenden wollen wir Ihnen einen genaueren Einblick geben,
              warum Instagram Daten sammelt, um welche Daten es sich handelt und
              wie Sie die Datenverarbeitung weitgehend kontrollieren können. Da
              Instagram zu Facebook Inc. gehört, beziehen wir unsere
              Informationen einerseits von den Instagram-Richtlinien,
              andererseits allerdings auch von den Facebook-Datenrichtlinien
              selbst.
            </p>
            <h3>Was ist Instagram?</h3>
            <p>
              Instagram ist eines der bekanntesten Social Media Netzwerken
              weltweit. Instagram kombiniert die Vorteile eines Blogs mit den
              Vorteilen von audiovisuellen Plattformen wie YouTube oder Vimeo.
              Sie können auf „Insta“ (wie viele der User die Plattform salopp
              nennen) Fotos und kurze Videos hochladen, mit verschiedenen
              Filtern bearbeiten und auch in anderen sozialen Netzwerken
              verbreiten. Und wenn Sie selbst nicht aktiv sein wollen, können
              Sie auch nur anderen interessante Users folgen.
            </p>
            <h3>Warum verwenden wir Instagram auf unserer Webseite?</h3>
            <p>
              Instagram ist jene Social Media Plattform, die in den letzten
              Jahren so richtig durch die Decke ging. Und natürlich haben auch
              wir auf diesen Boom reagiert. Wir wollen, dass Sie sich auf
              unserer Webseite so wohl wie möglich fühlen. Darum ist für uns
              eine abwechslungsreiche Aufbereitung unserer Inhalte
              selbstverständlich. Durch die eingebetteten Instagram-Funktionen
              können wir unseren Content mit hilfreichen, lustigen oder
              spannenden Inhalten aus der Instagram-Welt bereichern. Da
              Instagram eine Tochtergesellschaft von Facebook ist, können uns
              die erhobenen Daten auch für personalisierte Werbung auf Facebook
              dienlich sein. So bekommen unsere Werbeanzeigen nur Menschen, die
              sich wirklich für unsere Produkte oder Dienstleistungen
              interessieren.
            </p>
            <p>
              Instagram nützt die gesammelten Daten auch&nbsp;zu Messungs- und
              Analysezwecken. Wir bekommen zusammengefasste Statistiken und so
              mehr Einblick über Ihre Wünsche und Interessen. Wichtig ist zu
              erwähnen, dass diese Berichte Sie nicht persönlich identifizieren.
            </p>
            <h3>Welche Daten werden von Instagram gespeichert?</h3>
            <p>
              Wenn Sie auf eine unserer Seiten stoßen, die Instagram-Funktionen
              (wie Instagrambilder oder Plug-ins) eingebaut haben, setzt sich
              Ihr Browser automatisch mit den Servern von Instagram in
              Verbindung. Dabei werden Daten an Instagram versandt, gespeichert
              und verarbeitet. Und zwar unabhängig, ob Sie ein Instagram-Konto
              haben oder nicht. Dazu zählen Informationen über unserer Webseite,
              über Ihren Computer, über getätigte Käufe, über Werbeanzeigen, die
              Sie sehen und wie Sie unser Angebot nutzen. Weiters werden auch
              Datum und Uhrzeit Ihrer Interaktion mit Instagram gespeichert.
              Wenn Sie ein Instagram-Konto haben bzw. eingeloggt sind, speichert
              Instagram deutlich mehr Daten über Sie.
            </p>
            <p>
              Facebook unterscheidet zwischen Kundendaten und Eventdaten. Wir
              gehen davon aus, dass dies bei Instagram genau so der Fall ist.
              Kundendaten sind zum Beispiel Name, Adresse, Telefonnummer und
              IP-Adresse. Wichtig zu erwähnen ist, dass diese Kundendaten erst
              an Instagram übermittelt werden, wenn Sie zuvor „gehasht“ wurden.
              Hashing meint, ein Datensatz wird in eine Zeichenkette verwandelt.
              Dadurch kann man die Kontaktdaten verschlüsseln. Zudem werden auch
              die oben genannten „Event-Daten“ übermittelt. Unter „Event-Daten“
              versteht Facebook – und folglich auch Instagram – Daten über Ihr
              Userverhalten. Es kann auch vorkommen, dass Kontaktdaten mit
              Event-Daten kombiniert werden. Die erhobenen Kontaktdaten werden
              mit den Daten, die Instagram bereits von Ihnen hat abgeglichen.
            </p>
            <p>
              Über kleine Text-Dateien (Cookies), die meist in Ihrem Browser
              gesetzt werden, werden die gesammelten Daten an Facebook
              übermittelt. Je nach verwendeten Instagram-Funktionen und ob Sie
              selbst ein Instagram-Konto haben, werden unterschiedlich viele
              Daten gespeichert.
            </p>
            <p>
              Wir gehen davon aus, dass bei Instagram die Datenverarbeitung
              gleich funktioniert wie bei Facebook. Das bedeutet: wenn Sie ein
              Instagram-Konto haben oder{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='http://www.instagram.com?tid=321162594'
                href='http://www.instagram.com?tid=321162594'
                rel='noopener'
              >
                www.instagram.com
              </a>{' '}
              besucht haben, hat Instagram zumindest ein Cookie gesetzt. Wenn
              das der Fall ist, sendet Ihr Browser über das Cookie Infos an
              Instagram, sobald Sie mit einer Instagram-Funktion in Berührung
              kommen. Spätestens nach 90 Tagen (nach Abgleichung) werden diese
              Daten wieder gelöscht bzw. anonymisiert. Obwohl wir uns intensiv
              mit der Datenverarbeitung von Instagram beschäftigt haben, können
              wir nicht ganz genau sagen, welche Daten Instagram exakt sammelt
              und speichert.
            </p>
            <p>
              Im Folgenden zeigen wir Ihnen Cookies, die in Ihrem Browser
              mindestens gesetzt werden, wenn Sie auf eine Instagram-Funktion
              (wie z.B. Button oder ein Insta-Bild) klicken. Bei unserem Test
              gehen wir davon aus, dass Sie kein Instagram-Konto haben. Wenn Sie
              bei Instagram eingeloggt sind, werden natürlich deutlich mehr
              Cookies in Ihrem Browser gesetzt.
            </p>
            <p>Diese Cookies wurden bei unserem Test verwendet:</p>
            <p>
              <strong>Name: </strong>csrftoken
              <br />
              <strong>Wert: </strong>“”
              <br />
              <strong>Verwendungszweck:&nbsp;</strong>Dieses Cookie wird mit
              hoher Wahrscheinlichkeit aus Sicherheitsgründen gesetzt, um
              Fälschungen von Anfragen zu verhindern. Genauer konnten wir das
              allerdings nicht in Erfahrung bringen.
              <br />
              <strong>Ablaufdatum:</strong> nach einem Jahr
            </p>
            <p>
              <strong>Name: </strong>mid
              <br />
              <strong>Wert: </strong>“”
              <br />
              <strong>Verwendungszweck: </strong>Instagram setzt dieses Cookie,
              um die eigenen Dienstleistungen und Angebote in und außerhalb von
              Instagram zu optimieren. Das Cookie legt eine eindeutige User-ID
              fest.
              <br />
              <strong>Ablaufdatum:</strong> nach Ende der Sitzung
            </p>
            <p>
              <strong>Name:</strong> fbsr_321162594124024
              <br />
              <strong>Wert: </strong>keine Angaben
              <br />
              <strong>Verwendungszweck:&nbsp;</strong>Dieses Cookie speichert
              die Log-in-Anfrage für User der Instagram-App.<strong> </strong>
              <br />
              <strong>Ablaufdatum:</strong> nach Ende der Sitzung
            </p>
            <p>
              <strong>Name:</strong> rur
              <br />
              <strong>Wert: </strong>ATN
              <br />
              <strong>Verwendungszweck: </strong>Dabei handelt es sich um ein
              Instagram-Cookie, das die Funktionalität auf Instagram
              gewährleistet.
              <br />
              <strong>Ablaufdatum:</strong> nach Ende der Sitzung
            </p>
            <p>
              <strong>Name:</strong> urlgen
              <br />
              <strong>Wert: </strong>194.96.75.33:
              1901:1iEtYv:Y833k2_UjKvXgYe321162594”
              <br />
              <strong>Verwendungszweck: </strong>Dieses Cookie dient den
              Marketingzwecken von Instagram.
              <br />
              <strong>Ablaufdatum:</strong> nach Ende der Sitzung
            </p>
            <p>
              <strong>Anmerkung:</strong> Wir können hier keinen
              Vollständigkeitsanspruch erheben. Welche Cookies im individuellen
              Fall gesetzt werden, hängt von den eingebetteten Funktionen und
              Ihrer Verwendung von Instagram ab.
            </p>
            <h3>Wie lange und wo werden die Daten gespeichert?</h3>
            <p>
              Instagram teilt die erhaltenen Informationen zwischen den
              Facebook-Unternehmen mit externen Partnern und mit Personen, mit
              denen Sie sich weltweit verbinden. Die Datenverarbeitung erfolgt
              unter Einhaltung der eigenen Datenrichtlinie. Ihre Daten sind,
              unter anderem aus Sicherheitsgründen, auf den Facebook-Servern auf
              der ganzen Welt verteilt. Die meisten dieser Server stehen in den
              USA.
            </p>
            <h3>
              Wie kann ich meine Daten löschen bzw. die Datenspeicherung
              verhindern?
            </h3>
            <p>
              Dank der Datenschutz Grundverordnung haben Sie das Recht auf
              Auskunft, Übertragbarkeit, Berichtigung und Löschung Ihrer Daten.
              In den Instagram-Einstellungen können Sie Ihre Daten verwalten.
              Wenn Sie Ihre Daten auf Instagram völlig löschen wollen, müssen
              Sie Ihr Instagram-Konto dauerhaft löschen.
            </p>
            <p>Und so funktioniert die Löschung des Instagram-Kontos:</p>
            <p>
              Öffnen Sie zuerst die Instagram-App. Auf Ihrer Profilseite gehen
              Sie nach unten und klicken Sie auf „Hilfebereich“. Jetzt kommen
              Sie auf die Webseite des Unternehmens. Klicken Sie auf der
              Webseite auf „Verwalten des Kontos“ und dann auf „Dein Konto
              löschen“.
            </p>
            <p>
              Wenn Sie Ihr Konto ganz löschen, löscht Instagram Posts wie
              beispielsweise Ihre Fotos und Status-Updates. Informationen, die
              andere Personen über Sie geteilt haben, gehören nicht zu Ihrem
              Konto und werden folglich nicht gelöscht.
            </p>
            <p>
              Wie bereits oben erwähnt, speichert Instagram Ihre Daten in erster
              Linie über Cookies. Diese Cookies können Sie in Ihrem Browser
              verwalten, deaktivieren oder löschen. Abhängig von Ihrem Browser
              funktioniert die Verwaltung immer ein bisschen anders. Hier zeigen
              wir Ihnen die Anleitungen der wichtigsten Browser.
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.google.com/chrome/answer/95647?tid=321162594'
                href='https://support.google.com/chrome/answer/95647?tid=321162594'
                rel='noopener'
              >
                Chrome: Cookies in Chrome löschen, aktivieren und verwalten
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=321162594'
                href='https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=321162594'
                rel='noopener'
              >
                Safari: Verwalten von Cookies und Websitedaten mit Safari
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=321162594'
                href='https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=321162594'
                rel='noopener'
              >
                Firefox: Cookies löschen, um Daten zu entfernen, die Websites
                auf Ihrem Computer abgelegt haben
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=321162594'
                href='https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=321162594'
                rel='noopener'
              >
                Internet Explorer: Löschen und Verwalten von Cookies
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=321162594'
                href='https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=321162594'
                rel='noopener'
              >
                Microsoft Edge: Löschen und Verwalten von Cookies
              </a>
            </p>
            <p>
              Sie können auch grundsätzlich Ihren Browser so einrichten, dass
              Sie immer informiert werden, wenn ein Cookie gesetzt werden soll.
              Dann können Sie immer individuell entscheiden, ob Sie das Cookie
              zulassen wollen oder nicht.
            </p>
            <p>
              Instagram ist ein Tochterunternehmen von Facebook Inc. und
              Facebook ist aktiver Teilnehmer beim EU-U.S. Privacy Shield
              Framework. Dieses Framework stellt eine korrekte Datenübertragung
              zwischen den USA und der Europäischen Union sicher. Unter&nbsp;
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC'
                href='https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC'
                rel='noopener'
              >
                https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&nbsp;
              </a>
              &nbsp;erfahren Sie mehr darüber. Wir haben versucht, Ihnen die
              wichtigsten Informationen über die Datenverarbeitung durch
              Instagram näherzubringen. Auf{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://help.instagram.com/519522125107875'
                href='https://help.instagram.com/519522125107875'
                rel='noopener'
              >
                https://help.instagram.com/519522125107875
              </a>
              <br />
              können Sie sich noch näher mit den Datenrichtlinien von Instagram
              auseinandersetzen.
            </p>
            <h2>YouTube Datenschutzerklärung</h2>
            <p>
              Wir haben auf unserer Webseite YouTube-Videos eingebaut. So können
              wir Ihnen interessante Videos direkt auf unserer Seite
              präsentieren. YouTube ist ein Videoportal, das seit 2006 eine
              Tochterfirma von Google LLC ist. Betrieben wird das Videoportal
              durch YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA.
              Wenn Sie auf unserer Webseite eine Seite aufrufen, die ein
              YouTube-Video eingebettet hat, verbindet sich Ihr Browser
              automatisch mit den Servern von YouTube bzw. Google. Dabei werden
              (je nach Einstellungen) verschiedene Daten übertragen. Für die
              gesamte Datenverarbeitung ist Google verantwortlich und es gilt
              somit auch der Datenschutz von Google.
            </p>
            <p>
              Im Folgenden wollen wir Ihnen genauer erklären, welche Daten
              verarbeitet werden, warum wir YouTube-Videos eingebunden haben und
              wie Sie Ihre Daten verwalten oder löschen können.
            </p>
            <h3>Was ist YouTube?</h3>
            <p>
              Auf YouTube können die User kostenlos Videos ansehen, bewerten,
              kommentieren und selbst hochladen. Über die letzten Jahre wurde
              YouTube zu einem der wichtigsten Social-Media-Kanäle weltweit.
              Damit wir Videos auf unserer Webseite anzeigen können, stellt
              YouTube einen Codeausschnitt zur Verfügung, den wir auf unserer
              Seite eingebaut haben.
            </p>
            <h3>Warum verwenden wir YouTube-Videos auf unserer Webseite?</h3>
            <p>
              YouTube ist die Videoplattform mit den meisten Besuchern und dem
              besten Content. Wir sind bemüht, Ihnen die bestmögliche
              User-Erfahrung auf unserer Webseite zu bieten. Und natürlich
              dürfen interessante Videos dabei nicht fehlen. Mithilfe unserer
              eingebetteten Videos stellen wir Ihnen neben unseren Texten und
              Bildern weiteren hilfreichen Content zur Verfügung. Zudem wird
              unsere Webseite auf der Google-Suchmaschine durch die
              eingebetteten Videos leichter gefunden. Auch wenn wir über Google
              Ads Werbeanzeigen schalten, kann Google – dank der gesammelten
              Daten – diese Anzeigen wirklich nur Menschen zeigen, die sich für
              unsere Angebote interessieren.
            </p>
            <h3>Welche Daten werden von YouTube gespeichert?</h3>
            <p>
              Sobald Sie eine unserer Seiten besuchen, die ein YouTube-Video
              eingebaut hat, setzt YouTube zumindest ein Cookie, das Ihre
              IP-Adresse und unsere URL speichert. Wenn Sie in Ihrem
              YouTube-Konto eingeloggt sind, kann YouTube Ihre Interaktionen auf
              unserer Webseite meist mithilfe von Cookies Ihrem Profil zuordnen.
              Dazu zählen Daten wie Sitzungsdauer, Absprungrate, ungefährer
              Standort, technische Informationen wie Browsertyp,
              Bildschirmauflösung oder Ihr Internetanbieter. Weitere Daten
              können Kontaktdaten, etwaige Bewertungen, das Teilen von Inhalten
              über Social Media oder das Hinzufügen zu Ihren Favoriten auf
              YouTube sein.
            </p>
            <p>
              Wenn Sie nicht in einem Google-Konto oder einem Youtube-Konto
              angemeldet sind, speichert Google Daten mit einer eindeutigen
              Kennung, die mit Ihrem Gerät, Browser oder App verknüpft sind. So
              bleibt beispielsweise Ihre bevorzugte Spracheinstellung
              beibehalten. Aber viele Interaktionsdaten können nicht gespeichert
              werden, da weniger Cookies gesetzt werden.
            </p>
            <p>
              In der folgenden Liste zeigen wir Cookies, die in einem Test im
              Browser gesetzt wurden. Wir zeigen einerseits Cookies, die ohne
              angemeldeten YouTube-Konto gesetzt werden. Andererseits zeigen wir
              Cookies, die mit angemeldetem Account gesetzt werden. Die Liste
              kann keinen Vollständigkeitsanspruch erheben, weil die Userdaten
              immer von den Interaktionen auf YouTube abhängen.
            </p>
            <p>
              <strong>Name:</strong> YSC
              <br />
              <strong>Wert:</strong> b9-CV6ojI5Y
              <br />
              <strong>Verwendungszweck:</strong> Dieses Cookie registriert eine
              eindeutige ID, um Statistiken des gesehenen Videos zu speichern.
              <br />
              <strong>Ablaufdatum:</strong> nach Sitzungsende
            </p>
            <p>
              <strong>Name:</strong> PREF
              <br />
              <strong>Wert:</strong> f1=50000000
              <br />
              <strong>Verwendungszweck:</strong> Dieses Cookie registriert
              ebenfalls Ihre eindeutige ID. Google bekommt über PREF
              Statistiken, wie Sie YouTube-Videos auf unserer Webseite
              verwenden.
              <br />
              <strong>Ablaufdatum:</strong>&nbsp;nach 8 Monate
            </p>
            <p>
              <strong>Name:</strong> GPS
              <br />
              <strong>Wert:</strong> 1<br />
              <strong>Verwendungszweck:</strong> Dieses Cookie registriert Ihre
              eindeutige ID auf mobilen Geräten, um den GPS-Standort zu tracken.
              <br />
              <strong>Ablaufdatum:</strong>&nbsp;nach 30 Minuten
            </p>
            <p>
              <strong>Name:</strong> VISITOR_INFO1_LIVE
              <br />
              <strong>Wert:</strong> 95Chz8bagyU
              <br />
              <strong>Verwendungszweck:</strong> Dieses Cookie versucht die
              Bandbreite des Users auf unseren Webseiten (mit eingebautem
              YouTube-Video) zu schätzen.
              <br />
              <strong>Ablaufdatum:</strong>&nbsp;nach 8 Monaten
            </p>
            <p>
              Weitere Cookies, die gesetzt werden, wenn Sie mit Ihrem
              YouTube-Konto angemeldet sind:
            </p>
            <p>
              <strong>Name:</strong> APISID
              <br />
              <strong>Wert:</strong> zILlvClZSkqGsSwI/AU1aZI6HY7321162594-
              <br />
              <strong>Verwendungszweck:</strong> Dieses Cookie wird verwendet,
              um ein Profil über Ihre Interessen zu erstellen. Genützt werden
              die Daten für personalisierte Werbeanzeigen.
              <br />
              <strong>Ablaufdatum:</strong>&nbsp;nach 2 Jahre
            </p>
            <p>
              <strong>Name:</strong> CONSENT
              <br />
              <strong>Wert:</strong> YES+AT.de+20150628-20-0
              <br />
              <strong>Verwendungszweck:</strong> Das Cookie speichert den Status
              der Zustimmung eines Users zur Nutzung unterschiedlicher Services
              von Google. CONSENT dient auch der Sicherheit, um User zu
              überprüfen und Userdaten vor unbefugten Angriffen zu schützen.
              <br />
              <strong>Ablaufdatum: </strong>nach 19 Jahren
            </p>
            <p>
              <strong>Name:</strong> HSID
              <br />
              <strong>Wert:</strong> AcRwpgUik9Dveht0I
              <br />
              <strong>Verwendungszweck:</strong> Dieses Cookie wird verwendet,
              um ein Profil über Ihre Interessen zu erstellen. Diese Daten
              helfen personalisierte Werbung anzeigen zu können.
              <br />
              <strong>Ablaufdatum:</strong>&nbsp;nach 2 Jahren
            </p>
            <p>
              <strong>Name:</strong> LOGIN_INFO
              <br />
              <strong>Wert:</strong> AFmmF2swRQIhALl6aL…
              <br />
              <strong>Verwendungszweck:</strong> In diesem Cookie werden
              Informationen über Ihre Login-Daten gespeichert.
              <br />
              <strong>Ablaufdatum:</strong>&nbsp;nach 2 Jahren
            </p>
            <p>
              <strong>Name:</strong> SAPISID
              <br />
              <strong>Wert:</strong> 7oaPxoG-pZsJuuF5/AnUdDUIsJ9iJz2vdM
              <br />
              <strong>Verwendungszweck:</strong> Dieses Cookie funktioniert,
              indem es Ihren Browser und Ihr Gerät eindeutig identifiziert. Es
              wird verwendet, um ein Profil über Ihre Interessen zu erstellen.
              <br />
              <strong>Ablaufdatum:</strong>&nbsp;nach 2 Jahren
            </p>
            <p>
              <strong>Name:</strong> SID
              <br />
              <strong>Wert:</strong> oQfNKjAsI321162594-
              <br />
              <strong>Verwendungszweck:</strong> Dieses Cookie speichert Ihre
              Google-Konto-ID und Ihren letzten Anmeldezeitpunkt in digital
              signierter und verschlüsselter Form.
              <br />
              <strong>Ablaufdatum:</strong>&nbsp;nach 2 Jahren
            </p>
            <p>
              <strong>Name:</strong> SIDCC
              <br />
              <strong>Wert:</strong> AN0-TYuqub2JOcDTyL
              <br />
              <strong>Verwendungszweck:</strong> Dieses Cookie speichert
              Informationen, wie Sie die Webseite nutzen und welche Werbung Sie
              vor dem Besuch auf unserer Seite möglicherweise gesehen haben.
              <br />
              <strong>Ablaufdatum:</strong>&nbsp;nach 3 Monaten
            </p>
            <h3>Wie lange und wo werden die Daten gespeichert?</h3>
            <p>
              Die Daten, die YouTube von Ihnen erhält und verarbeitet werden auf
              den Google-Servern gespeichert. Die meisten dieser Server befinden
              sich in Amerika. Unter{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://www.google.com/about/datacenters/inside/locations/?hl=de'
                href='https://www.google.com/about/datacenters/inside/locations/?hl=de'
                rel='noopener'
              >
                https://www.google.com/about/datacenters/inside/locations/?hl=de
              </a>{' '}
              &nbsp;sehen Sie genau wo sich die Google-Rechenzentren befinden.
              Ihre Daten sind auf den Servern verteilt. So sind die Daten
              schneller abrufbar und vor Manipulation besser geschützt.
            </p>
            <p>
              Die erhobenen Daten speichert Google unterschiedlich lang. Manche
              Daten können Sie jederzeit löschen, andere werden automatisch nach
              einer begrenzten Zeit gelöscht und wieder andere werden von Google
              über längere Zeit gespeichert. Einige Daten (wie Elemente aus
              „Meine Aktivität“, Fotos oder Dokumente, Produkte), die in Ihrem
              Google-Konto gespeichert sind, bleiben so lange gespeichert, bis
              Sie sie löschen. Auch wenn Sie nicht in einem Google-Konto
              angemeldet sind, können Sie einige Daten, die mit Ihrem Gerät,
              Browser oder App verknüpft sind, löschen.
            </p>
            <h3>
              Wie kann ich meine Daten löschen bzw. die Datenspeicherung
              verhindern?
            </h3>
            <p>
              Grundsätzlich können Sie Daten im Google Konto manuell löschen.
              Mit der 2019 eingeführten automatische Löschfunktion von Standort-
              und Aktivitätsdaten werden Informationen abhängig von Ihrer
              Entscheidung – entweder 3 oder 18 Monate gespeichert und dann
              gelöscht.
            </p>
            <p>
              Unabhängig, ob Sie ein Google-Konto haben oder nicht, können Sie
              Ihren Browser so konfigurieren, dass Cookies von Google gelöscht
              bzw. deaktiviert werden. Je nach dem welchen Browser Sie
              verwenden, funktioniert dies auf unterschiedliche Art und Weise.
              Die folgenden Anleitungen zeigen, wie Sie Cookies in Ihrem Browser
              verwalten:
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.google.com/chrome/answer/95647?tid=321162594'
                href='https://support.google.com/chrome/answer/95647?tid=321162594'
                rel='noopener'
              >
                Chrome: Cookies in Chrome löschen, aktivieren und verwalten
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=321162594'
                href='https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=321162594'
                rel='noopener'
              >
                Safari: Verwalten von Cookies und Websitedaten mit Safari
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=321162594'
                href='https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=321162594'
                rel='noopener'
              >
                Firefox: Cookies löschen, um Daten zu entfernen, die Websites
                auf Ihrem Computer abgelegt haben
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=321162594'
                href='https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=321162594'
                rel='noopener'
              >
                Internet Explorer: Löschen und Verwalten von Cookies
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=321162594'
                href='https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=321162594'
                rel='noopener'
              >
                Microsoft Edge: Löschen und Verwalten von Cookies
              </a>
            </p>
            <p>
              Falls Sie grundsätzlich keine Cookies haben wollen, können Sie
              Ihren Browser so einrichten, dass er Sie immer informiert, wenn
              ein Cookie gesetzt werden soll. So können Sie bei jedem einzelnen
              Cookie entscheiden, ob Sie es erlauben oder nicht. Da YouTube ein
              Tochterunternehmen von Google ist, gibt es eine gemeinsame
              Datenschutzerklärung. Wenn Sie mehr über den Umgang mit Ihren
              Daten erfahren wollen, empfehlen wir Ihnen die
              Datenschutzerklärung unter{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://policies.google.com/privacy?hl=de'
                href='https://policies.google.com/privacy?hl=de'
                rel='noopener'
              >
                https://policies.google.com/privacy?hl=de.
              </a>
            </p>
            <h2>YouTube Abonnieren Button Datenschutzerklärung</h2>
            <p>
              Wir haben auf unserer Webseite den YouTube Abonnieren Button
              (engl. „Subscribe-Button“) eingebaut. Sie erkennen den Button
              meist am klassischen YouTube-Logo. Das Logo zeigt vor rotem
              Hintergrund in weißer Schrift die Wörter „Abonnieren“ oder
              „YouTube“ und links davon das weiße „Play-Symbol“. Der Button kann
              aber auch in einem anderen Design dargestellt sein.
            </p>
            <p>
              Unser YouTube-Kanal bietet Ihnen immer wieder lustige,
              interessante oder spannende Videos. Mit dem eingebauten
              „Abonnieren-Button“ können Sie unseren Kanal direkt von unserer
              Webseite aus abonnieren und müssen nicht eigens die
              YouTube-Webseite aufrufen. Wir wollen Ihnen somit den Zugang zu
              unserem umfassenden Content so einfach wie möglich machen. Bitte
              beachten Sie, dass YouTube dadurch Daten von Ihnen speichern und
              verarbeiten kann.
            </p>
            <p>
              Wenn Sie auf unserer Seite einen eingebauten Abo-Button sehen,
              setzt YouTube&nbsp;– laut Google – mindestens ein Cookie. Dieses
              Cookie speichert Ihre IP-Adresse und unsere URL. Auch
              Informationen über Ihren Browser, Ihren ungefähren Standort und
              Ihre voreingestellte Sprache kann YouTube so erfahren. Bei unserem
              Test wurden folgende vier Cookies gesetzt, ohne bei YouTube
              angemeldet zu sein:
            </p>
            <p>
              <strong>Name:</strong> YSC
              <br />
              <strong>Wert:</strong> b9-CV6ojI5321162594Y
              <br />
              <strong>Verwendungszweck:</strong> Dieses Cookie registriert eine
              eindeutige ID, um Statistiken des gesehenen Videos zu speichern.
              <br />
              <strong>Ablaufdatum:</strong> nach Sitzungsende
            </p>
            <p>
              <strong>Name:</strong> PREF
              <br />
              <strong>Wert:</strong> f1=50000000
              <br />
              <strong>Verwendungszweck:</strong> Dieses Cookie registriert
              ebenfalls Ihre eindeutige ID. Google bekommt über PREF
              Statistiken, wie Sie YouTube-Videos auf unserer Webseite
              verwenden.
              <br />
              <strong>Ablaufdatum:</strong>&nbsp;nach 8 Monate
            </p>
            <p>
              <strong>Name:</strong> GPS
              <br />
              <strong>Wert:</strong> 1<br />
              <strong>Verwendungszweck:</strong> Dieses Cookie registriert Ihre
              eindeutige ID auf mobilen Geräten, um den GPS-Standort zu tracken.
              <br />
              <strong>Ablaufdatum:</strong>&nbsp;nach 30 Minuten
            </p>
            <p>
              <strong>Name:</strong> VISITOR_INFO1_LIVE
              <br />
              <strong>Wert:</strong> 32116259495Chz8bagyU
              <br />
              <strong>Verwendungszweck:</strong> Dieses Cookie versucht die
              Bandbreite des Users auf unseren Webseiten (mit eingebautem
              YouTube-Video) zu schätzen.
              <br />
              <strong>Ablaufdatum:</strong>&nbsp;nach 8 Monaten
            </p>
            <p>
              <strong>Anmerkung:</strong> Diese Cookies wurden nach einem Test
              gesetzt und können nicht den Anspruch auf Vollständigkeit erheben.
            </p>
            <p>
              Wenn Sie in Ihrem YouTube-Konto angemeldet sind, kann YouTube
              viele Ihrer Handlungen/Interaktionen auf unserer Webseite mit
              Hilfe von Cookies speichern und Ihrem YouTube-Konto zuordnen.
              YouTube bekommt dadurch zum Beispiel Informationen wie lange Sie
              auf unserer Seite surfen, welchen Browsertyp Sie verwenden, welche
              Bildschirmauflösung Sie bevorzugen oder welche Handlungen Sie
              ausführen.
            </p>
            <p>
              YouTube verwendet diese Daten zum einen um die eigenen
              Dienstleistungen und Angebote zu verbessern, zum anderen um
              Analysen und Statistiken für Werbetreibende (die Google Ads
              verwenden) bereitzustellen.
            </p>
            <h2>Twitter Datenschutzerklärung</h2>
            <p>
              Auf unserer Webseite haben wir Funktionen von Twitter eingebaut.
              Dabei handelt es sich zum Beispiel um eingebettete Tweets,
              Timelines, Buttons oder Hashtags. Twitter ist ein
              Kurznachrichtendienst und eine Social-Media-Plattform der Firma
              Twitter Inc., One Cumberland Place, Fenian Street, Dublin 2 D02
              AX07, Irland.
            </p>
            <p>
              Nach unserer Kenntnis werden im Europäischen Wirtschaftsraum und
              in der Schweiz durch das bloße Einbinden von Twitter-Funktion noch
              keine personenbezogenen Daten oder Daten zu Ihrer Webaktivitäten
              an Twitter übertragen. Erst wenn Sie mit den Twitter-Funktionen
              interagieren, wie zum Beispiel auf einen Button klicken, können
              Daten an Twitter gesendet, dort gespeichert und verarbeitet
              werden. Auf diese Datenverarbeitung haben wir keinen Einfluss und
              tragen keine Verantwortung. Im Rahmen dieser Datenschutzerklärung
              wollen wir Ihnen einen Überblick geben, welche Daten Twitter
              speichert, was Twitter mit diesen Daten macht und wie Sie sich vor
              der Datenübertragung weitgehend schützen können.
            </p>
            <h3>Was ist Twitter?</h3>
            <p>
              Für die einen ist Twitter ein Nachrichtendienst, für andere eine
              Social-Media-Plattform und wieder andere sprechen von einem
              Microblogging-Dienst. All diese Bezeichnungen haben ihre
              Berechtigung und meinen mehr oder weniger dasselbe.
            </p>
            <p>
              Sowohl Privatpersonen als auch Unternehmen nützen Twitter, um mit
              interessierten Personen über Kurznachrichten zu kommunizieren. Pro
              Nachricht erlaubt Twitter nur 280 Zeichen. Diese Nachrichten
              werden „Tweets“ genannt. Anders als beispielsweise bei Facebook
              fokussiert sich der Dienst nicht auf den Ausbau eines Netzwerks
              für “Freunde”, sondern will als weltweite und offene
              Nachrichten-Plattform verstanden werden. Bei Twitter kann man auch
              ein anonymes Konto führen und Tweets können einerseits vom
              Unternehmen, andererseits von den Usern selbst gelöscht werden.
            </p>
            <h3>Warum verwenden wir Twitter auf unserer Webseite?</h3>
            <p>
              Wie viele andere Webseiten und Unternehmen versuchen wir unserer
              Services und Dienstleistungen über verschiedene Kanäle anzubieten
              und mit unseren Kunden zu kommunizieren. Speziell Twitter ist uns
              als nützlicher „kleiner“ Nachrichtendienst ans Herz gewachsen.
              Immer wieder tweeten oder retweeten wir spannende, lustige oder
              interessante Inhalte. Uns ist klar, dass Sie nicht jeden Kanal
              extra folgen können. Schließlich haben Sie auch noch etwas anderes
              zu tun. Darum haben wir auf unserer Webseite auch
              Twitter-Funktionen eingebunden. Sie können unsere
              Twitter-Aktivität „vor Ort“ miterleben oder über einen direkten
              Link zu unserer Twitter-Seite kommen. Durch die Einbindung wollen
              wir unser Service und die Nutzerfreundlichkeit auf unserer
              Webseite stärken.
            </p>
            <h3>Welche Daten werden von Twitter gespeichert?</h3>
            <p>
              Auf manchen unserer Unterseiten finden Sie die eingebauten
              Twitter-Funktionen. Wenn Sie mit den Twitter-Inhalten
              interagieren, wie zum Beispiel auf einen Button klicken, kann
              Twitter Daten erfassen und speichern. Und zwar auch dann, wenn Sie
              selbst kein Twitter-Konto haben. Twitter nennt diese Daten
              “Log-Daten”. Dazu zählen demografische Daten, Browser-Cookie-IDs,
              die ID Ihres Smartphones, gehashte E-Mail-Adressen, und
              Informationen, welche Seiten Sie bei Twitter besucht haben und
              welche Handlungen Sie ausgeführt haben. Twitter speichert
              natürlich mehr Daten, wenn Sie ein Twitter-Konto haben und
              angemeldet sind. Meistens passiert diese Speicherung über Cookies.
              Cookies sind kleine Text-Dateien, die meist in Ihrem Browser
              gesetzt werden und unterschiedliche Information an Twitter
              übermitteln.
            </p>
            <p>
              Welche Cookies gesetzt werden, wenn Sie nicht bei Twitter
              angemeldet sind, aber eine Webseite mit eingebauten
              Twitter-Funktionen besuchen, zeigen wir Ihnen jetzt. Bitte
              betrachten Sie diese Aufzählung als Beispiel. Einen Anspruch auf
              Vollständigkeit können wir hier auf keinen Fall gewährleisten, da
              sich die Wahl der Cookies stets verändert und von Ihren
              individuellen Handlungen mit den Twitter-Inhalten abhängt.
            </p>
            <p>Diese Cookies wurden bei unserem Test verwendet:</p>
            <p>
              <strong>Name:</strong> personalization_id
              <br />
              <strong>Wert:</strong> “v1_cSJIsogU51SeE321162594”
              <br />
              <strong>Verwendungszweck: </strong>Dieses Cookie speichert
              Informationen, wie Sie die Webseite nutzen und über welche Werbung
              Sie möglicherweise zu Twitter gekommen sind.
              <br />
              <strong>Ablaufdatum:</strong> nach 2 Jahre
            </p>
            <p>
              <strong>Name: </strong>lang
              <br />
              <strong>Wert: </strong>de
              <br />
              <strong>Verwendungszweck: </strong>Dieses Cookie speichert Ihre
              voreingestellte bzw. bevorzugte Sprache.
              <br />
              <strong>Ablaufdatum:&nbsp;</strong>nach Sitzungsende
            </p>
            <p>
              <strong>Name: </strong>guest_id
              <br />
              <strong>Wert: </strong>321162594v1%3A157132626
              <br />
              <strong>Verwendungszweck: </strong>Dieses Cookie wird gesetzt, um
              Sie als Gast zu identifizieren.<strong>&nbsp;</strong>
              <br />
              <strong>Ablaufdatum: </strong>nach 2 Jahren
            </p>
            <p>
              <strong>Name: </strong>fm
              <br />
              <strong>Wert: </strong>0<br />
              <strong>Verwendungszweck: </strong>Zu diesem Cookie konnten wir
              leider den Verwendungszweck nicht in Erfahrung bringen.
              <br />
              <strong>Ablaufdatum:&nbsp;</strong>nach Sitzungsende
            </p>
            <p>
              <strong>Name: </strong>external_referer
              <br />
              <strong>Wert: </strong>3211625942beTA0sf5lkMrlGt
              <br />
              <strong>Verwendungszweck: </strong>Dieses Cookie sammelt anonyme
              Daten, wie zum Beispiel wie oft Sie Twitter besuchen und wie lange
              Sie Twitter besuchen.
              <br />
              <strong>Ablaufdatum: </strong>Nach 6 Tage
            </p>
            <p>
              <strong>Name: </strong>eu_cn
              <br />
              <strong>Wert: </strong>1<br />
              <strong>Verwendungszweck: </strong>Dieses Cookie speichert
              Useraktivität und dient diversen Werbezwecken von Twitter.{' '}
              <strong>
                <br />
                Ablaufdatum:{' '}
              </strong>
              Nach einem Jahr
            </p>
            <p>
              <strong>Name: </strong>ct0
              <br />
              <strong>Wert: </strong>c1179f07163a365d2ed7aad84c99d966
              <br />
              <strong>Verwendungszweck: </strong>Zu diesem Cookie haben wir
              leider keine Informationen gefunden.
              <br />
              <strong>Ablaufdatum: </strong>nach 6 Stunden
            </p>
            <p>
              <strong>Name: </strong>_twitter_sess
              <br />
              <strong>Wert: </strong>53D%253D–dd0248321162594-
              <br />
              <strong>Verwendungszweck: </strong>Mit diesem Cookie können Sie
              Funktionen innerhalb der Twitter-Webseite nutzen.
              <br />
              <strong>Ablaufdatum: </strong>nach Sitzungsende
            </p>
            <p>
              <strong>Anmerkung:</strong> Twitter arbeitet auch mit
              Drittanbietern zusammen. Darum haben wir bei unsrem Test auch die
              drei Google-Analytics-Cookies _ga, _gat, _gid erkannt.
            </p>
            <p>
              Twitter verwendet die erhobenen Daten einerseits, um das
              Userverhalten besser zu verstehen und somit Ihre eigenen Dienste
              und Werbeangebote zu verbessern, andererseits dienen die Daten
              auch internen Sicherheitsmaßnahmen.
            </p>
            <h3>Wie lange und wo werden die Daten gespeichert?</h3>
            <p>
              Wenn Twitter Daten von anderen Webseiten erhebt, werden diese nach
              maximal 30 Tagen gelöscht, zusammengefasst oder auf andere Weise
              verdeckt. Die Twitter-Server liegen auf verschiedenen
              Serverzentren in den Vereinigten Staaten. Demnach ist davon
              auszugehen, dass erhobenen Daten in Amerika gesammelt und
              gespeichert werden. Nach unserer Recherche konnten wir nicht
              eindeutig feststellen, ob Twitter auch eigene Server in Europa
              hat. Grundsätzlich kann Twitter die erhobenen Daten speichern, bis
              sie dem Unternehmen nicht mehr dienlich sind, Sie die Daten
              löschen oder eine gesetzliche Löschfrist besteht.
            </p>
            <h3>
              Wie kann ich meine Daten löschen bzw. die Datenspeicherung
              verhindern?
            </h3>
            <p>
              Twitter betont in Ihren Datenschutzrichtlinien immer wieder, dass
              sie keine Daten von externen Webseitenbesuchen speichert, wenn Sie
              bzw. Ihr Browser sich im europäischen Wirtschaftsraum oder in der
              Schweiz befinden. Falls Sie allerdings mit Twitter direkt
              interagieren, speichert Twitter selbstverständlich auch Daten von
              Ihnen.
            </p>
            <p>
              Wenn Sie ein Twitter-Konto besitzen, können Sie Ihre Daten
              verwalten, indem Sie unter dem „Profil“-Button auf „Mehr“ klicken.
              Anschließend klicken Sie auf „Einstellungen und Datenschutz“. Hier
              können Sie die Datenverarbeitung individuell verwalten.
            </p>
            <p>
              Wenn Sie kein Twitter-Konto besitzen, können Sie auf{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://twitter.com/'
                href='https://twitter.com/'
              >
                twitter.com
              </a>
              &nbsp;gehen und dann auf „Individualisierung“ klicken. Unter dem
              Punkt „Individualisierung und Daten“ können Sie Ihre erhobenen
              Daten verwalten.
            </p>
            <p>
              Die meisten Daten werden, wie oben bereits erwähnt, über Cookies
              gespeichert und die können Sie in Ihrem Browser verwalten,
              deaktivieren oder löschen. Bitte beachten Sie, dass Sie die
              Cookies nur in dem von Ihnen gewählten Browser “bearbeiten”. Das
              heißt: verwenden Sie in Zukunft einen anderen Browser, müssen Sie
              dort Ihre Cookies erneut nach Ihren Wünschen verwalten. Hier gibt
              es die Anleitung zur Cookie-Verwaltung der bekanntesten Browser.
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.google.com/chrome/answer/95647?tid=321162594'
                href='https://support.google.com/chrome/answer/95647?tid=321162594'
                rel='noopener'
              >
                Chrome: Cookies in Chrome löschen, aktivieren und verwalten
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=321162594'
                href='https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=321162594'
                rel='noopener'
              >
                Safari: Verwalten von Cookies und Websitedaten mit Safari
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=321162594'
                href='https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=321162594'
                rel='noopener'
              >
                Firefox: Cookies löschen, um Daten zu entfernen, die Websites
                auf Ihrem Computer abgelegt haben
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=321162594'
                href='https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=321162594'
                rel='noopener'
              >
                Internet Explorer: Löschen und Verwalten von Cookies
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=321162594'
                href='https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=321162594'
                rel='noopener'
              >
                Microsoft Edge: Löschen und Verwalten von Cookies
              </a>
            </p>
            <p>
              Ihren Browser können Sie auch so verwalten, dass Sie bei jedem
              einzelnen Cookie informiert werden. Dann können Sie immer
              individuell entscheiden, ob Sie ein Cookie zulassen oder nicht.
            </p>
            <p>
              Twitter verwendet die Daten auch für personalisierte Werbung in-
              und außerhalb von Twitter. In den Einstellungen können Sie unter
              „Individualisierung und Daten“ die personalisierte Werbung
              abschalten. Wenn Sie Twitter auf einem Browser nutzen, können Sie
              die personalisierte Werbung unter{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='http://optout.aboutads.info/?c=2&amp;lang=EN'
                href='http://optout.aboutads.info/?c=2&amp;lang=EN'
                rel='follow noopener'
              >
                http://optout.aboutads.info/?c=2&amp;lang=EN
              </a>{' '}
              deaktivieren.
            </p>
            <p>
              Twitter ist aktiver Teilnehmer beim EU-U.S. Privacy Shield
              Framework. Dieses Framework stellt eine korrekte Datenübertragung
              zwischen den USA und der Europäischen Union sicher. Unter{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO'
                href='https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO'
                rel='noopener'
              >
                https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO
              </a>
              &nbsp;erfahren Sie mehr darüber.
            </p>
            <p>
              Wir hoffen, wir haben Ihnen einen grundsätzlichen Überblick über
              die Datenverarbeitung durch Twitter gegeben. Wir erhalten keinen
              Daten von Twitter und tragen auch keine Verantwortung darüber, was
              Twitter mit Ihren Daten macht. Falls Sie noch weitere Fragen zu
              diesem Thema haben, empfehlen wir Ihnen die
              Twitter-Datenschutzerklärung unter{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://twitter.com/de/privacy'
                href='https://twitter.com/de/privacy'
              >
                https://twitter.com/de/privacy
              </a>
              .
            </p>
            <h2>LinkedIn Datenschutzerklärung</h2>
            <p>
              Wir nutzen auf unserer Webseite Social-Plug-ins des
              Social-Media-Netzwerks LinkedIn, der Firma LinkedIn Corporation,
              2029 Stierlin Court, Mountain View, CA 94043, USA. Bei den
              Social-Plug-ins kann es sich um Feeds, das Teilen von Inhalten
              oder um die Verlinkung zu unserer LinkedIn-Seite handeln. Die
              Social-Plug-ins sind eindeutig mit dem bekannten LinkedIn-Logo
              gekennzeichnet und erlauben beispielsweise interessante Inhalte
              direkt über unsere Webseite zu teilen. Für den Europäischen
              Wirtschaftsraum und die Schweiz ist die Firma LinkedIn Ireland
              Unlimited Company Wilton Place in Dublin für die Datenverarbeitung
              verantwortlich.
            </p>
            <p>
              Durch die Einbettung solcher Plug-ins können Daten an LinkedIn
              versandt, gespeichert und dort verarbeitet werden. In dieser
              Datenschutzerklärung wollen wir Sie informieren, um welche Daten
              es sich handelt, wie das Netzwerk diese Daten verwendet und wie
              Sie die Datenspeicherung verwalten bzw. unterbinden können.
            </p>
            <h3>Was ist LinkedIn?</h3>
            <p>
              LinkedIn ist das größte soziale Netzwerk für Geschäftskontakte.
              Anders als beispielsweise bei Facebook konzentriert sich das
              Unternehmen ausschließlich auf den Aufbau geschäftlicher Kontakte.
              Unternehmen können auf der Plattform Dienstleistungen und Produkte
              vorstellen und Geschäftsbeziehungen knüpfen. Viele Menschen
              verwenden LinkedIn auch für die Jobsuche oder um selbst geeignete
              Mitarbeiter oder Mitarbeiterinnen für die eigene Firma zu finden.
              Allein in Deutschland zählt das Netzwerk über 11 Millionen
              Mitglieder. In Österreich sind es etwa 1,3 Millionen.
            </p>
            <h3>Warum verwenden wir LinkedIn auf unserer Webseite?</h3>
            <p>
              Wir wissen wie beschäftigt Sie sind. Da kann man nicht alle
              Social-Media-Kanäle einzeln verfolgen. Auch wenn es sich, wie in
              unserem Fall, lohnen würde. Denn immer wieder posten wir
              interessante News oder Berichte, die es wert sind, verbreitet zu
              werden. Darum haben wir auf unserer Webseite die Möglichkeit
              geschaffen, interessante Inhalte direkt auf LinkedIn zu teilen
              bzw. direkt auf unsere LinkedIn-Seite zu verweisen. Wir betrachten
              eingebaute Social-Plug-ins als erweiterten Service auf unserer
              Webseite. Die Daten, die LinkedIn sammelt, helfen uns zudem
              mögliche Werbemaßnahmen nur Menschen zu zeigen, die sich für unser
              Angebot interessieren.
            </p>
            <h3>Welche Daten werden von LinkedIn gespeichert?</h3>
            <p>
              Nur durch die bloße Einbindung der Social-Plug-ins speichert
              LinkedIn keine persönlichen Daten. LinkedIn nennt diese Daten, die
              durch Plug-ins generiert werden, passive Impressionen. Wenn Sie
              aber auf ein Social-Plug-in klicken, um beispielsweise unsere
              Inhalte zu teilen, speichert die Plattform personenbezogene Daten
              als sogenannte „aktive Impressionen“. Und zwar unabhängig, ob Sie
              ein LinkedIn-Konto haben oder nicht. Falls Sie angemeldet sind,
              werden die erhobenen Daten Ihrem Konto zugeordnet.
            </p>
            <p>
              Ihr Browser stellt eine direkte Verbindung zu den Servern von
              LinkedIn her, wenn Sie mit unseren Plug-ins interagieren. So
              protokolliert das Unternehmen verschiedene Nutzungsdaten. Neben
              Ihrer IP-Adresse können das beispielsweise Anmeldungsdaten,
              Gerätinformationen oder Infos über Ihren Internet- bzw.
              Mobilfunkanbieter sein. Wenn Sie LinkedIn-Dienste über Ihr
              Smartphone aufrufen, kann auch Ihr Standort (nachdem Sie das
              erlaubt haben) ermittelt werden. LinkedIn kann diese Daten in
              „gehashter“ Form auch an dritte Werbetreibende weitergeben.
              Hashing meint, ein Datensatz wird in eine Zeichenkette verwandelt.
              Dadurch kann man die Daten so verschlüsseln, dass Personen nicht
              mehr identifiziert werden können.
            </p>
            <p>
              Die meisten Daten zu Ihrem Userverhalten werden in Cookies
              gespeichert. Das sind kleine Text-Dateien, die meist in Ihrem
              Browser gesetzt werden. Weiters kann LinkedIn aber auch Web
              Beacons, Pixel-Tags, Anzeige-Tags und andere Geräteerkennungen
              benutzen.
            </p>
            <p>
              Diverse Tests zeigen auch welche Cookies gesetzt werden, wenn ein
              User mit einem Social-Plug-in interagiert. Die gefundenen Daten
              können keinen Vollständigkeitsanspruch erheben und dienen
              lediglich als Beispiel. Die folgenden Cookies wurden gesetzt, ohne
              bei LinkedIn angemeldet zu sein:
            </p>
            <p>
              <strong>Name:</strong> bcookie
              <br />
              <strong>Wert:</strong>{' '}
              =2&amp;34aab2aa-2ae1-4d2a-8baf-c2e2d7235c16321162594-
              <br />
              <strong>Verwendungszweck:</strong> Das Cookie ist ein sogenanntes
              „Browser-ID-Cookie“ und speichert folglich Ihre
              Identifikationsnummer (ID).
              <br />
              <strong>Ablaufdatum:</strong> Nach 2 Jahren
            </p>
            <p>
              <strong>Name:</strong> lang
              <br />
              <strong>Wert:</strong> v=2&amp;lang=de-de
              <br />
              <strong>Verwendungszweck:</strong> Dieses Cookie speichert Ihre
              voreingestellte bzw. bevorzugte Sprache.
              <br />
              <strong>Ablaufdatum:</strong> nach Sitzungsende
            </p>
            <p>
              <strong>Name:</strong> lidc
              <br />
              <strong>Wert:</strong> 1818367:t=1571904767:s=AQF6KNnJ0G321162594…
              <br />
              <strong>Verwendungszweck:</strong> Dieses Cookie wird zum Routing
              verwendet. Routing zeichnet die Wege auf, wie Sie zu LinkedIn
              gekommen sind und wie Sie dort durch die Webseite navigieren.
              <br />
              <strong>Ablaufdatum:</strong> nach 24 Stunden
            </p>
            <p>
              <strong>Name:</strong> rtc
              <br />
              <strong>Wert:</strong> kt0lrv3NF3x3t6xvDgGrZGDKkX
              <br />
              <strong>Verwendungszweck:</strong>&nbsp;Zu diesem Cookie konnten
              keine näheren Informationen in Erfahrung gebracht werden.
              <br />
              <strong>Ablaufdatum:</strong> nach 2 Minuten
            </p>
            <p>
              <strong>Name:</strong> JSESSIONID
              <br />
              <strong>Wert:</strong> ajax:3211625942900777718326218137
              <br />
              <strong>Verwendungszweck:</strong> Es handelt sich hier um ein
              Session-Cookie, das LinkedIn verwendet, um anonyme
              Benutzersitzungen durch den Server aufrecht zu erhalten.
              <br />
              <strong>Ablaufdatum:</strong> nach Sitzungsende
            </p>
            <p>
              <strong>Name:</strong> bscookie
              <br />
              <strong>Wert:</strong> “v=1&amp;201910230812…
              <br />
              <strong>Verwendungszweck:</strong> Bei diesem Cookie handelt es
              sich um ein Sicherheits-Cookie. LinkedIn beschreibt es als
              Secure-Browser-ID-Cookie.
              <br />
              <strong>Ablaufdatum:</strong> nach 2 Jahren
            </p>
            <p>
              <strong>Name:</strong> fid
              <br />
              <strong>Wert:</strong> AQHj7Ii23ZBcqAAAA…
              <br />
              <strong>Verwendungszweck:</strong> Zu diesem Cookie konnten keine
              näheren Informationen gefunden werden.
              <br />
              <strong>Ablaufdatum:</strong> nach 7 Tagen
            </p>
            <p>
              <strong>Anmerkung:</strong> LinkedIn arbeitet auch mit
              Drittanbietern zusammen. Darum haben wir bei unserem Test auch die
              drei Google-Analytics-Cookies _ga und _gat erkannt.
            </p>
            <h3>Wie lange und wo werden die Daten gespeichert?</h3>
            <p>
              Grundsätzlich behaltet LinkedIn Ihre personenbezogenen Daten so
              lange, wie es das Unternehmen als nötig betrachtet, um die eigenen
              Dienste anzubieten. LinkedIn löscht aber Ihre personenbezogenen
              Daten, wenn Sie Ihr Konto löschen. In manchen Ausnahmefällen
              behaltet LinkedIn selbst nach Ihrer Kontolöschung einige Daten in
              zusammengefasster und anonymisierter Form. Sobald Sie Ihr Konto
              löschen, können andere Personen Ihre Daten innerhalb von einem Tag
              nicht mehr sehen. LinkedIn löscht die Daten grundsätzlich
              innerhalb von 30 Tagen. LinkedIn behält allerdings Daten, wenn es
              aus rechtlicher Pflicht notwendig ist. Daten, die keinen Personen
              mehr zugeordnet werden können, bleiben auch nach Schließung des
              Kontos gespeichert. Die Daten werden auf verschiedenen Servern in
              Amerika und vermutlich auch in Europa gespeichert.
            </p>
            <h3>
              Wie kann ich meine Daten löschen bzw. die Datenspeicherung
              verhindern?
            </h3>
            <p>
              Sie haben jederzeit das Recht auf Ihre personenbezogenen Daten
              zuzugreifen und sie auch zu löschen. In Ihrem LinkedIn-Konto
              können Sie Ihre Daten verwalten, ändern und löschen. Zudem können
              Sie von LinkedIn auch eine Kopie Ihrer personenbezogenen Daten
              anfordern.
            </p>
            <p>
              So greifen Sie auf die Kontodaten in Ihrem LinkedIn-Profil zu:
            </p>
            <p>
              Klicken Sie auf LinkedIn auf Ihr Profilsymbol und wählen Sie die
              Rubrik „Einstellungen und Datenschutz“. Klicken Sie nun auf
              „Datenschutz“ und dann im Abschnitt „So verwendet LinkedIn Ihre
              Daten auf „Ändern“. In nur kurzer Zeit können Sie ausgewählte
              Daten zu Ihrer Web-Aktivität und Ihrem Kontoverlauf herunterladen.
            </p>
            <p>
              Sie haben auch in Ihrem Browser die Möglichkeit, die
              Datenverarbeitung durch LinkedIn zu unterbinden. Wie oben bereits
              erwähnt, speichert LinkedIn die meisten Daten über Cookies, die in
              Ihrem Browser gesetzt werden. Diese Cookies können Sie verwalten,
              deaktivieren oder löschen. Je nachdem, welchen Browser Sie haben,
              funktioniert die Verwaltung etwas anders. Die Anleitungen der
              gängigsten Browser finden Sie hier:
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.google.com/chrome/answer/95647?tid=321162594'
                href='https://support.google.com/chrome/answer/95647?tid=321162594'
                rel='noopener'
              >
                Chrome: Cookies in Chrome löschen, aktivieren und verwalten
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=321162594'
                href='https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=321162594'
                rel='noopener'
              >
                Safari: Verwalten von Cookies und Websitedaten mit Safari
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=321162594'
                href='https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=321162594'
                rel='noopener'
              >
                Firefox: Cookies löschen, um Daten zu entfernen, die Websites
                auf Ihrem Computer abgelegt haben
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=321162594'
                href='https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=321162594'
                rel='noopener'
              >
                Internet Explorer: Löschen und Verwalten von Cookies
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=321162594'
                href='https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=321162594'
                rel='noopener'
              >
                Microsoft Edge: Löschen und Verwalten von Cookies
              </a>
            </p>
            <p>
              Sie können auch grundsätzlich Ihren Browser dahingehend
              einrichten, dass Sie immer informiert werden, wenn ein Cookie
              gesetzt werden soll. Dann können Sie immer individuell
              entscheiden, ob Sie das Cookie zulassen wollen oder nicht.
            </p>
            <p>
              LinkedIn ist aktiver Teilnehmer des EU-U.S. Privacy Shield
              Frameworks. Dieses Framework stellt eine korrekte Datenübertragung
              zwischen den USA und der Europäischen Union sicher. Unter&nbsp;
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://www.privacyshield.gov/participant?id=a2zt0000000L0UZAA0'
                href='https://www.privacyshield.gov/participant?id=a2zt0000000L0UZAA0'
                rel='noopener'
              >
                https://www.privacyshield.gov/participant?id=a2zt0000000L0UZAA0
              </a>
              &nbsp;erfahren Sie mehr darüber. Wir haben versucht, Ihnen die
              wichtigsten Informationen über die Datenverarbeitung durch
              LinkedIn näherzubringen. Auf{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://www.linkedin.com/legal/privacy-policy'
                href='https://www.linkedin.com/legal/privacy-policy'
                rel='noopener'
              >
                https://www.linkedin.com/legal/privacy-policy
              </a>{' '}
              erfahren Sie noch mehr über die Datenverarbeitung des
              Social-Media-Netzwerks LinkedIn.
            </p>
            <h2>Vimeo Datenschutzerklärung</h2>
            <p>
              Wir verwenden auf unserer Website auch Videos der Firma Vimeo.
              Betrieben wird das Videoportal durch Vimeo LLC, 555 West 18th
              Street, New York, New York 10011, USA. Mit Hilfe eines Plug-ins
              können wir Ihnen so interessantes Videomaterial direkt auf unserer
              Website anzeigen. Dabei können gewissen Daten von Ihnen an Vimeo
              übertragen werden. In dieser Datenschutzerklärung zeigen wir
              Ihnen, um welche Daten es sich handelt, warum wir Vimeo verwenden
              und wie Sie Ihre Daten bzw. die Datenübertragung verwalten oder
              unterbinden können.
            </p>
            <h3>Was ist Vimeo?</h3>
            <p>
              Vimeo ist eine Videoplattform, die 2004 gegründet wurde und seit
              2007 das Streamen von Videos in HD-Qualität ermöglicht. Seit 2015
              kann auch in 4k Ultra HD gestreamt werden. Die Nutzung des Portals
              ist kostenlos, es kann allerdings auch kostenpflichtiger Content
              veröffentlicht werden. Im Vergleich zum Marktführer YouTube, legt
              Vimeo vorrangig Wert auf hochwertigen Content in guter Qualität.
              So bietet das Portal einerseits viele künstlerische Inhalte wie
              Musikvideos und Kurzfilme, andererseits aber auch wissenswerte
              Dokumentationen zu den unterschiedlichsten Themen.
            </p>
            <h3>Warum verwenden wir Vimeo auf unserer Webseite?</h3>
            <p>
              Ziel unserer Webpräsenz ist es, Ihnen den bestmöglichen Content zu
              liefern. Und zwar so einfach zugänglich wie möglich. Erst wenn wir
              das geschafft haben, sind wir mit unserem Service zufrieden. Der
              Videodienst Vimeo unterstützt uns dieses Ziel zu erreichen. Vimeo
              bietet uns die Möglichkeit, Ihnen qualitativ hochwertige Inhalte
              direkt auf unserer Website zu präsentieren. Statt Ihnen nur einen
              Link zu einem interessanten Video zu geben, können Sie so das
              Video gleich bei uns ansehen. Das erweitert unser Service und
              erleichtert Ihnen den Zugang zu interessanten Inhalten. Somit
              bieten wir neben unseren Texten und Bildern auch Video-Content an.
            </p>
            <h3>Welche Daten werden auf Vimeo gespeichert?</h3>
            <p>
              Wenn Sie auf unserer Website eine Webseite aufrufen, die ein
              Vimeo-Video eingebettet hat, verbindet sich Ihr Browser mit den
              Servern von Vimeo. Dabei kommt es zu einer Datenübertragung. Diese
              Daten werden auf den Vimeo-Servern gesammelt, gespeichert und
              verarbeitet. Unabhängig davon, ob Sie ein Vimeo-Konto haben oder
              nicht, sammelt Vimeo Daten über Sie. Dazu zählen Ihre IP-Adresse,
              technische Infos über Ihren Browsertyp, Ihr Betriebssystem oder
              ganz grundlegende Geräteinformationen. Weiters speichert Vimeo
              Informationen über welche Webseite Sie den Vimeo-Dienst nutzen und
              welche Handlungen (Webaktivitäten) Sie auf unserer Webseite
              ausführen. Zu diesen Webaktivitäten zählen beispielsweise
              Sitzungsdauer, Absprungrate oder auf welchen Button Sie auf
              unserer Webseite mit eingebauter Vimeo-Funktion geklickt haben.
              Diese Handlungen kann Vimeo mit Hilfe von Cookies und ähnlichen
              Technologien verfolgen und speichern.
            </p>
            <p>
              Falls Sie als registriertes Mitglied bei Vimeo eingeloggt sind,
              können meistens mehr Daten erhoben werden, da möglicherweise mehr
              Cookies bereits in Ihrem Browser gesetzt wurden. Zudem werden Ihre
              Handlungen auf unsere Webseite direkt mit Ihrem Vimeo-Account
              verknüpft. Um dies zu verhindern müssen Sie sich, während des
              “Surfens” auf unserer Webseite, von Vimeo ausloggen.
            </p>
            <p>
              Nachfolgend zeigen wir Ihnen Cookies, die von Vimeo gesetzt
              werden, wenn Sie auf einer Webseite mit integrierter
              Vimeo-Funktion, sind. Diese Liste erhebt keinen Anspruch auf
              Vollständigkeit und geht davon aus, dass Sie keinen Vimeo-Account
              haben.
            </p>
            <p>
              <strong>Name:</strong>&nbsp;player
              <br />
              <strong>Wert:</strong>&nbsp;“”
              <br />
              <strong>Verwendungszweck:</strong> Dieses Cookie speichert Ihre
              Einstellungen, bevor Sie ein eingebettetes Vimeo-Video abspielen.
              Dadurch bekommen Sie beim nächsten Mal, wenn Sie ein Vimeo-Video
              ansehen, wieder Ihre bevorzugten Einstellungen.
              <br />
              <strong>Ablaufdatum:</strong>&nbsp;nach einem Jahr
            </p>
            <p>
              <strong>Name</strong>:&nbsp;vuid
              <br />
              <strong>Wert:&nbsp;</strong>pl1046149876.614422590321162594-4
              <strong>
                <br />
                <strong>Verwendungszweck:&nbsp;</strong>{' '}
              </strong>
              Dieses Cookie sammelt Informationen über Ihre Handlungen auf
              Webseiten, die ein Vimeo-Video eingebettet haben.
              <strong>
                <br />
                <strong>Ablaufdatum:&nbsp;</strong>{' '}
              </strong>
              nach 2 Jahren
            </p>
            <p>
              <strong>Anmerkung:</strong> Diese beiden Cookies werden immer
              gesetzt, sobald Sie sich auf einer Webseite mit einem
              eingebetteten Vimeo-Video befinden. Wenn Sie das Video ansehen und
              auf die Schaltfläche klicken, um beispielsweise das Video zu
              “teilen” oder zu “liken”, werden weitere Cookies gesetzt. Dabei
              handelt es sich auch um Drittanbieter-Cookies wie&nbsp; _ga oder
              _gat_UA-76641-8 von Google Analytics oder _fbp von Facebook.
              Welche Cookies hier genau gesetzt werden, hängt von Ihrer
              Interaktion mit dem Video ab.
            </p>
            <p>
              Die folgende Liste zeigt einen Ausschnitt möglicher Cookies, die
              gesetzt werden, wenn Sie mit dem Vimeo-Video interagieren:
            </p>
            <p>
              <strong>Name:</strong> _abexps
              <br />
              <strong>Wert:</strong> %5B%5D
              <br />
              <strong>Verwendungszweck:&nbsp;</strong>Dieses Vimeo-Cookie hilft
              Vimeo, sich an die von Ihnen getroffenen Einstellungen zu
              erinnern. Dabei kann es sich zum Beispiel um eine voreingestellte
              Sprache, um eine Region oder einen Benutzernamen handeln. Im
              Allgemeinen speichert das Cookie Daten darüber, wie Sie Vimeo
              verwenden.
              <br />
              <strong>Ablaufdatum:</strong> nach einem Jahr
            </p>
            <p>
              <strong>Name:</strong> continuous_play_v3
              <br />
              <strong>Wert:</strong> 1<br />
              <strong>Verwendungszweck:&nbsp;</strong>Bei diesem Cookie handelt
              es sich um ein Erstanbieter-Cookie von Vimeo. Das Cookie sammelt
              Informationen wie Sie das Vimeo-Service verwenden. Beispielsweise
              speichert das Cookie, wann Sie ein Video pausieren bzw. wieder
              abspielen.
              <br />
              <strong>Ablaufdatum:</strong> nach einem Jahr
            </p>
            <p>
              <strong>Name:</strong> _ga
              <br />
              <strong>Wert:</strong> GA1.2.1522249635.1578401280321162594-7
              <br />
              <strong>Verwendungszweck:&nbsp;</strong>Dieses Cookie ist ein
              Drittanbieter-Cookie von Google. Standardmäßig verwendet
              analytics.js das Cookie _ga, um die User-ID zu speichern.
              Grundsätzlich dient es zur Unterscheidung der Websitebesucher.
              <br />
              <strong>Ablaufdatum:</strong> nach 2 Jahren
            </p>
            <p>
              <strong>Name:</strong> _gcl_au
              <br />
              <strong>Wert:</strong> 1.1.770887836.1578401279321162594-3
              <br />
              <strong>Verwendungszweck: </strong>Dieses Drittanbieter-Cookie von
              Google AdSense wird verwenden, um die Effizienz von Werbeanzeigen
              auf Websites zu verbessern.
              <br />
              <strong>Ablaufdatum:</strong>&nbsp;nach 3 Monaten
            </p>
            <p>
              <strong>Name:</strong> _fbp
              <br />
              <strong>Wert:</strong> fb.1.1578401280585.310434968
              <br />
              <strong>Verwendungszweck:</strong> Das ist ein Facebook-Cookie.
              Dieses Cookie wird verwendet, um Werbeanzeigen bzw. Werbeprodukte
              von Facebook oder anderen Werbetreibenden einzublenden.
              <br />
              <strong>Ablaufdatum:</strong>&nbsp;nach 3 Monaten
            </p>
            <p>
              Vimeo nutzt diese Daten unter anderem, um das eigene Service zu
              verbessern, um mit Ihnen in Kommunikation zu treten und um eigene
              zielgerichtete Werbemaßnahmen zu setzen. Vimeo betont auf Ihrer
              Website, dass bei eingebetteten Videos nur Erstanbieter-Cookies
              (also Cookies von Vimeo selbst) verwendet werden, solange man mit
              dem Video nicht interagiert.
            </p>
            <h3>Wie lange und wo werden die Daten gespeichert?</h3>
            <p>
              Vimeo hat den Hauptsitz in White Plains&nbsp;im&nbsp;Bundesstaat
              New York (USA). Die Dienste werden aber weltweit angeboten. Dabei
              verwendet das Unternehmen Computersysteme, Datenbanken und Server
              in den USA und auch in anderen Ländern. Ihre Daten können somit
              auch auf Servern in Amerika gespeichert und verarbeitet werden.
              Die Daten bleiben bei Vimeo so lange gespeichert, bis das
              Unternehmen keinen wirtschaftlichen Grund mehr für die Speicherung
              hat. Dann werden die Daten gelöscht oder anonymisiert. Vimeo
              entspricht dem EU-U.S. Privacy Shield Framework und darf somit
              Daten von Usern aus der EU sammeln, nutzen und in die USA
              übertragen.
            </p>
            <h3>
              Wie kann ich meine Daten löschen bzw. die Datenspeicherung
              verhindern?
            </h3>
            <p>
              Sie haben immer die Möglichkeit, Cookies in Ihrem Browser nach
              Ihren Wünschen zu verwalten. Wenn Sie beispielsweise nicht wollen,
              dass Vimeo Cookies setzt und so Informationen über Sie sammelt,
              können Sie in Ihren Browser-Einstellungen Cookies jederzeit
              löschen oder deaktivieren. Je nach Browser funktioniert dies ein
              bisschen anders. Bitte beachten Sie, dass möglicherweise nach dem
              Deaktivieren/Löschen von Cookies diverse Funktionen nicht mehr im
              vollem Ausmaß zur Verfügung stehen. Die folgenden Anleitungen
              zeigen, wie Sie Cookies in Ihrem Browser verwalten bzw. löschen.
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.google.com/chrome/answer/95647?tid=321162594'
                href='https://support.google.com/chrome/answer/95647?tid=321162594'
                rel='noopener'
              >
                Chrome: Cookies in Chrome löschen, aktivieren und verwalten
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=321162594'
                href='https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=321162594'
                rel='noopener'
              >
                Safari: Verwalten von Cookies und Websitedaten mit Safari
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=321162594'
                href='https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=321162594'
                rel='noopener'
              >
                Firefox: Cookies löschen, um Daten zu entfernen, die Websites
                auf Ihrem Computer abgelegt haben
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=321162594'
                href='https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=321162594'
                rel='noopener'
              >
                Internet Explorer: Löschen und Verwalten von Cookies
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=321162594'
                href='https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=321162594'
                rel='noopener'
              >
                Microsoft Edge: Löschen und Verwalten von Cookies
              </a>
            </p>
            <p>
              Falls Sie ein registriertes Vimeo-Mitglied sind, können Sie auch
              in den Einstellungen bei Vimeo die verwendeten Cookies verwalten.
            </p>
            <p>
              Vimeo ist aktiver Teilnehmer beim EU-U.S. Privacy Shield
              Framework, wodurch der korrekte und sichere Datentransfer
              persönlicher Daten geregelt wird. Mehr Informationen dazu finden
              Sie auf&nbsp;
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://www.privacyshield.gov/participant?id=a2zt00000008V77AAE&amp;status=Active'
                href='https://www.privacyshield.gov/participant?id=a2zt00000008V77AAE&amp;status=Active'
                rel='follow noopener'
              >
                https://www.privacyshield.gov/participant?id=a2zt00000008V77AAE&amp;status=Active
              </a>
              .&nbsp;Mehr über den Einsatz von Cookies bei Vimeo erfahren Sie
              auf{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://vimeo.com/cookie_policy?tid=321162594'
                href='https://vimeo.com/cookie_policy?tid=321162594'
                rel='follow noopener'
              >
                https://vimeo.com/cookie_policy
              </a>
              , Informationen zum Datenschutz bei Vimeo können Sie auf&nbsp;
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://vimeo.com/privacy?tid=321162594'
                href='https://vimeo.com/privacy?tid=321162594'
                rel='follow noopener'
              >
                https://vimeo.com/privacy
              </a>
              &nbsp;nachlesen.
            </p>
            <h2>Google reCAPTCHA Datenschutzerklärung</h2>
            <p>
              Unser oberstes Ziel ist es, dass unsere Webseite für Sie und für
              uns bestmöglich geschützt und sicher ist. Um das zu gewährleisten,
              verwenden wir Google reCAPTCHA der Firma Google Inc. (1600
              Amphitheatre Parkway Mountain View, CA 94043, USA). Mit reCAPTCHA
              können wir feststellen, ob Sie auch wirklich ein Mensch aus
              Fleisch und Blut sind und kein Roboter oder eine andere
              Spam-Software. Unter Spam verstehen wir jede, auf elektronischen
              Weg, unerwünschte Information, die uns ungefragter Weise zukommt.
              Bei den klassischen CAPTCHAS mussten Sie zur Überprüfung meist
              Text- oder Bildrätsel lösen. Mit reCAPTCHA von Google müssen wir
              Sie meist nicht mit solchen Rätseln belästigen. Hier reicht es in
              den meisten Fällen, wenn Sie einfach ein Häkchen setzen und so
              bestätigen, dass Sie kein Bot sind. Mit der neuen Invisible
              reCAPTCHA Version müssen Sie nicht mal mehr ein Häkchen setzen.
              Wie das genau funktioniert und vor allem welche Daten dafür
              verwendet werden, erfahren Sie im Verlauf dieser
              Datenschutzerklärung.
            </p>
            <p>
              Rechtsgrundlage für die Verwendung ist Artikel 6 (1) f
              (Rechtmäßigkeit der Verarbeitung), denn es besteht ein
              berechtigtes Interesse diese Webseite vor Bots und Spam-Software
              zu schützen.
            </p>
            <h3>Was ist reCAPTCHA?</h3>
            <p>
              reCAPTCHA ist ein freier Captcha-Dienst von Google, der Webseiten
              vor Spam-Software und den Missbrauch durch nicht-menschliche
              Besucher schützt. Am häufigsten wird dieser Dienst verwendet, wenn
              Sie Formulare im Internet ausfüllen. Ein Captcha-Dienst ist ein
              automatischer Turing-Test, der sicherstellen soll, dass eine
              Handlung im Internet von einem Menschen und nicht von einem Bot
              vorgenommen wird. Im klassischen Turing-Test (benannt nach dem
              Informatiker Alan Turing) stellt ein Mensch die Unterscheidung
              zwischen Bot und Mensch fest. Bei Captchas übernimmt das auch der
              Computer bzw. ein Softwareprogramm. Klassische Captchas arbeiten
              mit kleinen Aufgaben, die für Menschen leicht zu lösen sind, doch
              für Maschinen erhebliche Schwierigkeiten aufweisen. Bei reCAPTCHA
              müssen Sie aktiv keine Rätsel mehr lösen. Das Tool verwendet
              moderne Risikotechniken, um Menschen von Bots zu unterscheiden.
              Hier müssen Sie nur noch das Textfeld „Ich bin kein Roboter“
              ankreuzen bzw. bei Invisible reCAPTCHA ist selbst das nicht mehr
              nötig. Bei reCAPTCHA wird ein JavaScript-Element in den Quelltext
              eingebunden und dann läuft das Tool im Hintergrund und analysiert
              Ihr Benutzerverhalten. Aus diesen Useraktionen berechnet die
              Software einen sogenannten Captcha-Score. Google berechnet mit
              diesem Score schon vor der Captcha-Eingabe wie hoch die
              Wahrscheinlichkeit ist, dass Sie ein Mensch sind. ReCAPTCHA bzw.
              Captchas im Allgemeinen kommen immer dann zum Einsatz, wenn Bots
              gewisse Aktionen (wie z.B. Registrierungen, Umfragen usw.)
              manipulieren oder missbrauchen könnten.
            </p>
            <h3>Warum verwenden wir reCAPTCHA auf unserer Website?</h3>
            <p>
              Wir wollen nur Menschen aus Fleisch und Blut auf unserer Seite
              begrüßen. Bots oder Spam-Software unterschiedlichster Art dürfen
              getrost zuhause bleiben. Darum setzen wir alle Hebel in Bewegung,
              uns zu schützen und die bestmögliche Benutzerfreundlichkeit für
              Sie anzubieten. Aus diesem Grund verwenden wir Google reCAPTCHA
              der Firma Google. So können wir uns ziemlich sicher sein, dass wir
              eine „botfreie“ Webseite bleiben. Durch die Verwendung von
              reCAPTCHA werden Daten an Google übermittelt, die Google
              verwendet, um festzustellen, ob Sie auch wirklich ein Mensch sind.
              reCAPTCHA dient also der Sicherheit unserer Webseite und in
              weiterer Folge damit auch Ihrer Sicherheit. Zum Beispiel könnte es
              ohne reCAPTCHA passieren, dass bei einer Registrierung ein Bot
              möglichst viele E-Mail-Adressen registriert, um im Anschluss Foren
              oder Blogs mit unerwünschten Werbeinhalten „zuzuspamen“. Mit
              reCAPTCHA können wir solche Botangriffe vermeiden.
            </p>
            <h3>Welche Daten werden von reCAPTCHA gespeichert?</h3>
            <p>
              ReCAPTCHA sammelt personenbezogene Daten von Usern, um
              festzustellen, ob die Handlungen auf unserer Webseite auch
              wirklich von Menschen stammen. Es kann also die IP-Adresse und
              andere Daten, die Google für den reCAPTCHA-Dienst benötigt, an
              Google versendet werden. IP-Adressen werden innerhalb der
              Mitgliedstaaten der EU oder anderer Vertragsstaaten des Abkommens
              über den Europäischen Wirtschaftsraum fast immer zuvor gekürzt,
              bevor die Daten auf einem Server in den USA landen. Die IP-Adresse
              wird nicht mit anderen Daten von Google kombiniert, sofern Sie
              nicht während der Verwendung von reCAPTCHA mit Ihrem Google-Konto
              angemeldet sind. Zuerst prüft der reCAPTCHA-Algorithmus, ob auf
              Ihrem Browser schon Google-Cookies von anderen Google-Diensten
              (YouTube. Gmail usw.) platziert sind. Anschließend setzt reCAPTCHA
              ein zusätzliches Cookie in Ihrem Browser und erfasst einen
              Schnappschuss Ihres Browserfensters.
            </p>
            <p>
              Die folgende Liste von gesammelten Browser- und Userdaten, hat
              nicht den Anspruch auf Vollständigkeit. Vielmehr sind es Beispiele
              von Daten, die nach unserer Erkenntnis, von Google verarbeitet
              werden.
            </p>
            <ul>
              <li>
                Referrer URL (die Adresse der Seite von der der Besucher kommt)
              </li>
              <li>IP-Adresse (z.B. 256.123.123.1)</li>
              <li>
                Infos über das Betriebssystem&nbsp;(die Software, die den
                Betrieb Ihres Computers ermöglicht. Bekannte Betriebssysteme
                sind Windows, Mac OS X oder Linux)
              </li>
              <li>
                Cookies&nbsp;(kleine Textdateien, die Daten in Ihrem Browser
                speichern)
              </li>
              <li>
                Maus- und Keyboardverhalten&nbsp;(jede Aktion, die Sie mit der
                Maus oder der Tastatur ausführen wird gespeichert)
              </li>
              <li>
                Datum und Spracheinstellungen&nbsp;(welche Sprache bzw. welches
                Datum Sie auf Ihrem PC voreingestellt haben wird gespeichert)
              </li>
              <li>
                Alle Javascript-Objekte&nbsp;(JavaScript ist eine
                Programmiersprache, die Webseiten ermöglicht, sich an den User
                anzupassen. JavaScript-Objekte können alle möglichen Daten unter
                einem Namen sammeln)
              </li>
              <li>
                Bildschirmauflösung&nbsp;(zeigt an aus wie vielen Pixeln die
                Bilddarstellung besteht)
              </li>
            </ul>
            <p>
              Unumstritten ist, dass Google diese Daten verwendet und analysiert
              noch bevor Sie auf das Häkchen „Ich bin kein Roboter“ klicken. Bei
              der Invisible reCAPTCHA-Version fällt sogar das Ankreuzen weg und
              der ganze Erkennungsprozess läuft im Hintergrund ab. Wie viel und
              welche Daten Google genau speichert, erfährt man von Google nicht
              im Detail.
            </p>
            <p>
              Folgende Cookies werden von reCAPTCHA verwendet: Hierbei beziehen
              wir uns auf die reCAPTCHA Demo-Version von Google unter{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://www.google.com/recaptcha/api2/demo'
                href='https://www.google.com/recaptcha/api2/demo'
                rel='noopener'
              >
                https://www.google.com/recaptcha/api2/demo
              </a>
              . All diese Cookies benötigen zu Trackingzwecken eine eindeutige
              Kennung. Hier ist eine Liste an Cookies, die Google reCAPTCHA auf
              der Demo-Version gesetzt hat:
            </p>
            <p>
              <strong>Name:</strong> IDE
              <br />
              <strong>Ablaufzeit:</strong> nach einem Jahr
              <br />
              <strong>Verwendung:</strong> Dieses Cookie wird von der Firma
              DoubleClick (gehört auch Google) gesetzt, um die Aktionen eines
              Users auf der Webseite im Umgang mit Werbeanzeigen zu registrieren
              und zu melden. So kann die Werbewirksamkeit gemessen und
              entsprechende Optimierungsmaßnahmen getroffen werden. IDE wird in
              Browsern unter der Domain doubleclick.net gespeichert.
              <br />
              <strong>Beispielwert:</strong>
              &nbsp;WqTUmlnmv_qXyi_DGNPLESKnRNrpgXoy1K-pAZtAkMbHI-321162594
            </p>
            <p>
              <strong>Name:</strong> 1P_JAR
              <br />
              <strong>Ablaufzeit:</strong> nach einem Monat
              <br />
              <strong>Verwendung:</strong> Dieses Cookie sammelt Statistiken zur
              Website-Nutzung und misst Conversions. Eine Conversion entsteht
              z.B., wenn ein User zu einem Käufer wird. Das Cookie wird auch
              verwendet, um Usern relevante Werbeanzeigen einzublenden. Weiters
              kann man mit dem Cookie vermeiden, dass ein User dieselbe Anzeige
              mehr als einmal zu Gesicht bekommt.
              <br />
              <strong>Beispielwert:</strong>&nbsp;2019-5-14-12
            </p>
            <p>
              <strong>Name:</strong> ANID
              <br />
              <strong>Ablaufzeit:</strong> nach 9 Monaten
              <br />
              <strong>Verwendung:</strong> Viele Infos konnten wir über dieses
              Cookie nicht in Erfahrung bringen. In der Datenschutzerklärung von
              Google wird das Cookie im Zusammenhang mit „Werbecookies“ wie z.
              B. “DSID”, “FLC”, “AID”, “TAID” erwähnt. ANID wird unter Domain
              google.com gespeichert.
              <br />
              <strong>Beispielwert:</strong>
              &nbsp;U7j1v3dZa3211625940xgZFmiqWppRWKOr
            </p>
            <p>
              <strong>Name:</strong> CONSENT
              <br />
              <strong>Ablaufzeit:</strong> nach 19 Jahren
              <br />
              <strong>Verwendung:</strong> Das Cookie speichert den Status der
              Zustimmung eines Users zur Nutzung unterschiedlicher Services von
              Google. CONSENT dient auch der Sicherheit, um User zu überprüfen,
              Betrügereien von Anmeldeinformationen zu verhindern und Userdaten
              vor unbefugten Angriffen zu schützen.
              <br />
              <strong>Beispielwert:&nbsp;</strong>YES+AT.de+20150628-20-0
            </p>
            <p>
              <strong>Name:</strong> NID
              <br />
              <strong>Ablaufzeit:</strong> nach 6 Monaten
              <br />
              <strong>Verwendung:</strong> NID wird von Google verwendet, um
              Werbeanzeigen an Ihre Google-Suche anzupassen. Mit Hilfe des
              Cookies „erinnert“ sich Google an Ihre meist eingegebenen
              Suchanfragen oder Ihre frühere Interaktion mit Anzeigen. So
              bekommen Sie immer maßgeschneiderte Werbeanzeigen. Das Cookie
              enthält eine einzigartige ID, die Google benutzt um persönliche
              Einstellungen des Users für Werbezwecke zu sammeln.
              <br />
              <strong>Beispielwert:</strong>{' '}
              0WmuWqy321162594zILzqV_nmt3sDXwPeM5Q
            </p>
            <p>
              <strong>Name:</strong> DV
              <br />
              <strong>Ablaufzeit:</strong> nach 10 Minuten
              <br />
              <strong>Verwendung:</strong> Sobald Sie das „Ich bin kein
              Roboter“-Häkchen angekreuzt haben, wird dieses Cookie gesetzt. Das
              Cookie wird von Google Analytics für personalisierte Werbung
              verwendet. DV sammelt Informationen in anonymisierter Form und
              wird weiters benutzt, um User-Unterscheidungen treffen zu können.
              <br />
              <strong>Beispielwert:</strong> gEAABBCjJMXcI0dSAAAANbqc321162594
            </p>
            <p>
              Anmerkung:&nbsp;Diese Aufzählung kann keinen Anspruch auf
              Vollständigkeit erheben, da Google erfahrungsgemäß die Wahl ihrer
              Cookies immer wieder auch verändert.
            </p>
            <h3>Wie lange und wo werden die Daten gespeichert?</h3>
            <p>
              Durch das Einfügen von reCAPTCHA werden Daten von Ihnen auf den
              Google-Server übertragen. Wo genau diese Daten gespeichert werden,
              stellt Google, selbst nach wiederholtem Nachfragen, nicht klar
              dar. Ohne eine Bestätigung von Google erhalten zu haben, ist davon
              auszugehen, dass Daten wie Mausinteraktion, Verweildauer auf der
              Webseite oder Spracheinstellungen auf den europäischen oder
              amerikanischen Google-Servern gespeichert werden. Die IP-Adresse,
              die Ihr Browser an Google übermittelt, wird grundsätzlich nicht
              mit anderen Google-Daten aus weiteren Google-Diensten
              zusammengeführt. Wenn Sie allerdings während der Nutzung des
              reCAPTCHA-Plug-ins bei Ihrem Google-Konto angemeldet sind, werden
              die Daten zusammengeführt.<strong>&nbsp;</strong>Dafür gelten die
              abweichenden Datenschutzbestimmungen der Firma Google.
            </p>
            <h3>
              Wie kann ich meine Daten löschen bzw. die Datenspeicherung
              verhindern?
            </h3>
            <p>
              Wenn Sie wollen, dass über Sie und über Ihr Verhalten keine Daten
              an Google übermittelt werden, müssen Sie sich, bevor Sie unsere
              Webseite besuchen bzw. die reCAPTCHA-Software verwenden, bei
              Google vollkommen ausloggen und alle Google-Cookies
              löschen.&nbsp;Grundsätzlich werden die Daten sobald Sie unsere
              Seite aufrufen automatisch an Google übermittelt. Um diese Daten
              wieder zu löschen, müssen Sie den Google-Support auf&nbsp;{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.google.com/?hl=de&amp;tid=321162594'
                href='https://support.google.com/?hl=de&amp;tid=321162594'
                rel='noopener'
              >
                https://support.google.com/?hl=de&amp;tid=321162594
              </a>{' '}
              kontaktieren.
            </p>
            <p>
              Wenn Sie also unsere Webseite verwenden, erklären Sie sich
              einverstanden, dass Google LLC und deren Vertreter automatisch
              Daten erheben, bearbeiten und nutzen.
            </p>
            <p>
              Etwas mehr über reCAPTCHA erfahren Sie auf der Webentwickler-Seite
              von Google auf{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://developers.google.com/recaptcha/'
                href='https://developers.google.com/recaptcha/'
                rel='noopener'
              >
                https://developers.google.com/recaptcha/
              </a>
              . Google geht hier zwar auf die technische Entwicklung der
              reCAPTCHA näher ein, doch genaue Informationen über
              Datenspeicherung und datenschutzrelevanten Themen sucht man auch
              dort vergeblich. Eine gute Übersicht über die grundsätzliche
              Verwendung von Daten bei Google finden Sie in der hauseigenen
              Datenschutzerklärung auf{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://policies.google.com/privacy?hl=de&amp;tid=321162594'
                href='https://policies.google.com/privacy?hl=de&amp;tid=321162594'
                rel='noopener'
              >
                https://www.google.com/intl/de/policies/privacy/
              </a>
              .
            </p>
            <h2>SoundCloud Datenschutzerklärung</h2>
            <p>
              Wir verwenden auf unserer Website Funktionen (Widgets) des Social
              Media Netzwerks SoundCloud der Firma SoundCloud Limited,
              Rheinsberger Str. 76/77, 10115 Berlin, Deutschland. Sie erkennen
              die Widgets am bekannten orangen Logo. Durch die Verwendung von
              Funktionen wie beispielsweise dem Abspielen von Musik werden Daten
              an SoundCloud übermittelt, gespeichert und ausgewertet. In dieser
              Datenschutzerklärung zeigen wir Ihnen, um welche Daten es sich
              handelt, warum wir SoundCloud verwenden und wie Sie Ihre Daten
              bzw. die Datenübertragung verwalten oder unterbinden können.
            </p>
            <h3>Was ist SoundCloud?</h3>
            <p>
              Das Social-Media-Netzwerk SoundCloud ist eine
              Online-Musikplattform, die dem Austausch und der Verteilung von
              Audiodateien dient. Auf SoundCloud bieten Musiker oder Podcaster
              ihre Audiodateien zum Downloaden an. Zudem kann man mit SoundCloud
              die Audiodateien auch in anderen Websites einbinden. Und genau das
              haben auch wir gemacht. Typisch für SoundCloud sind die grafischen
              Darstellungen der Audiodateien in Wellenform und die
              Kommentarleiste. So können angemeldete User Musikstücke bzw.
              Podcasts jederzeit anhören und kommentieren.
            </p>
            <h3>Warum verwenden wir SoundCloud auf unserer Webseite?</h3>
            <p>
              Unser Ziel ist es, Ihnen auf unserer Webseite den bestmöglichen
              Service zu liefern. Damit meinen wir nicht nur unsere Produkte
              oder Dienstleistungen. Zu einem gesamtheitlichen Kundenservice
              zählt auch, wie wohl Sie sich auf unserer Website fühlen und wie
              hilfreich unsere Website für Sie ist. Durch die eingebettete
              SoundCloud-Abspielfunktion können wir Ihnen akustischen Content
              direkt und frei Haus liefern. Sie müssen nicht zuerst irgendeinen
              Link folgen, um sich eine Audiodatei anzuhören, sondern können
              gleich über unsere Webseite starten.
            </p>
            <h3>Welche Daten werden auf SoundCloud gespeichert?</h3>
            <p>
              Sobald Sie eine unserer Webseiten besuchen, die ein Widget (Like-
              oder Share-Button oder Abspielfunktion) eingebaut hat, verbindet
              sich Ihr Browser mit einem SoundCloud-Server. Dabei können Daten
              von Ihnen an SoundCloud übertragen, dort verwaltet und gespeichert
              werden. Zum Beispiel erfährt SoundCloud auf diese Weise Ihre
              IP-Adresse und welche Seite (in diesem Fall unsere) Sie wann
              besucht haben. Wenn Sie ein SoundCloud-Konto haben und angemeldet
              sind, während Sie auf unserer Webseite surfen, werden die
              erhobenen Daten direkt Ihrem Konto/Account zugewiesen. Das können
              Sie nur verhindern, indem Sie sich, während Ihres Aufenthalts auf
              unserer Website, von SoundCloud abmelden. Neben den oben genannten
              Informationen werden in den Cookies auch Daten über Ihr
              Userverhalten gespeichert. Wann immer Sie beispielsweise einen
              Button klicken, ein Musikstück abspielen oder pausieren wird diese
              Information in den Cookies gespeichert. Das Widget bzw. SoundCloud
              ist somit in der Lage, Sie zu erkennen und manchmal wird das
              Widget auch verwendet, um Ihnen personalisierte Inhalte zu
              liefern. SoundCloud verwendet nicht nur eigene Cookies, sondern
              auch Cookies von Drittanbietern wie Facebook oder Google
              Analytics. Diese Cookies dienen dem Unternehmen mehr Informationen
              über Ihr Verhalten auf externen Websites und der eigenen Plattform
              zu erhalten. Wir als Websitebetreiber bekommen durch die
              verwendeten Cookies von SoundCloud keine Informationen über Ihr
              Userverhalten. Die Datenübertragung und daher auch die
              Informationen zu technischen Geräten und Ihrem Verhalten auf der
              Webseite findet zwischen Ihnen und SoundCloud statt.
            </p>
            <p>
              Im Folgenden zeigen wir Cookies, die gesetzt wurden, wenn man auf
              eine Webseite geht, die SoundCloud-Funktionen eingebunden hat.
              Diese Liste ist nur ein Beispiel möglicher Cookies und kann keinen
              Anspruch auf Vollständigkeit erheben. Bei diesem Beispiel hat der
              User kein SoundCloud-Konto:
            </p>
            <p>
              <strong>Name:&nbsp;</strong>sc_anonymous_id
              <br />
              <strong>Wert:</strong>&nbsp;208165-986996-398971-423805321162594-0
              <br />
              <strong>Verwendungszweck:</strong> Dieses Cookie macht es erst
              möglich, Dateien oder andere Inhalte in Websites einzubinden und
              speichert eine User-ID.
              <br />
              <strong>Ablaufdatum: </strong>nach 10 Jahren
            </p>
            <p>
              <strong>Anmerkung:</strong>
              <br />
              Das Cookie sc_anonymous_id wird sofort gesetzt, wenn Sie auf einer
              unserer Webseiten sind, die eine Soundcloud-Funktion eingebaut
              hat. Dafür müssen Sie mit der Funktion noch nicht interagieren.
            </p>
            <p>
              <strong>Name:&nbsp;</strong>__qca
              <br />
              <strong>Wert:</strong>&nbsp;P0-1223379886-1579605792812321162594-7
              <br />
              <strong>Verwendungszweck:</strong> Dieses Cookie ist ein
              Drittanbieter-Cookie von Quantcast und sammelt Daten wie
              beispielsweise wie oft Sie die Seite besuchen oder wie lange Sie
              auf der Seite bleiben. Die gesammelten Informationen werden dann
              an SoundCloud weitergegeben.
              <br />
              <strong>Ablaufdatum: </strong>nach einem Jahr
            </p>
            <p>
              <strong>Name:</strong> Sclocale
              <br />
              <strong>Wert:</strong>&nbsp;de
              <br />
              <strong>Verwendungszweck:</strong> Das Cookie speichert die
              Spracheinstellung, die Sie voreingestellt haben.
              <br />
              <strong>Ablaufdatum: </strong>nach einem Jahr
            </p>
            <p>
              <strong>Name:&nbsp;</strong>_soundcloud_session
              <br />
              <strong>Wert:</strong>&nbsp;/
              <br />
              <strong>Verwendungszweck:</strong> Zu diesem Cookie konnten wir
              keine konkreten Informationen in Erfahrung bringen.
              <br />
              <strong>Ablaufdatum: </strong>nach Sitzungsende
            </p>
            <p>
              <strong>Name:&nbsp;</strong>_session_auth_key
              <br />
              <strong>Wert:</strong>&nbsp;/
              <br />
              <strong>Verwendungszweck:</strong> Mit Hilfe des Cookies können
              Sitzungsinformationen (also Userverhalten) gespeichert werden und
              eine Client-Anfrage authentifiziert werden.
              <br />
              <strong>Ablaufdatum: </strong>nach 10 Jahren
            </p>
            <p>
              Zudem verwendet SoundCloud auch weitere Drittanbieter-Cookies wie
              _fbp, _ga, gid von Facebook und Google Analytics. All die in den
              Cookies gespeicherten Informationen nutzt SoundCloud, um die
              eigenen Dienste zu verbessern und personalisierte Werbung
              auszuspielen.
            </p>
            <h3>Wie lange und wo werden die Daten gespeichert?</h3>
            <p>
              Grundsätzlich bleiben die erhobenen Daten bei SoundCloud
              gespeichert, solange ein User-Konto besteht oder es für SoundCloud
              nötig ist, um die betriebswirtschaftlichen Ziele zu erreichen. Wie
              lange genau gespeichert wird ändert sich abhängig vom Kontext und
              den rechtlichen Verpflichtungen. Auch wenn Sie kein Konto haben
              und personenbezogene Daten gespeichert wurden, haben Sie das Recht
              die Datenlöschung zu beantragen.
            </p>
            <h3>
              Wie kann ich meine Daten löschen bzw. die Datenspeicherung
              verhindern?
            </h3>
            <p>
              Wenn Sie ein SoundCloud-Konto haben, können Sie über
              „Einstellungen“ die Datenverarbeitung verwalten bzw. Ihr ganzes
              Konto löschen. Sie können aber auch Cookies in Ihrem Browser genau
              nach Ihren Ansprüchen verwalten, löschen oder deaktivieren. Die
              Herangehensweise hängt immer von Ihrem verwendeten Browser ab.
              Falls Sie sich zum Löschen oder Deaktivieren von Cookies
              entscheiden, nehmen Sie bitte zu Kenntnis, dass dann
              möglicherweise nicht mehr alle Funktionen verfügbar sind. In den
              folgenden Anleitungen steht, wie Sie Cookies in Ihrem Browser
              verwalten, löschen oder deaktivieren können.
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.google.com/chrome/answer/95647?tid=321162594'
                href='https://support.google.com/chrome/answer/95647?tid=321162594'
                rel='noopener'
              >
                Chrome: Cookies in Chrome löschen, aktivieren und verwalten
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=321162594'
                href='https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=321162594'
                rel='noopener'
              >
                Safari: Verwalten von Cookies und Websitedaten mit Safari
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=321162594'
                href='https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=321162594'
                rel='noopener'
              >
                Firefox: Cookies löschen, um Daten zu entfernen, die Websites
                auf Ihrem Computer abgelegt haben
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=321162594'
                href='https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=321162594'
                rel='noopener'
              >
                Internet Explorer: Löschen und Verwalten von Cookies
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=321162594'
                href='https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=321162594'
                rel='noopener'
              >
                Microsoft Edge: Löschen und Verwalten von Cookies
              </a>
            </p>
            <p>
              Wir hoffen, wir haben Ihnen einen guten Überblick über den
              Datenverkehr durch SoundCloud geliefert. Wenn Sie mehr über die
              Datenschutzrichtlinien und dem allgemeinen Umgang mit Daten durch
              SoundCloud erfahren wollen, empfehlen wir Ihnen die
              Datenschutzerklärung des Unternehmens unter{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://soundcloud.com/pages/privacy?tid=321162594'
                href='https://soundcloud.com/pages/privacy?tid=321162594'
                rel='noopener'
              >
                https://soundcloud.com/pages/privacy
              </a>
              .
            </p>
            <h2>Benutzerdefinierte Google Suche Datenschutzerklärung</h2>
            <p>
              Wir haben auf unserer Website das Google-Plug-in zur
              benutzerdefinierten Suche eingebunden. Google ist die größte und
              bekannteste Suchmaschine weltweit und wird von dem
              US-amerikanische Unternehmen Google LLC (1600 Amphitheatre Parkway
              Mountain View, CA 94043, USA) betrieben. Durch die
              benutzerdefinierte Google Suche können Daten von Ihnen an Google
              übertragen werden. In dieser Datenschutzerklärung informieren wir
              Sie, warum wir dieses Plug-in verwenden, welche Daten verarbeitet
              werden und wie Sie diese Datenübertragung verwalten oder
              unterbinden können.
            </p>
            <h3>Was ist die benutzerdefinierte Google Suche?</h3>
            <p>
              Das Plug-in zur benutzerdefinierten Google Suche ist eine
              Google-Suchleiste direkt auf unserer Website. Die Suche findet wie
              auf{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://www.google.com?tid=321162594'
                href='https://www.google.com?tid=321162594'
                rel='follow noopener'
              >
                www.google.com
              </a>{' '}
              statt, nur fokussieren sich die Suchergebnisse auf unsere Inhalte
              und Produkte bzw. auf einen eingeschränkten Suchkreis.
            </p>
            <h3>
              Warum verwenden wir die benutzerdefinierte Google Suche auf
              unserer Webseite?
            </h3>
            <p>
              Eine Website mit vielen interessanten Inhalten wird oft so groß,
              dass man unter Umständen den Überblick verliert. Über die Zeit hat
              sich auch bei uns viel wertvolles Material angesammelt und wir
              wollen als Teil unserer Dienstleistung, dass Sie unsere Inhalte so
              schnell und einfach wie möglich finden. Durch die
              benutzerdefinierte Google-Suche wird das Finden von interessanten
              Inhalten zu einem Kinderspiel. Das eingebaute Google-Plug-in
              verbessert insgesamt die Qualität unserer Website und macht Ihnen
              das Suchen leichter.
            </p>
            <h3>
              Welche Daten werden durch die benutzerdefinierte Google Suche
              gespeichert?
            </h3>
            <p>
              Durch die benutzerdefinierte Google-Suche werden nur Daten von
              Ihnen an Google übertragen, wenn Sie die auf unserer Website
              eingebaute Google-Suche aktiv verwenden. Das heißt, erst wenn Sie
              einen Suchbegriff in die Suchleiste eingeben und dann diesen
              Begriff bestätigen (z.B. auf „Enter“ klicken) wird neben dem
              Suchbegriff auch Ihre IP-Adresse an Google gesandt, gespeichert
              und dort verarbeitet. Anhand der gesetzten Cookies (wie z.B.
              1P_JAR) ist davon auszugehen, dass Google auch Daten zur
              Webseiten-Nutzung erhält. Wenn Sie während Ihrem Besuch auf
              unserer Webseite, über die eingebaute Google-Suchfunktion, Inhalte
              suchen und gleichzeitig mit Ihrem Google-Konto angemeldet sind,
              kann Google die erhobenen Daten auch Ihrem Google-Konto zuordnen.
              Als Websitebetreiber haben wir keinen Einfluss darauf, was Google
              mit den erhobenen Daten macht bzw. wie Google die Daten
              verarbeitet.
            </p>
            <p>
              Folgende Cookie werden in Ihrem Browser gesetzt, wenn Sie die
              benutzerdefinierte Google Suche verwenden und nicht mit einem
              Google-Konto angemeldet sind:
            </p>
            <p>
              <strong>Name:</strong> 1P_JAR
              <br />
              <strong>Wert:</strong> 2020-01-27-13321162594-5
              <br />
              <strong>Verwendungszweck:</strong>&nbsp;Dieses Cookie sammelt
              Statistiken zur Website-Nutzung und misst Conversions. Eine
              Conversion entsteht zum Beispiel, wenn ein User zu einem Käufer
              wird. Das Cookie wird auch verwendet, um Usern relevante
              Werbeanzeigen einzublenden.
              <br />
              <strong>Ablaufdatum:</strong> nach einem Monat
            </p>
            <p>
              <strong>Name:</strong> CONSENT
              <br />
              <strong>Wert:</strong> WP.282f52321162594-9
              <br />
              <strong>Verwendungszweck:</strong>&nbsp;Das Cookie speichert den
              Status der Zustimmung eines Users zur Nutzung unterschiedlicher
              Services von Google. CONSENT dient auch der Sicherheit, um User zu
              überprüfen und Userdaten vor unbefugten Angriffen zu schützen.
              <br />
              <strong>Ablaufdatum:</strong> nach 18 Jahren
            </p>
            <p>
              <strong>Name:</strong> NID
              <br />
              <strong>Wert:</strong> 196=pwIo3B5fHr-8
              <br />
              <strong>Verwendungszweck:</strong>&nbsp;NID wird von Google
              verwendet, um Werbeanzeigen an Ihre Google-Suche anzupassen. Mit
              Hilfe des Cookies „erinnert“ sich Google an Ihre eingegebenen
              Suchanfragen oder Ihre frühere Interaktion mit Anzeigen. So
              bekommen Sie immer maßgeschneiderte Werbeanzeigen.
              <br />
              <strong>Ablaufdatum:</strong> nach 6 Monaten
            </p>
            <p>
              <strong>Anmerkung:</strong> Diese Aufzählung kann keinen Anspruch
              auf Vollständigkeit erheben, da Google die Wahl ihrer Cookies
              immer wieder auch verändert.
            </p>
            <h3>Wie lange und wo werden die Daten gespeichert?</h3>
            <p>
              Die Google-Server sind auf der ganzen Welt verteilt. Da es sich
              bei Google um ein amerikanisches Unternehmen handelt, werden die
              meisten Daten auf amerikanischen Servern gespeichert. Unter&nbsp;
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://www.google.com/about/datacenters/inside/locations/?hl=de'
                href='https://www.google.com/about/datacenters/inside/locations/?hl=de'
                rel='follow noopener'
              >
                https://www.google.com/about/datacenters/inside/locations/?hl=de
              </a>{' '}
              sehen Sie genau, wo die Google-Server stehen.
              <br />
              Ihre Daten werden auf verschiedenen physischen Datenträgern
              verteilt. Dadurch sind die Daten schneller abrufbar und vor
              möglichen Manipulationen besser geschützt. Google hat auch
              entsprechende Notfallprogramme für Ihre Daten. Wenn es
              beispielsweise bei Google interne technische Probleme gibt und
              dadurch Server nicht mehr funktionieren, bleibt das Risiko einer
              Dienstunterbrechung und eines Datenverlusts dennoch gering.
              <br />
              Je nach dem um welche Daten es sich handelt, speichert Google
              diese unterschiedlich lange. Manche Daten können Sie selbst
              löschen, andere werden von Google automatisch gelöscht oder
              anonymisiert. Es gibt aber auch Daten, die Google länger
              speichert, wenn dies aus juristischen oder geschäftlichen Gründen
              erforderlich ist.
            </p>
            <h3>
              Wie kann ich meinen Daten löschen bzw. die Datenspeicherung
              verhindern?
            </h3>
            <p>
              Nach dem Datenschutzrecht der Europäischen Union haben Sie das
              Recht, Auskunft über Ihre Daten zu erhalten, sie zu aktualisieren,
              zu löschen oder einzuschränken. Es gibt einige Daten, die Sie
              jederzeit löschen können. Wenn Sie ein Google-Konto besitzen,
              können Sie dort Daten zu Ihrer Webaktivität löschen bzw.
              festlegen, dass sie nach einer bestimmten Zeit gelöscht werden
              sollen.
              <br />
              In Ihrem Browser haben Sie zudem die Möglichkeit, Cookies zu
              deaktivieren, zu löschen oder nach Ihren Wünschen und Vorlieben zu
              verwalten. Hier finden Sie Anleitungen zu den wichtigsten
              Browsern:
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.google.com/chrome/answer/95647?tid=321162594'
                href='https://support.google.com/chrome/answer/95647?tid=321162594'
                rel='noopener'
              >
                Chrome: Cookies in Chrome löschen, aktivieren und verwalten
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=321162594'
                href='https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=321162594'
                rel='noopener'
              >
                Safari: Verwalten von Cookies und Websitedaten mit Safari
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=321162594'
                href='https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=321162594'
                rel='noopener'
              >
                Firefox: Cookies löschen, um Daten zu entfernen, die Websites
                auf Ihrem Computer abgelegt haben
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=321162594'
                href='https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=321162594'
                rel='noopener'
              >
                Internet Explorer: Löschen und Verwalten von Cookies
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=321162594'
                href='https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=321162594'
                rel='noopener'
              >
                Microsoft Edge: Löschen und Verwalten von Cookies
              </a>
            </p>
            <p>
              Google ist aktiver Teilnehmer beim EU-U.S. Privacy Shield
              Framework, wodurch der korrekte und sichere Datentransfer
              persönlicher Daten geregelt wird. Mehr Informationen dazu finden
              Sie auf{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;tid=321162594'
                href='https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;tid=321162594'
                rel='noopener'
              >
                https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI
              </a>
              . Wir hoffen wir konnten Ihnen die wichtigsten Informationen rund
              um die Datenverarbeitung durch Google näherbringen. Wenn Sie mehr
              darüber erfahren wollen, empfehlen wir die umfangreiche
              Datenschutzerklärung von Google unter{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://policies.google.com/privacy?hl=de'
                href='https://policies.google.com/privacy?hl=de'
                rel='follow noopener'
              >
                https://policies.google.com/privacy?hl=de
              </a>
              .
            </p>
            <h2>Cookiebot Datenschutzerklärung</h2>
            <p>
              Wir verwenden auf unserer Website Funktionen des Anbieters
              Cookiebot. Hinter Cookiebot steht das Unternehmen Cybot A/S,
              Havnegade 39, 1058 Kopenhagen, DK. Cookiebot bietet uns unter
              anderem die Möglichkeit, Ihnen einen umfangreichen Cookie-Hinweis
              (auch Cookie-Banner oder Cookie-Notice genannt) zu liefern. Durch
              die Verwendung dieser Funktion können Daten von Ihnen an Cookiebot
              bzw. Cybot gesendet, gespeichert und verarbeitet werden. In dieser
              Datenschutzerklärung informieren wir Sie warum wir Cookiebot
              nutzen, welche Daten übertragen werden und wie Sie diese
              Datenübertragung verhindern können.
            </p>
            <h3>Was ist Cookiebot?</h3>
            <p>
              Cookiebot ist ein Software-Produkt des Unternehmens Cybot. Die
              Software erstellt automatisch einen DSGVO-konformen Cookie-Hinweis
              für unserer Websitebesucher. Zudem scannt, kontrolliert und wertet
              die Technologie hinter Cookiebot alle Cookies und
              Tracking-Maßnahmen auf unserer Website.
            </p>
            <h3>Warum verwenden wir Cookiebot auf unserer Webseite?</h3>
            <p>
              Datenschutz nehmen wir sehr ernst. Wir wollen Ihnen ganz genau
              zeigen, was auf unserer Website vor sich geht und welche Daten von
              Ihnen gespeichert werden. Cookiebot hilft uns einen guten
              Überblick über all unserer Cookies (Erst- und
              Drittanbieter-Cookies) zu erhalten. So können wir Sie über die
              Nutzung von Cookies auf unserer Website exakt und transparent
              informieren. Sie bekommen stets einen aktuellen und
              datenschutzkonformen Cookie-Hinweis und entscheidet selbst, welche
              Cookies Sie zulassen und welche nicht.
            </p>
            <h3>Welche Daten werden von Cookiebot gespeichert?</h3>
            <p>
              Wenn Sie Cookies zulassen, werden folgende Daten an Cybot
              übertragen, gespeichert und verarbeitet.
            </p>
            <ul>
              <li>
                IP-Adresse (in anonymisierter Form, die letzten 3 Ziffern werden
                auf 0 gesetzt)
              </li>
              <li>Datum und Uhrzeit Ihres Einverständnisses</li>
              <li>unsere Website-URL</li>
              <li>technische Browserdaten</li>
              <li>verschlüsselter, anonymer Key</li>
              <li>
                die Cookies, die Sie zugelassen haben (als Zustimmungsnachweis)
              </li>
            </ul>
            <p>
              Folgenden Cookies werden von Cookiebot gesetzt, wenn Sie der
              Verwendung von Cookies zugestimmt haben:
            </p>
            <p>
              <strong>Name:</strong>&nbsp;CookieConsent
              <br />
              <strong>Wert:</strong>
              &nbsp;stamp:’P7to4eNgIHvJvDerjKneBsmJQd9321162594-2
              <br />
              <strong>Verwendungszweck:</strong>&nbsp;In diesem Cookie wird Ihr
              Zustimmungsstatus, gespeichert. Dadurch kann unsere Website auch
              bei zukünftigen Besuchen den aktuellen Status lesen und befolgen.
              <br />
              <strong>Ablaufdatum:</strong>&nbsp;nach einem Jahr
            </p>
            <p>
              <strong>Name:</strong>&nbsp;CookieConsentBulkTicket
              <br />
              <strong>Wert:</strong>
              &nbsp;kDSPWpA%2fjhljZKClPqsncfR8SveTnNWhys5NojaxdFYBPjZ2PaDnUw%3d%3321162594-6
              <br />
              <strong>Verwendungszweck:</strong>&nbsp;Dieses Cookie wird
              gesetzt, wenn Sie alle Cookies erlauben und somit eine
              “Sammelzustimmung” aktiviert haben. Das Cookie speichert dann eine
              eigene, zufällige und eindeutige ID.
              <br />
              <strong>Ablaufdatum:&nbsp;</strong>nach einem Jahr
            </p>
            <p>
              <strong>Anmerkung: </strong>Bitte bedenken Sie, dass es sich hier
              um eine beispielhafte Liste handelt und wir keinen Anspruch auf
              Vollständigkeit erheben können. In der Cookie-Erklärung
              unter&nbsp;
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://www.cookiebot.com/de/cookie-declaration/'
                href='https://www.cookiebot.com/de/cookie-declaration/'
                rel='follow noopener'
              >
                https://www.cookiebot.com/de/cookie-declaration/
              </a>
              &nbsp;sehen Sie, welche weiteren Cookies eingesetzt werden können.
            </p>
            <p>
              Laut der Datenschutzerklärung von Cybot verkauft das Unternehmen
              personenbezogene Daten nicht weiter. Cybot gibt allerdings Daten
              an vertrauensvolle Dritt- oder Subunternehmen weiter, die dem
              Unternehmen helfen, die eigenen betriebswirtschaftlichen Ziele zu
              erreichen. Daten werden auch dann weitergegeben, wenn dies
              rechtlich erforderlich ist.
            </p>
            <h3>Wie lange und wo werden die Daten gespeichert?</h3>
            <p>
              Alle erhobenen Daten werden ausschließlich innerhalb der
              Europäischen Union übertragen, gespeichert und weitergeleitet. Die
              Daten werden in einem Azure-Rechenzentrum (Cloud-Anbieter ist
              Microsoft) gespeichert. Auf&nbsp;{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://azure.microsoft.com/de-de/global-infrastructure/regions/?tid=321162594'
                href='https://azure.microsoft.com/de-de/global-infrastructure/regions/?tid=321162594'
                rel='noopener'
              >
                https://azure.microsoft.com/de-de/global-infrastructure/regions/
              </a>{' '}
              erfahren Sie mehr über alle „Azure-Regionen“. Alle User Daten
              werden von Cookiebot nach 12 Monaten ab der Registrierung
              (Cookie-Zustimmung) bzw. unmittelbar nach Kündigung des
              Cookiebot-Services gelöscht.
            </p>
            <h3>
              Wie kann ich meine Daten löschen bzw. die Datenspeicherung
              verhindern?
            </h3>
            <p>
              Sie haben jederzeit das Recht auf Ihre personenbezogenen Daten
              zuzugreifen und sie auch zu löschen. Die Datenerfassung und
              Speicherung können Sie beispielsweise verhindern, indem Sie über
              den Cookie-Hinweis die Verwendung von Cookies ablehnen. Eine
              weitere Möglichkeit die Datenverarbeitung zu unterbinden bzw. nach
              Ihren Wünschen zu verwalten, bietet Ihr Browser. Je nach Browser
              funktioniert die Cookie-Verwaltung etwas anders. Hier finden Sie
              die Anleitungen zu den momentan bekanntesten Browsern:
              <br />
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.google.com/chrome/answer/95647?tid=321162594'
                href='https://support.google.com/chrome/answer/95647?tid=321162594'
                rel='noopener'
              >
                Chrome: Cookies in Chrome löschen, aktivieren und verwalten
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=321162594'
                href='https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=321162594'
                rel='noopener'
              >
                Safari: Verwalten von Cookies und Websitedaten mit Safari
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=321162594'
                href='https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=321162594'
                rel='noopener'
              >
                Firefox: Cookies löschen, um Daten zu entfernen, die Websites
                auf Ihrem Computer abgelegt haben
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=321162594'
                href='https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=321162594'
                rel='noopener'
              >
                Internet Explorer: Löschen und Verwalten von Cookies
              </a>
            </p>
            <p>
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=321162594'
                href='https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=321162594'
                rel='noopener'
              >
                Microsoft Edge: Löschen und Verwalten von Cookies
              </a>
            </p>
            <p>
              Wenn Sie mehr über die Datenschutzrichtlinien von „Cookiebot“ bzw.
              dem dahinterstehenden Unternehmen Cybot erfahren wollen, empfehlen
              wir Ihnen die Datenschutzrichtlinien unter{' '}
              <a
                class='adsimple-321162594'
                data-cke-saved-href='https://www.cookiebot.com/de/privacy-policy/?tid=321162594'
                href='https://www.cookiebot.com/de/privacy-policy/?tid=321162594'
                rel='noopener'
              >
                https://www.cookiebot.com/de/privacy-policy/
              </a>{' '}
              durchzulesen.
            </p>
            <p>
              <br />
            </p>
            <p>
              Quelle: Erstellt&nbsp;mit dem&nbsp;
              <a
                data-cke-saved-href='https://www.adsimple.de/datenschutz-generator/'
                href='https://www.adsimple.de/datenschutz-generator/'
                rel='follow'
                style={{ textDecoration: 'none' }}
                title='Datenschutz Generator Deutschland'
              >
                Datenschutz Generator
              </a>{' '}
              von AdSimple&nbsp;in Kooperation mit{' '}
              <a
                data-cke-saved-href='https://www.bauenwir.de'
                href='https://www.bauenwir.de'
                rel='follow'
              >
                bauenwir.de
              </a>
              <br />
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Impressum;
