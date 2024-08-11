import React from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Phones = () => {
  const history = useHistory(); // If using React Router v6, replace with useNavigate

  // Array of phone objects with image path, name, and price
  const phones = [
    { name: 'iPhone 14', image: '/images/phone1.png', price: '$999' },
    { name: 'Samsung Galaxy S23', image: '/images/phone2.png', price: '$899' },
    { name: 'Google Pixel 7', image: '/images/phone3.png', price: '$799' },
    { name: 'OnePlus 11', image: '/images/phone4.png', price: '$749' },
    { name: 'Sony Xperia 1 IV', image: '/images/phone5.png', price: '$1,299' },
    { name: 'Xiaomi Mi 13', image: '/images/phone6.png', price: '$849' },
    { name: 'Oppo Find X5', image: '/images/phone7.png', price: '$1,099' },
    { name: 'Huawei P60 Pro', image: '/images/phone8.png', price: '$1,199' },
    { name: 'Nokia G22', image: '/images/phone9.png', price: '$299' },
    { name: 'Realme GT 2', image: '/images/phone10.png', price: '$699' },
    { name: 'Motorola Edge 40', image: '/images/phone11.png', price: '$899' },
    { name: 'Asus ROG Phone 6', image: '/images/phone12.png', price: '$1,299' },
    { name: 'Apple iPhone SE (2024)', image: '/images/phone13.png', price: '$429' },
    { name: 'Samsung Galaxy A54', image: '/images/phone14.png', price: '$499' },
    { name: 'Google Pixel 6a', image: '/images/phone15.png', price: '$449' },
    { name: 'OnePlus Nord 2T', image: '/images/phone16.png', price: '$399' },
    { name: 'Sony Xperia 10 IV', image: '/images/phone17.png', price: '$399' },
    { name: 'Xiaomi Redmi Note 12', image: '/images/phone18.png', price: '$329' },
    { name: 'Oppo Reno 8 Pro', image: '/images/phone19.png', price: '$699' },
    { name: 'Huawei Nova 10', image: '/images/phone20.png', price: '$799' }
  ];

  // Function to handle "Buy Now" button click
  const handleBuyNow = (phone) => {
    history.push('/purchase-form', { name: phone.name, price: phone.price });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {phones.map((phone, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card">
              <img src={phone.image} className="card-img-top" alt={phone.name} />
              <div className="card-body text-center">
                <button className="btn btn-primary me-2 mb-2">{phone.price}</button>
                <button className="btn btn-success me-2 mb-2" onClick={() => handleBuyNow(phone)}>Buy Now</button>
                <button className="btn btn-info" disabled>{phone.name}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Phones;
