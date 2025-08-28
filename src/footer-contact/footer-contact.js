import React from "react";
import "./footer-contact.css";
import styled from "styled-components";

const StyledLink = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;

const FooterContact = () => (
  <div className="footer-contact-section">
    <div className="text-contact-info">
      <h1>Hours</h1>
      <p>Laundry 24 Orlando is open</p>
      <p>24 hours a day,</p>
      <p>365 days a year</p>
    </div>
    <div className="text-contact-info">
      <h1>Visit Us</h1>
      <p>
        <StyledLink
          href="https://maps.app.goo.gl/PXH87qQesxWAWqbKA"
          target="_blank"
          rel="noreferrer"
        >
          4528 Hoffner Ave
          <br></br>Orlando, FL 32812
        </StyledLink>
      </p>
      <p>Behind the Library on Hoffner Avenue.</p>
      <p>
        Enter "Laundry 24 Orlando" into Waze or Google Maps to search for our
        location
      </p>
    </div>
    <div className="text-contact-info">
      <h1>Contact Us</h1>
      <p>
        <StyledLink href="tel:+14072379531">(407) 237-9531</StyledLink>
      </p>
      <p>
        <StyledLink href="mailto:advancecoin47@gmail.com">
          advancecoin47@gmail.com
        </StyledLink>
      </p>
    </div>
  </div>
);

export default FooterContact;
