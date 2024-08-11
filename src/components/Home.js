// src/components/Home.js
import React from 'react';
import './Home.css';
import Backgrounds from './Background/Backgrounds'
const Home = () => {
    return (
<div>
    <Backgrounds/>
<div className="home">
            <section className="hero-section text-center">
                <div className="container">
                    <h1>Welcome to ElectroGoods</h1>
                    <p>Your One-Stop Shop for All Electronic Goods</p>
                    <a className="btn btn-primary" href="#products">Shop Now</a>
                </div>
            </section>

            <section className="featured-products">
                <div className="container">
                    <h2 className="text-center my-5">Featured Products</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <img className="card-img-top" src="https://img.freepik.com/free-vector/smartphone-with-blue-background_23-2147695149.jpg?ga=GA1.1.328170918.1722506408&semt=sph" alt="Product 1" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Product 1</h5>
                                    <p className="card-text">High-quality smartphone with the latest features.</p>
                                    <a href="#" className="btn btn-primary">View Details</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <img className="card-img-top" src="https://img.freepik.com/premium-psd/minimalist-laptop-screen-mockup-with-editable-color-background_277819-1346.jpg?ga=GA1.1.328170918.1722506408&semt=sph" alt="Product 2" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Product 2</h5>
                                    <p className="card-text">Top-notch home appliance to make your life easier.</p>
                                    <a href="#" className="btn btn-primary">View Details</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <img className="card-img-top" src="https://img.freepik.com/free-photo/modern-computer-monitor-with-keyboard-mouse-white-background-3d-rendering_1142-51286.jpg?ga=GA1.1.328170918.1722506408&semt=ais_hybrid" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Product 3</h5>
                                    <p className="card-text">Latest gadget with innovative features.</p>
                                    <a href="#" className="btn btn-primary">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-us text-center my-5">
                <div className="container">
                    <h2>About Us</h2>
                    <p>
                        At ElectroGoods, we are committed to providing you with the best electronic products at competitive prices. 
                        Whether you're looking for the latest smartphone, a reliable home appliance, or an innovative gadget, we have it all. 
                        Our team is dedicated to offering exceptional customer service and ensuring a seamless shopping experience.
                    </p>
                </div>
            </section>
        </div>
</div>
    );
}

export default Home;