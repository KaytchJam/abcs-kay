import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import NavBar from "./NavBar";
import Footer from "./Footer";

const CalendarPage = () => {
  return (
    <div>
      <NavBar />
      <section className="py-5 mt-5">
        <Container className="py-5">
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h1 className="display-4 fw-bold mb-4">
                Upcoming Events
              </h1>
              <p className="lead mb-4">
                Stay up to date with ABCS events, meetings, and important dates
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className="shadow-lg border-0" style={{ borderRadius: '15px' }}>
                <Card.Body className="p-0">
                  <iframe 
                    src="https://embed.styledcalendar.com/#af2oAzSTGJhZmSLIcHlk"
                    style={{
                      border: 0,
                      width: '100%',
                      height: '700px',
                      borderRadius: '15px',
                    }}
                    frameBorder="0"
                    scrolling="no"
                    title="ABCS Events Calendar"
                  />
                  <script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>
                </Card.Body>
              </Card>
              
              <Card className="text-center mt-5 border-0 bg-light" style={{ borderRadius: '15px' }}>
                <Card.Body className="p-4">
                  <h3 className="h4 mb-4">Want to stay updated?</h3>
                  <p className="mb-4">
                    Subscribe to our calendar to never miss an ABCS event!
                  </p>
                  <Button 
                    variant="dark" 
                    className="rounded-pill px-5"
                  >
                    Add to Calendar
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>


      <Footer />
    </div>
  );
};

export default CalendarPage;