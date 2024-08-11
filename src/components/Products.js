import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import laptop from './images/laptop.png';
import phone from './images/phone.png';
import desktop from './images/desktop.png';

function Products() {
  return (
    <section id="products">
      <h2>Our Products</h2>
      <div className="product-list">
        <div className="product">
          <img src={laptop} alt="Laptop" />
          <h3><Link to="/laptops">View details</Link></h3> {/* Link to Laptops component */}
          <p>Starting from KES 30,000</p>
        </div>
        <div className="product">
          <img src={phone} alt="Phone" />
          <h3><Link to="/phones">View details</Link></h3> {/* Link to Phones component */}
          <p>Starting from KES 10,000</p>
        </div>
        <div className="product">
          <img src={desktop} alt="Desktop" />
          <h3><Link to="/desktops">View details</Link></h3> {/* Link to Desktops component */}
          <p>Starting from KES 25,000</p>
        </div>
      </div>
    </section>
  );
}

export default Products;
