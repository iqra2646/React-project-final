import React from 'react';
import './Philosopy.css'; // Import the CSS file

const Philosophy = () => {
    return (
        <section className="philosophy">
            <header className="philosophy-header">
                <h1>Our Philosophy</h1>
            </header>
            <div className="philosophy-content">
                <p>
                    Our mission is to provide professional consultation, custom design,<br />expert installation, and maintenance of a wide range of home and business technologies.
                </p>
            </div>

            {/* New content section with stacking layout */}
            <div className="stacked-content">
                <div className="content-left">
                    <h2>Why Choose Us</h2>
                    <p>We advise upon and install technology that enhances your lifestyle. Be it audio and visual equipment, security, lighting control, or energy management. Our audio solutions provide the very best experience tailored to your specific environment.</p>
                </div>
                <div className="content-right">
                    <h2>Our Expertise</h2>
                    <p>Every solution we offer combines an array of fields such as Physics, Architecture, Design, Engineering, Electronics, and Art. To that, we add the world’s finest brands of products and back it up with responsive aftersales support.</p>
                </div>
            </div>

            <div className="cards-container1">
                <div className="card1 Elatability">
                    <h3>ELATABILITY</h3>
                    <p>We advise upon and install technology that enhances your lifestyle. Be it audio and visual equipment, security,<br />lighting control, or energy management. Our audio solutions provide the very best experience tailored to your specific environment.</p>   
                </div>
                <div className="card1 Goal">
                    <h4>GOAL-CENTERED</h4>
                    <p>Every goal is unique, and we’re interested in understanding and helping to achieve yours. We combine wisdom and technology, experience and creativity, in order to realize your vision and provide you with the best solutions.</p>
                </div>
                <div className="card1 Simplicity">
                    <h3>SIMPLICITY</h3>
                    <p>Every solution we offer combines an array of fields such as Physics, Architecture, Design, Engineering, Electronics, and Art. To that, we add the world’s finest brands of products and back it up with responsive aftersales support.</p>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
