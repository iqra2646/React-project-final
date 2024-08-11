import React from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Laptops = () => {
  const history = useHistory();

  // Array of laptop objects with image path and price
  const laptops = [
    { name: 'Dell XPS 13 laptop', image: '/images/laptop1.png', price: '$899' },
    { name: 'MacBook Air laptop', image: '/images/laptop2.png', price: '$799' },
    { name: 'HP Spectre x360 laptop', image: '/images/laptop3.png', price: '$999' },
    { name: 'Lenovo ThinkPad X1', image: '/images/laptop4.png', price: '$1099' },
    { name: 'Asus ZenBook 14', image: '/images/laptop5.png', price: '$1199' },
    { name: 'Acer Swift 3', image: '/images/laptop6.png', price: '$1299' },
    { name: 'Microsoft Surface Laptop 4', image: '/images/laptop7.png', price: '$699' },
    { name: 'Razer Blade 15', image: '/images/laptop8.png', price: '$1399' },
    { name: 'Samsung Galaxy Book Pro', image: '/images/laptop9.png', price: '$1499' },
    { name: 'LG Gram 16', image: '/images/laptop10.png', price: '$1599' },
    { name: 'Alienware m15', image: '/images/laptop11.png', price: '$1699' },
    { name: 'Huawei MateBook X Pro', image: '/images/laptop12.png', price: '$1799' },
    { name: 'MSI GS66 Stealth', image: '/images/laptop13.png', price: '$1899' },
    { name: 'Gigabyte Aero 15', image: '/images/laptop14.png', price: '$1999' },
    { name: 'Asus ROG Zephyrus G14', image: '/images/laptop15.png', price: '$2099' },
    { name: 'Apple MacBook Pro', image: '/images/laptop16.png', price: '$2199' },
    { name: 'Dell G5 15', image: '/images/laptop17.png', price: '$2299' },
    { name: 'HP Envy 13', image: '/images/laptop18.png', price: '$2399' }
  ];

  // Function to handle "Buy Now" button click
  const handleBuyNow = (laptop) => {
    history.push('/purchase-form', { name: laptop.name, price: laptop.price });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {laptops.map((laptop, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card">
              <img src={laptop.image} className="card-img-top" alt={laptop.name} />
              <div className="card-body text-center">
                <h5 className="card-title">{laptop.name} </h5>
                <button className="btn btn-primary me-2 mb-2">{laptop.price}</button>
                <button className="btn btn-success" onClick={() => handleBuyNow(laptop)}>Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Laptops;
