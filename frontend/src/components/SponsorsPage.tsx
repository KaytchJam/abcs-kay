import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import NavBar from './NavBar'; // Adjust the path as needed

const sponsors = [
  { name: 'Atlassian', logo: '/path/to/atlassian-logo.png' },
  { name: 'Bloomberg', logo: '/path/to/bloomberg-logo.png' },
  { name: 'BP', logo: '/path/to/bp-logo.png' },
  { name: 'Capital One', logo: '/path/to/capital-one-logo.png' },
  { name: 'Chevron', logo: '/path/to/chevron-logo.png' },
  { name: 'Citadel', logo: '/path/to/citadel-logo.png' },
  { name: 'D.E. Shaw Group', logo: '/path/to/de-shaw-logo.png' },
  { name: 'Deloitte', logo: '/path/to/deloitte-logo.png' },
  { name: 'Draft Kings', logo: '/path/to/draft-kings-logo.png' },
  { name: 'Goldman Sachs', logo: '/path/to/goldman-sachs-logo.png' },
  { name: 'Google', logo: '/path/to/google-logo.png' },
  { name: 'H-E-B', logo: '/path/to/heb-logo.png' },
  // Add more sponsors as needed
];

function Sponsors() {
  return (
    <div className="sponsors-page">
      <NavBar />
      
      <section className="py-5 mt-5">
        <Container>
          <h1 className="display-4 text-center mb-5">Our Corporate Sponsors</h1>
          <p className="lead text-center mb-5">
            We are grateful for the support of these amazing companies that help make our initiatives possible.
          </p>
          
          <Row xs={1} md={2} lg={3} className="g-4">
            {sponsors.map((sponsor, index) => (
              <Col key={index}>
                <Card className="h-100 shadow-sm">
                  <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                    <Card.Img 
                      variant="top" 
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      className="mb-3"
                      style={{ maxWidth: '200px', maxHeight: '100px', objectFit: 'contain' }}
                    />
                    <Card.Title className="text-center">{sponsor.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-success text-white">
        <Container className="text-center">
          <h2 className="mb-4">Interested in becoming a sponsor?</h2>
          <p className="lead mb-4">
            Join these amazing companies in supporting diversity in tech and connect with talented students.
          </p>
          <a href="mailto:utcsabcs.corporate@gmail.com" className="btn btn-light btn-lg">
            Contact Us About Sponsorship
          </a>
        </Container>
      </section>

      <footer className="py-4 bg-dark text-white text-center">
        <Container>
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Association of Black Computer Scientists. All rights reserved.
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default Sponsors;