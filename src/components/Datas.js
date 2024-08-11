// Data.js
import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const Data = () => {
  const location = useLocation();
  const history = useHistory();
  const { name, price } = location.state || {};

  useEffect(() => {
    const postData = async () => {
      try {
        const response = await fetch('http://localhost:3000/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, price }),
        });

        if (response.ok) {
          console.log('Order placed successfully!');
          // Redirect to a success page or handle success logic
          history.push('/order-success');
        } else {
          console.error('Failed to place the order');
          // Handle error logic
        }
      } catch (error) {
        console.error('Error:', error);
        // Handle error logic
      }
    };

    if (name && price) {
      postData();
    }
  }, [name, price, history]);

  return null; // This component does not need to render anything
};

export default Data;
