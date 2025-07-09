import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Cooksy</h1>


      <p className="about-intro">Welcome to Cooksy — where every recipe tells a story!</p>

      <p className="about-text">
        At Cooksy, we believe cooking is more than just a necessity — it’s an art, a passion,
        and a delicious journey that brings people together. Our mission is to build a vibrant
        community of food lovers who share their culinary adventures, secrets, and inspirations.
      </p>

      <h2 className="about-subheading">Our Story</h2>
      <p className="about-text">
        Cooksy was born out of love for food and storytelling. Whether it’s a cherished family
        recipe passed down through generations or a new twist on a traditional dish, every recipe
        has a tale to tell. We created Cooksy to be the perfect platform to share those flavorful journeys.
      </p>

      <h2 className="about-subheading">What We Offer</h2>
      <ul className="about-list">
        <li><strong>Diverse Recipes:</strong> Discover a wide range of dishes from all cultures and cuisines.</li>
        <li><strong>Community Engagement:</strong> Share your favorite recipes and get inspired by others.</li>
        <li><strong>Cooking Tips & Tricks:</strong> Learn new hacks and improve your skills.</li>
        <li><strong>Inspiring Stories:</strong> Read about the passion behind each recipe.</li>
      </ul>

      <h2 className="about-subheading">Join Us</h2>
      <p className="about-text">
        Become a part of the Cooksy community. Share, learn, and celebrate food with others who love
        to cook. Together, we’ll build a rich and flavorful journey filled with passion and creativity.
      </p>

      <p className="about-intro">Let’s cook up some amazing stories — the Cooksy way!</p>
    </div>
  );
};

export default About;
