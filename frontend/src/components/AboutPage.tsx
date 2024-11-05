import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import NavBar from './NavBar'; // Adjust the path as needed
import Footer from './Footer';

import corporateimg from "../assets/corporate-img.jpg";

function AboutPage() {
  return (
    <div className="sponsors-page">
      <NavBar />
      
      <section className="py-5 mt-5">
        <Container>
          <h1 className="subheading text-center mb-5">Our Story</h1>
          <p className="lead text-center mb-5">
            We are grateful for the support of these amazing companies that help make our initiatives possible.
          </p>
          
          <Row xs={1} md={2} lg={3} className="g-4">
            
          </Row>
        </Container>
      </section>

      <section id="about-image" className="py-5">
        <Container>
          <Row>
            <Col md={6} className="mb-4">
              <Card style={{ border: 'none', outline: 'none'}} className="h-100">
                <Card.Img 
                  variant="top" 
                  src={corporateimg}
                  alt="corporate image"
                  className="w-100"
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
}

export default AboutPage;