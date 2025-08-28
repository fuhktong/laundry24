import React from "react";
import { Helmet } from "react-helmet-async";
import FooterContact from "../footer-contact/footer-contact";
import "./about.css";

const About = () => {
  return (
    <section>
      <Helmet>
        <title>Laundry 24 Orlando - Orlando, Florida Laundrymat</title>
        <meta
          name="description"
          content="Laundry 24 Orlando offers coin-operated washers and dryers, wash & fold services, and dry cleaning services in Orlando, FL."
        />
        <meta
          name="keywords"
          content="laundromat, laundry services, Orlando laundry, dry cleaning, wash and fold"
        />
        <meta name="author" content="Laundry 24 Orlando" />
        <meta name="robots" content="index, follow"></meta>
        <meta
          http-equiv="Content-Type"
          content="text/html; charset=utf-8"
        ></meta>
        <meta name="language" content="English"></meta>
        <meta property="og:title" content="Laundry 24 Orlando - About" />
        <meta
          property="og:description"
          content="Laundry 24 Orlando offers coin-operated washers and dryers, wash & fold services, and dry cleaning services in Orlando, FL."
        />
        <meta
          property="og:image"
          content="https://www.laundry24orlando.com/public/advance_coin_laundry_logo_2.png"
        />
        <meta
          property="og:url"
          content="https://www.laundry24orlando.com/about/"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Laundry 24 Orlando - About" />
        <meta
          name="twitter:description"
          content="Laundry 24 Orlando offers coin-operated washers and dryers, wash & fold services, and dry cleaning services in Orlando, FL."
        />
        <meta
          name="twitter:image"
          content="https://www.laundry24orlando.com/public/advance_coin_laundry_logo_2.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <section className="about-mainpic-section about-mainpic">
        <div className="about-mainpic-section-text">
          <h2>About Laundry 24 Orlando</h2>
          <h1>Attendant On-Site | All New Machines | Free Wi-Fi</h1>
          <button onClick={() => (window.location.href = "/contact")}>
            Visit Us
          </button>
        </div>
      </section>
      <div className="about-grid-container">
        <div className="about-section-block-intro">
          <h1>About Us</h1>
          <p>
            Established in 2021, Laundry 24 Orlando offers coin-operated washers
            and dryers, wash & fold services, and dry cleaning services in
            Orlando, FL. Completely renovated and air-conditioned, Laundry 24
            Orlando is the cleanest, coldest laundromat in Orlando! Dry cleaning
            pick-up and drop off is on Tuesdays and Thursdays. Please note that
            last wash is at 8:55 PM daily. Check out our website for complete
            details.
          </p>
        </div>

        {/* 2x2 Grid for the remaining blocks */}
        <div className="about-grid-blocks">
          <div className="about-section-block">
            <h1>Services</h1>
            <p>Dry Cleaning Services</p>
            <p>Wash & Fold Services</p>
            <p>Shoe Repair</p>
            <p>Leather Repair</p>
            <p>Washing Machines</p>
            <p>Dryers</p>
          </div>
          <div className="about-section-block">
            <h1>Specialties</h1>
            <p>Wash & Fold Services</p>
            <p>Off-Site Dry Cleaning</p>
            <p>Off-Site Shoe Repair</p>
            <p>Off-Site Leather Repair</p>
          </div>
          <div className="about-section-block">
            <h1>Payment Types</h1>
            <p>American Express</p>
            <p>Cash</p>
            <p>Discover</p>
            <p>MasterCard</p>
            <p>Visa</p>
          </div>
          <div className="about-section-block">
            <h1>Business Attributes</h1>
            <p>Has restroom unisex</p>
            <p>Has wheelchair accessible entrance</p>
            <p>Has wheelchair accessible seating</p>
            <p>Is transgender safespace</p>
            <p>Welcomes lgbtq</p>
          </div>
        </div>
      </div>
      <FooterContact />
    </section>
  );
};

export default About;
