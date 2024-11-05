import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import NavBar from './NavBar'; // Adjust the path as needed
import Footer from './Footer';

import atlassian from '../assets/sponsors/Atlassian-Logo.png';
import bloomberg from '../assets/sponsors/bloomberg.png';
import bp from '../assets/sponsors/bp.png';
import capitalOne from '../assets/sponsors/capitalone.png';
import chevron from '../assets/sponsors/chevron.png';
import citadel from '../assets/sponsors/citadel.png';
import deShaw from '../assets/sponsors/deshaw.png';
import deloitte from '../assets/sponsors/deloitte.png';
import draftKings from '../assets/sponsors/draftkings.png';
import goldmanSachs from '../assets/sponsors/goldmansachs.png';
import google from '../assets/sponsors/google.png';
import heb from '../assets/sponsors/heb.png';

const sponsors = [
  { name: 'Atlassian', logo: atlassian },
  { name: 'Bloomberg', logo: bloomberg },
  { name: 'BP', logo: bp },
  { name: 'Capital One', logo: capitalOne },
  { name: 'Chevron', logo: chevron },
  { name: 'Citadel', logo: citadel },
  { name: 'D.E. Shaw Group', logo: deShaw },
  { name: 'Deloitte', logo: deloitte },
  { name: 'Draft Kings', logo: draftKings },
  { name: 'Goldman Sachs', logo: goldmanSachs },
  { name: 'Google', logo: google },
  { name: 'H-E-B', logo: heb },
  // Add more sponsors as needed
];

function Sponsors() {
  return (
    <div className="sponsors-page">
      <NavBar />
      
      <section className="py-5 mt-5">
        <Container>
          <h1 className="subheading text-center mb-5">Our Corporate Sponsors</h1>
          <p className="lead text-center mb-5">
            We are grateful for the support of these amazing companies that help make our initiatives possible.
          </p>
          
          <Row xs={1} md={2} lg={3} className="g-4">
            {sponsors.map((sponsor, index) => (
              <Col key={index}>
                <Card style={{ border: 'none', outline: 'none'}} className="h-100">
                  <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                    <Card.Img 
                      variant="top" 
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      className="mb-3 fira-sans-semi"
                      style={{ maxWidth: '200px', maxHeight: '100px', objectFit: 'contain' }}
                    />
                    {/* <Card.Title className="text-center">{sponsor.name}</Card.Title> */}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-success text-white">
        <Container className="text-center">
          <h2 className="subheading mb-4">Interested in becoming a sponsor?</h2>
          <p className="lead mb-4">
            Join these amazing companies in supporting diversity in tech and connect with talented students.
          </p>
          <a href="mailto:utcsabcs.corporate@gmail.com" className="btn btn-outline-light btn-lg">
            Contact Us About Sponsorship
          </a>
        </Container>
      </section>

      <Footer />
    </div>
  );
}

export default Sponsors;