import React from "react";
import ContactForm from "./contactform.js";
import AdvanceMap from "./advancemap.js";
import { Helmet } from "react-helmet-async";
import FooterContact from "../footer-contact/footer-contact.js";
import "./contactform.css";

const Contact = () => {
  return (
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
        <meta
          http-equiv="Content-Type"
          content="text/html; charset=utf-8"
        ></meta>
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
      <ContactForm />
      <AdvanceMap />
      <FooterContact />
    </section>
  );
};

export default Contact;
