import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Container, Row, Col, Image, Button, Card, Carousel } from 'react-bootstrap';
import { FaLinkedinIn, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import NavBar from "./NavBar";
import Footer from "./Footer";
import { officers } from '../data/officers';

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>

const HomePage = () => {
  const [imageUrls, setImageUrls] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchImageUrls = async () => {
      try {
        const response = await axios.get(`https://h2mww7p6wa.execute-api.us-east-2.amazonaws.com/images?folder=home`);
        const urls: { [key: string]: string } = response.data;
        setImageUrls(urls);
      } catch (error) {
        console.error(`Error fetching images for page`, error);
      }
    };

    fetchImageUrls();
  }, []);


  return (
    <div className="home-page">
      <NavBar></NavBar>
      <section className="hero vh-100 d-flex align-items-center" style={{ backgroundImage: `url(${imageUrls['group']})`}}>
      <Container className='homeheader'>
        <Row className="align-items-center">
        <Col lg={6} className="text-center text-lg-start">
          <h1 className=" display-3 fw-bold mb-4">
           <span className='minitext'>We're the </span> <br/> Association of <span className="text-success">Black</span> Computer Scientists
          </h1>
          <p className="lead mb-4">
          Empowering the next generation of diverse technologists at The University of Texas at Austin
          </p>
          <Button variant="dark" size="lg" className="rounded-pill home-but px-5 border me-3" href='#contact'>Join Us</Button>
          <Button variant="dark" size="lg" className='home-but rounded-pill px-5' href='https://linktr.ee/utcsabcs'>Our Linktree!</Button>
        </Col>
        </Row>
      </Container>
      </section>

      <section id="about" className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="subheading mb-4">Mission</h2>
              <p className="lead mb-4" style={{ maxWidth: '35rem' }}>
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
              <Image style={{ objectFit: 'cover', borderRadius: '15px', }} src={imageUrls['mission']} fluid className="rounded-3 shadow" />
            </Col>
          </Row>
        </Container>
      </section>

      <section id="initiatives" className="py-5">
        <Container>
          <h2 className="subheading text-center mb-5">Initiatives</h2>
          <Row>
            {['Corporate', 'Outreach', 'Social'].map((initiative) => (
              <Col md={4} key={initiative} className="mb-4">
                <Card style={{ border: 'none', outline: 'none'}}  className="h-100">
                  <Card.Img variant="top" className='img-card rounded' style={{ objectFit: 'cover', borderRadius: '15px', }} src={initiative === 'Corporate' ? imageUrls['corporate'] : initiative === 'Outreach' ? imageUrls['outreach'] : imageUrls['social']} />
                  <Card.Body className='py-4 mx-5'>
                    <Card.Title className='fira-sans-bold text-center' style={{ fontSize: '2rem' }}>{initiative}</Card.Title>
                    <Card.Text className='text-center' style={{ fontSize: '1 rem' }}>
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

      <section id="testimonials" className="py-5 member-testimony-bg text-white" style={{ backgroundImage: `url(${imageUrls['testimony']})`}}>
        <style>
          {`
            .carousel .carousel-indicators {
              bottom: -50px;
            }
            .carousel {
              padding-bottom: 60px;
            }
          `}
        </style>
        <Container>
          <h2 className="subheading text-center mb-5">What Our Members Say</h2>
          <Carousel>
            {[1, 2, 3].map((index) => (
              <Carousel.Item key={index}>
                <blockquote className="blockquote text-center">
                  <p className="mb-3">
                    "ABCS has been instrumental in my growth as a computer scientist and as a leader."
                  </p>
                  <footer className="mb-3 blockquote-footer text-white">
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
        <h2 className="subheading text-center mb-5">Leadership</h2>
        <Row>
          {officers.map((officer) => (
            <Col md={3} key={officer.position} className="mb-4">
              <Card style={{ border: 'none', outline: 'none',}} className="≈officer-card text-center h-100 ">
              <Card.Img variant="top"
                src={imageUrls[officer.image] || officer.image}
                style={{
                  borderColor: 'white',
                  borderRadius: '15px',
                  width: '100%',
                  height: '250px', // Set a fixed height
                  objectFit: 'cover', // This will crop the image to fit while maintaining aspect ratio
                  objectPosition: 'center top' // This centers the image
                }}
                />
                <Card.Body style={{ outline: 'none' }}>
                  <Card.Title className='card-title' style={{ fontSize: '1.65rem'}}>{officer.name}</Card.Title>
                  <Card.Text className='card-text'>{officer.position}</Card.Text>
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
              <h2 className="subheading mb-4">Get In Touch</h2>
              <p className="lead" style={{ maxWidth: '35rem' }}>
                Interested in joining ABCS or becoming a sponsor? We'd love to hear from you!
              </p>
              <p>
                <FaEnvelope className="me-2" />
                <a href="mailto:utcsabcs@gmail.com" className="text-white">utcsabcs@gmail.com</a>
              </p>
              <div className="social-icons fs-3">
                <a href='https://x.com/TexasABCS' style={{ color: 'inherit' }}><FaTwitter className="me-3" /></a>
                <a href='https://www.instagram.com/texas_abcs/' style={{ color: 'inherit' }}><FaInstagram className="me-3"/></a>
                <a href='https://www.linkedin.com/company/texas-abcs/posts/?feedView=all' style={{ color: 'inherit' }}><FaLinkedinIn /></a>
              </div>
            </Col>
            <Col lg={6} className="mt-5 mt-lg-0">
              <Image src={imageUrls['contact']} className="rounded-3 shadow img-card" />
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;