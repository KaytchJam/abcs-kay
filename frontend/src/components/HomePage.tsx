import React from 'react';
import { Container, Row, Col, Image, Button, Card, Carousel } from 'react-bootstrap';
import { FaLinkedinIn, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import NavBar from "./NavBar";
import { officers } from '../data/officers';

const HomePage = () => {
  return (
    <div className="home-page">
      <NavBar></NavBar>
      <section className="hero vh-100 d-flex align-items-center">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center text-lg-start">
              <h1 className="display-3 fw-bold mb-4">
                We are <span className="text-success">Black</span> Computer Scientists
              </h1>
              <p className="lead mb-4">
                Empowering the next generation of diverse technologists at The University of Texas at Austin
              </p>
              <Button variant="success" size="lg" className="me-3">Join Us</Button>
              <Button variant="outline-dark" size="lg">Learn More</Button>
            </Col>
            <Col lg={6} className="mt-5 mt-lg-0">
              <Image src="/path-to-hero-image.jpg" fluid className="rounded-3 shadow-lg" />
            </Col>
          </Row>
        </Container>
      </section>

      <section id="about" className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="display-4 mb-4">Our Mission</h2>
              <p className="lead mb-4">
                We provide mentorship, networking, and growth opportunities to Black students pursuing careers in technology.
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">🚀 Foster a supportive community</li>
                <li className="mb-2">🌟 Promote academic excellence</li>
                <li className="mb-2">🤝 Connect students with industry leaders</li>
                <li className="mb-2">🌍 Increase diversity in tech</li>
              </ul>
            </Col>
            <Col md={6}>
              <Image src="/path-to-about-image.jpg" fluid className="rounded-3 shadow" />
            </Col>
          </Row>
        </Container>
      </section>

      <section id="initiatives" className="py-5">
        <Container>
          <h2 className="display-4 text-center mb-5">Our Initiatives</h2>
          <Row>
            {['Corporate', 'Outreach', 'Social'].map((initiative) => (
              <Col md={4} key={initiative} className="mb-4">
                <Card className="h-100 shadow-sm">
                  <Card.Img variant="top" src={`/path-to-${initiative.toLowerCase()}-image.jpg`} />
                  <Card.Body>
                    <Card.Title>{initiative}</Card.Title>
                    <Card.Text>
                      {initiative === 'Corporate'
                        ? 'Connecting students with industry opportunities'
                        : initiative === 'Outreach'
                        ? 'Inspiring the next generation of Black technologists'
                        : 'Building a strong, supportive community'
                      }
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section id="testimonials" className="py-5 bg-success text-white">
        <Container>
          <h2 className="display-4 text-center mb-5">What Our Members Say</h2>
          <Carousel>
            {[1, 2, 3].map((index) => (
              <Carousel.Item key={index}>
                <blockquote className="blockquote text-center">
                  <p className="mb-0">
                    "ABCS has been instrumental in my growth as a computer scientist and as a leader."
                  </p>
                  <footer className="blockquote-footer text-white">
                    ABCS Member, <cite title="Source Title">Class of 202{index}</cite>
                  </footer>
                </blockquote>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>

      <section id="leadership" className="py-5">
      <Container>
        <h2 className="display-4 text-center mb-5">Our Leadership</h2>
        <Row>
          {officers.map((officer) => (
            <Col md={3} key={officer.position} className="mb-4">
              <Card className="text-center h-100 shadow-sm">
                <Card.Img variant="top" src={officer.imagePath}/>
                <Card.Body>
                  <Card.Title>{officer.position}</Card.Title>
                  <Card.Text>{officer.name}</Card.Text>
                  <div className="social-icons">
                    <a href={officer.linkedin} target="_blank" rel="noopener noreferrer" className="me-2">
                      <FaLinkedinIn />
                    </a>
                    <a href={`mailto:${officer.email}`}>
                      <FaEnvelope />
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>

      <section id="contact" className="py-5 bg-dark text-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h2 className="display-4 mb-4">Get In Touch</h2>
              <p className="lead mb-4">
                Interested in joining ABCS or becoming a sponsor? We'd love to hear from you!
              </p>
              <p>
                <FaEnvelope className="me-2" />
                <a href="mailto:utcsabcs@gmail.com" className="text-white">utcsabcs@gmail.com</a>
              </p>
              <div className="social-icons fs-3">
                <FaTwitter className="me-3" />
                <FaInstagram className="me-3" />
                <FaLinkedinIn />
              </div>
            </Col>
            <Col lg={6} className="mt-5 mt-lg-0">
              <Image src="/path-to-contact-image.jpg" fluid className="rounded-3 shadow" />
            </Col>
          </Row>
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
};

export default HomePage;