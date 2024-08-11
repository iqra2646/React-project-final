import React from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Desktops = () => {
  const history = useHistory();

  // Array of desktop objects with image path, name, and price
  const desktops = [
    { name: 'ProTech 5000', image: '/images/desktop1.png', price: '$999' },
    { name: 'Elite Workstation X7', image: '/images/desktop2.png', price: '$1099' },
    { name: 'GigaMaster Z', image: '/images/desktop3.png', price: '$1199' },
    { name: 'Velocity Ultra 8', image: '/images/desktop4.png', price: '$1099' },
    { name: 'Quantum Core i9', image: '/images/desktop5.png', price: '$1799' },
    { name: 'AeroPower GX', image: '/images/desktop6.png', price: '$1559' },
    { name: 'GigaMaster XT', image: '/images/desktop7.png', price: '$2219' },
    { name: 'ProTech Xtreme', image: '/images/desktop8.png', price: '$1799' },
    { name: 'EconoPC Basic', image: '/images/desktop9.png', price: '$199' },
    { name: 'BudgetMaster Lite', image: '/images/desktop10.png', price: '$299' },
    { name: 'Velocity Ultra Pro', image: '/images/desktop11.png', price: '$2599' },
    { name: 'Quantum Elite X', image: '/images/desktop12.png', price: '$5678' },
    { name: 'ProTech Basic', image: '/images/desktop13.png', price: '$799' },
    { name: 'GigaMaster Turbo', image: '/images/desktop14.png', price: '$4199' },
    { name: 'Elite Workstation Pro', image: '/images/desktop15.png', price: '$8199' },
    { name: 'Quantum Ultimate', image: '/images/desktop16.png', price: '$9199' },
    { name: 'ProTech Ultimate', image: '/images/desktop17.png', price: '$5199' },
    { name: 'Velocity Compact X', image: '/images/desktop18.png', price: '$3199' },
    { name: 'Quantum Core Pro', image: '/images/desktop19.png', price: '$2199' },
    { name: 'EconoPC Plus', image: '/images/desktop20.png', price: '$1199' }
  ];

  // Function to handle "Buy Now" button click
  const handleBuyNow = (desktop) => {
    history.push('/purchase-form', { name: desktop.name, price: desktop.price });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {desktops.map((desktop, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card">
              <img src={desktop.image} className="card-img-top" alt={desktop.name} />
              <div className="card-body text-center">
                <button className="btn btn-primary me-2 mb-2">{desktop.price}</button>
                <button className="btn btn-success me-2 mb-2" onClick={() => handleBuyNow(desktop)}>Buy Now</button>
                <button className="btn btn-info" disabled>{desktop.name}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Desktops;
