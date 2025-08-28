import React from "react";
import { Helmet } from "react-helmet-async";
import CarouselComponent from "./carouselcomponent.js";
import FooterContact from "../footer-contact/footer-contact";
import "./home.css";

const HomePage = () => {
  return (
    <div>
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
      <section className="home-mainpic-section home-homepic">
        <div className="home-mainpic-section-text">
          <h2>Laundry 24 Orlando</h2>
          <h1>
            Laundromat in Orlando, FL
            <br />
            Attendant On-Site | All New Machines | Free Wi-Fi
          </h1>
          <button
            className="mainpic-button"
            onClick={() => (window.location.href = "/contact")}
          >
            Visit Us
          </button>
        </div>
      </section>
      <div
        className="text-section"
        style={{ paddingTop: "50px", paddingBottom: "50px" }}
      >
        <div className="text-section-layer">
          <h1>Do Your Laundry in a Clean & Air Conditioned Environment</h1>
          <p>
            Are you looking for a better laundromat experience? Visit Laundry 24
            Orlando for just that! Our facility has been completely renovated
            with brand-new washers and dryers. And best of all, we're open 24
            hours, 365 days a year!
          </p>
          <p>
            Need dry cleaning or in a hurry? Our sister location{" "}
            <a
              href="https://www.advancecoinlaundry.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Advance Coin Laundry
            </a>{" "}
            which is a short{" "}
            <a
              href="https://maps.app.goo.gl/ZbVBtn4WZiwkKwVy7"
              target="_blank"
              rel="noopener noreferrer"
            >
              1.4 miles east of us
            </a>{" "}
            and offers convenient same-day, next-day, and standard wash-and-fold
            services to fit your schedule. Take advantage of our dry & fold
            option if you prefer to do your own washing but want to skip the
            drying and folding. We also provide pressing services and a customer
            loyalty program for our regular guests. Friendly, on-site attendants
            are always available to assist with anything you need—just ask!
          </p>
        </div>
      </div>
      <div>
        <CarouselComponent />
      </div>

      <div className="laundroworks-text-section home-laundroworks">
        <div className="laundroworks-text-section-layer">
          <div className="home-laundroworks-layer">
            <div>
              <div className="laundroworks-text-section">
                <a
                  href="https://laundroworks.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="home-laundroworks-img"
                    src="./laundroworksimg.png"
                    alt="Laundroworks"
                  />
                </a>
              </div>
            </div>
            <div>
              <div className="laundroworks-text-section">
                <h1>Laundroworks</h1>
                <p>
                  The Laundroworks app provides laundromat customers with
                  real-time machine availability, mobile payments, cycle
                  monitoring, and a loyalty program to enhance the overall
                  laundry experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <FooterContact />
      </div>
    </div>
  );
};

export default HomePage;
