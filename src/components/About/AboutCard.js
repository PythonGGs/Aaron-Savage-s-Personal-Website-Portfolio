import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aaron Savage </span>
            from <span className="purple"> Dallas Gerogia.</span>
            <br />
            I am currently a Marketing Manager. 
            <br />
              I have over 100 million views of generated from my Management! 
            <br />
            <br />
             Apart from Managing , some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Fortnite
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching TV
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books related to Business
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to help people and make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Savage</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
