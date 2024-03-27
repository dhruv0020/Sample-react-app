import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Footer.css';

const FooterComponent = () => {
  return (
    <footer className="footer-container">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Delhi-110012 , India </p>
            <p>Email: sample@gmail.com</p>
            <p>Phone: +01 234 567 88</p>
          </Col>
          <Col md={4}>
            <h5>Social Media</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.facebook.com/" style={{ textDecoration: 'none' }}>
                  <img
                    src="images/fb_logo.png"
                    height="30"
                    width="30"
                    className="align-top"
                  /> Facebook
                </a>
              </li>
              &nbsp;
              <li>
                <a href="https://www.instagram.com/" style={{ textDecoration: 'none' }}>
                  <img
                    src="images/insta_logo.png"
                    height="30"
                    width="30"
                    className="align-top"
                  /> Instagram
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
