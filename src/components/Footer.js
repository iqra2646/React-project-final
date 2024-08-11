import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-2"> {/* Increased padding top */}
      <div className="container larger-container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              We provide delicious and freshly baked treats. Our mission is to bring joy to your taste buds with our delightful offerings.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://facebook.com" className="text-light">
                  <i className="fab fa-facebook fa-2x"></i> Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="text-light">
                  <i className="fab fa-twitter fa-2x"></i> Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="text-light">
                  <i className="fab fa-instagram fa-2x"></i> Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-map-marker-alt"></i> Nairobi, South C Amana Estate
              </li>
              <li>
                <i className="fas fa-phone"></i> +254 726465747
              </li>
              <li>
                <i className="fas fa-envelope"></i> info@ElectroGoods
              </li>
              <li>
                <i className="fas fa-envelope"></i> iqralul9@gamil.come
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center pt-3">
        <small>&copy; 2024 ElectroGoods All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
