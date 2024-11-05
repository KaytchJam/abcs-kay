import React from 'react';
import { Container, Row, Col, Image, Button, Card, Carousel } from 'react-bootstrap';

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>

const Footer = () => {
  return (
    <footer className="py-4 bg-dark text-white text-center">
        <Container>
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Association of Black Computer Scientists. All rights reserved.
          </p>
        </Container>
      </footer>
  );
}

export default Footer;