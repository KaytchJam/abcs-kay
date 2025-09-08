import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import NavBar from './NavBar'; // Adjust the path as needed
import Footer from './Footer';
import axios from 'axios';


function Sponsors() {
  const [imageUrls, setImageUrls] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchImageUrls = async () => {
      try {
        const response = await axios.get(`https://h2mww7p6wa.execute-api.us-east-2.amazonaws.com/images?folder=sponsors`);
        const urls: { [key: string]: string } = response.data;
        setImageUrls(urls);
      } catch (error) {
        console.error(`Error fetching images for page`, error);
      }
    };

    fetchImageUrls();
  }, []);

  const sponsors = [
    { name: 'Atlassian', logo: imageUrls['atlassian'] },
    { name: 'Bloomberg', logo: imageUrls['bloomberg'] },
    { name: 'BP', logo: imageUrls['bp'] },
    { name: 'Capital One', logo: imageUrls['capitalone'] },
    { name: 'Chevron', logo: imageUrls['chevron'] },
    { name: 'Citadel', logo: imageUrls['citadel'] },
    { name: 'D.E. Shaw Group', logo: imageUrls['deshaw'] },
    { name: 'Deloitte', logo: imageUrls['deloitte'] },
    { name: 'Draft Kings', logo: imageUrls['draftkings'] },
    { name: 'Goldman Sachs', logo: imageUrls['goldmansachs'] },
    { name: 'Google', logo: imageUrls['google']},
    { name: 'H-E-B', logo: imageUrls['heb'] },
  ];

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