import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PromotionImage from "../../assets/promotion/pro.png" 

const Section4 = () => {
  return (
    <>
      <section className='promotion_section'>
        <Container>
          <Row className="align-item-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} alt="Promotion" className='img-fluid' />
            </Col>
            <Col lg={6} className="px-5">
              <h2>NOTHING BRINGS PEOPLE TOGETHER LIKE A GOOD BURGER</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.explicabo eligendi? Quia, explicabo</p>
              <ul>
                <li>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.explicabo eligendi? Quia, explicabo</p>
                </li>
                <li>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.explicabo eligendi? Quia, explicabo</p>
                </li>
                <li>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.explicabo eligendi? Quia, explicabo</p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}
      <section className="bg_parallax_scroll"></section>
    </>
  )
}

export default Section4