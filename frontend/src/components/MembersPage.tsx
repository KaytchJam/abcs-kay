import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, InputGroup } from 'react-bootstrap';
import { FaSearch, FaEnvelope, FaGraduationCap, FaBirthdayCake, FaTrophy } from 'react-icons/fa';
import NavBar from "./NavBar";
import Footer from "./Footer";

interface Member {
  name: string;
  email: string;
  birthday: string;
  totalPoints: number;
  graduationYear: number;
}

interface MembersResponse {
  numMembers: number;
  members: Member[];
}

const MembersPage = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [totalMembers, setTotalMembers] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch('https://api.texasabcs.com/members');
        const data: MembersResponse = await response.json();
        if (data.members) {
          setMembers(data.members);
          setTotalMembers(data.numMembers);
        }
      } catch (error) {
        console.error('Error fetching members:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMembers();
  }, []);

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <NavBar />
      
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h1 className="display-4 fw-bold mb-4">
                Our Members
              </h1>
              <p className="lead mb-4">
                Meet the {totalMembers} talented members of ABCS
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center mb-5">
            <Col lg={6}>
              <InputGroup className="mb-3">
                <InputGroup.Text className="bg-white">
                  <FaSearch className="text-muted" />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search members..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border-start-0"
                />
              </InputGroup>
            </Col>
          </Row>

          {isLoading ? (
            <div className="text-center">Loading members...</div>
          ) : (
            <Row>
              {filteredMembers.map((member, index) => (
                <Col key={index} md={6} lg={4} className="mb-4">
                  <Card className="h-100 border-0 shadow-sm" style={{ borderRadius: '15px' }}>
                    <Card.Body>
                      <h3 className="h4 mb-3">{member.name}</h3>
                      
                      <div className="mb-2">
                        <FaEnvelope className="text-success me-2" />
                        <a href={`mailto:${member.email}`} className="text-decoration-none text-dark">
                          {member.email}
                        </a>
                      </div>

                      <div className="mb-2">
                        <FaGraduationCap className="text-success me-2" />
                        Class of {member.graduationYear}
                      </div>

                      <div className="mb-2">
                        <FaTrophy className="text-success me-2" />
                        {member.totalPoints} Points
                      </div>

                      <div className="mb-2">
                        <FaBirthdayCake className="text-success me-2" />
                        {new Date(member.birthday).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default MembersPage;