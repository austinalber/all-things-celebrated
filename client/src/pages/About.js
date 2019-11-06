import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import { Link } from 'react-router-dom';
// import API from "../utils/API";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://www.iconspng.com/images/contour-map/contour-map.jpg">
        <h1 style={{ color:'#FFD402', fontWeight: '700', letterSpacing: '1.25px', marginTop: '55px'}}>Korgi</h1>
        <h2>Though she be but little, she is fearless</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
            Kor·gi - the word orginates from Wales, 
            a mystical land of foggy rolling hills and castles.

            In their Welsh language, it means little dog. 
            A breed attributed for their warmth, cleverness, and curosity. 

            Like the dog, this application is based on those same quirks. 
            We serve as a platform for little humans and the one inside all of us to express our own individuality
            without the need of words, but with objects. So bring your dog or borrow one and lets explore together. 
            Remember, it’s less of what we see but more of how we see things. 
            </p>

            <Link to="/signup">
              <button className="join" style={{ flex: "flex-grow" }} type="button">Join</button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;

// initial