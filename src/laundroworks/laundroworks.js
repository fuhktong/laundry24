import React from "react";
import "./laundroworks.css";
import { Helmet } from "react-helmet-async";
import FooterContact from "../footer-contact/footer-contact";

const Laundroworks = () => (
  <section>
    <Helmet>
      <title>Advance Coin Laundry - Orlando, Florida Laundrymat</title>
      <meta
        name="description"
        content="Advance Coin Laundry offers coin-operated washers and dryers, wash & fold services, and dry cleaning services in Orlando, FL."
      />
      <meta
        name="keywords"
        content="electoral college, presidential elections, american politics, electors, electoral votes, president, constitution, convention, electors convention"
      />
      <meta name="author" content="Advance Coin Laundry" />
      <meta name="robots" content="index, follow"></meta>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
      <meta name="language" content="English"></meta>
      <meta property="og:title" content="Advance Coin Laundry - About" />
      <meta
        property="og:description"
        content="Advance Coin Laundry offers coin-operated washers and dryers, wash & fold services, and dry cleaning services in Orlando, FL."
      />
      <meta
        property="og:image"
        content="https://www.advancecoinlaundry.com/public/advance_coin_laundry_logo_2.png"
      />
      <meta
        property="og:url"
        content="https://www.advancecoinlaundry.com/about/"
      />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content="Advance Coin Laundry - About" />
      <meta
        name="twitter:description"
        content="Advance Coin Laundry offers coin-operated washers and dryers, wash & fold services, and dry cleaning services in Orlando, FL."
      />
      <meta
        name="twitter:image"
        content="https://www.advancecoinlaundry.com/public/advance_coin_laundry_logo_2.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
    <section className="laundroworks-mainpic-section laundroworks-pic">
      <div className="laundroworks-mainpic-section-text">
        <h2>Laundroworks</h2>
        <button onClick={() => (window.location.href = "/contact")}>
          Visit Us
        </button>
      </div>
    </section>
    <div className="laundroworks-text-section">
      <div className="laundroworks-text-section-layer">
        <h1>LaundroWorks Digital Self-Service System</h1>
        <p>
          LaundroWorks offers a modern, self-operated laundry experience that
          puts you in control. As a customer using our digital self-service
          system, you'll enjoy:
        </p>
        <div className="laundroworks-feature-section">
          <h2>Easy Machine Access</h2>
          <ul>
            <li>Unlock any washer or dryer with your smartphone app</li>
            <li>Select machines based on size and availability</li>
            <li>View real-time status of all machines</li>
          </ul>
        </div>
        <div className="laundroworks-feature-section">
          <h2>Digital Payment Convenience</h2>
          <ul>
            <li>Pay directly through the app - no coins or cards needed</li>
            <li>Save payment methods for quick transactions</li>
            <li>Receive digital receipts automatically</li>
          </ul>
        </div>
      </div>
      <div className="laundroworks-img">
        <a href="https://laundroworks.com/">
          <img src="./laundroworksimg.png" alt="Laundroworks" />
        </a>
      </div>
      <div className="laundroworks-text-section-layer">
        <div className="laundroworks-feature-section">
          <h2>Custom Cycle Controls</h2>
          <ul>
            <li>Select specific wash temperatures and cycle types</li>
            <li>Customize drying time and heat settings</li>
            <li>Add extra rinse or spin options as needed</li>
          </ul>
        </div>
        <div className="laundroworks-feature-section">
          <h2>Smart Notifications</h2>
          <ul>
            <li>Receive alerts when your cycle is complete</li>
            <li>Get reminders if laundry is left unattended</li>
            <li>
              Receive maintenance updates if a machine becomes unavailable
            </li>
          </ul>
        </div>
        <div className="laundroworks-feature-section">
          <h2>Time-Saving Features</h2>
          <ul>
            <li>Check machine availability remotely before arriving</li>
            <li>Reserve machines up to 15 minutes in advance</li>
            <li>Monitor remaining cycle time from anywhere</li>
          </ul>
        </div>
        <p className="laundroworks-closing">
          LaundroWorks' digital self-service system eliminates the hassles of
          traditional laundromats while giving you full control over your
          laundry experience.
        </p>
      </div>
    </div>
    <FooterContact />
  </section>
);

export default Laundroworks;
