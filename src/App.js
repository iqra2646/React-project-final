import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Users from './components/Users';
import Footer from './components/Footer';
import Products from './components/Products';
import Laptops from './components/Laptops';
import PurchaseForm from './components/PurchaseForm'; // Import the new component
import Desktops from './components/Desktops';
import Phones from './components/Phones';
import Orders from './components/Orders'; // Import the Orders component

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/laptops" component={Laptops} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/purchase-form" component={PurchaseForm} />
          <Route exact path="/desktops" component={Desktops} />
          <Route exact path="/phones" component={Phones} />
          <Route exact path="/orders" component={Orders} /> {/* Add the route for the Orders component */}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
