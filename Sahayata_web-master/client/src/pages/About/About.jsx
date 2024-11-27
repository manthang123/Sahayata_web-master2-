/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";
import { Icon } from "@iconify/react";

const About = () => {
  return (
    <>
      <header className="header" id="home">
        <div className="section__container header__container">
          <div className="header__content">
            <h3 className="section__subheader">Sahayata - A Helping Hand</h3>
            <h1 className="section__header">
              Empowering Communities, One Step at a Time
            </h1>
            <div className="scroll__btn">
              <a href="#about">
                Learn More
                <span>
                  <i className="ri-arrow-down-line"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="header__socials">
            <span>Follow us</span>
            <a href="https://instagram.com/sahayata" target="_blank" rel="noreferrer">
              <Icon icon="bi:instagram" />
            </a>
            <a href="https://twitter.com/sahayata" target="_blank" rel="noreferrer">
              <Icon icon="bi:twitter" />
            </a>
          </div>
        </div>
      </header>
      <section className="about_page">
        <div className="section__container about__container">
          <div className="about__image about__image-1" id="about">
            <img src="images/about1.jpg" alt="Our Mission" />
          </div>
          <div className="about__content about__content-1">
            <h3 className="section__subheader">OUR MISSION</h3>
            <h2 className="section__header">Bridging Gaps, Building Futures</h2>
            <p>
              Sahayata aims to address critical needs by creating a centralized platform for 
              food donations and access to essential services. By connecting donors and 
              recipients, we foster community engagement and ensure efficient delivery of support.
            </p>
          </div>
          <div className="about__image about__image-2" id="services">
            <img src="images/about2.webp" alt="Our Services" />
          </div>
          <div className="about__content about__content-2">
            <h3 className="section__subheader">OUR SERVICES</h3>
            <h2 className="section__header">Comprehensive Support at Your Fingertips</h2>
            <p>
              From food donations and financial aid to healthcare and legal support, our platform 
              simplifies access to resources. Explore our directory of support services and make a 
              difference in your community.
            </p>
          </div>
          <div className="about__image about__image-3" id="events">
            <img src="images/about3.webp" alt="Community Events" />
          </div>
          <div className="about__content about__content-3">
            <h3 className="section__subheader">COMMUNITY EVENTS</h3>
            <h2 className="section__header">Join Our Initiatives</h2>
            <p>
              Participate in impactful events like blood donation drives, cleanliness campaigns, 
              and more. Together, we can create a supportive and sustainable community for all.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
