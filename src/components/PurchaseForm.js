import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const PurchaseForm = () => {
  const location = useLocation();
  const history = useHistory();
  const { name, price } = location.state || {};

  // State to manage form input values
  const [formData, setFormData] = useState({
    yourName: '',
    email: '',
    address: ''
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/ContactData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          itemName: name,
          itemPrice: price,
          ...formData
        }),
      });

      if (response.ok) {
        alert('Order placed successfully!');
        history.push('/');
      } else {
        const errorData = await response.json();
        alert(`Failed to place order: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('An error occurred while placing the order.');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Purchase Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Laptop/Phone Name</label>
          <input type="text" className="form-control" value={name} readOnly />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input type="text" className="form-control" value={price} readOnly />
        </div>
        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input
            type="text"
            className="form-control"
            name="yourName"
            value={formData.yourName}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <textarea
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success">Complete Purchase</button>
      </form>
    </div>
  );
};

export default PurchaseForm;
