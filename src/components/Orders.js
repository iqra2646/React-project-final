import React, { useEffect, useState } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch the orders from the API when the component mounts
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:3000/orders');
        if (response.ok) {
          const data = await response.json();
          setOrders(data);
        } else {
          alert('Failed to fetch orders.');
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
        alert('An error occurred while fetching orders.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []); // Empty dependency array means this useEffect runs once after the initial render

  // Function to handle delete operation
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/orders/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Remove the deleted order from the state
        setOrders(orders.filter(order => order.id !== id));
        alert('Do You Really want to delete!');
      } else {
        alert('Failed to delete order.');
      }
    } catch (error) {
      console.error('Error deleting order:', error);
      alert('An error occurred while deleting the order.');
    }
  };

  if (loading) {
    return <p>Loading orders...</p>;
  }

  if (orders.length === 0) {
    return <p>No orders found.</p>;
  }

  return (
    <div className="container mt-4">
      <h2>Orders List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Item Name</th>
            <th>Price</th>
            <th>Your Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th> {/* New column for actions */}
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.itemName}</td>
              <td>{order.itemPrice}</td>
              <td>{order.yourName}</td>
              <td>{order.email}</td>
              <td>{order.address}</td>
              <td>
                <button 
                  className="btn btn-danger" 
                  onClick={() => handleDelete(order.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
