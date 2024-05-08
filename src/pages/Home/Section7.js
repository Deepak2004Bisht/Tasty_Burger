import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Section7 = () => {
  return (
    <>
    <section className="contact_section">
        <Container>
            <Row className="justify-content-center">
                <Col sm={8} className="text-center">
                    <h4>WE GUARANTEE</h4>
                    <h2>30 MINUTES DELIVERY</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.explicabo eligendi? Quia, explicabo</p>
                    <Link to="/" className='btn btn-red px-4 py-2 rounded-0'>
                        Call : 999-888-777
                    </Link>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  );
}

export default Section7;
