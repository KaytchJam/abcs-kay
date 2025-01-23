import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Container, Row, Col, Image } from 'react-bootstrap';
import NavBar from "./NavBar";
import Footer from "./Footer";
import './GalleryPage.css'; // Import the CSS file for additional styling

const GalleryPage = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [visibleImages, setVisibleImages] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const imagesPerPage = 20;

  useEffect(() => {
    const fetchImageUrls = async () => {
      try {
        const response = await axios.get(`https://api.texasabcs.com/images?folder=gallery`);
        const urls = Object.values(response.data) as string[];
        setImageUrls(urls);
      } catch (error) {
        console.error(`Error fetching images for page`, error);
      }
    };

    fetchImageUrls();
  }, []);

  useEffect(() => {
    const newVisibleImages = imageUrls.slice(0, page * imagesPerPage);
    setVisibleImages(newVisibleImages);
  }, [imageUrls, page]);

  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    setPage((prevPage) => prevPage + 1);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="gallery-page">
      <NavBar />
      <Container className="py-5">
        <h2 className="text-center mb-5">Gallery</h2>
        <Row>
          {visibleImages.map((src, index) => (
            <Col md={4} key={index} className="mb-4">
              <div className="image-wrapper">
                <Image src={src} alt={`Gallery image ${index}`} fluid className="gallery-image" />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default GalleryPage;