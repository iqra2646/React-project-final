import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav>
            <img 
                src="https://cdn-icons-png.freepik.com/256/1976/1976515.png?ga=GA1.1.328170918.1722506408&semt=ais_hybrid"
                className="nav-logo" 
                alt="img" 
            />
            <h3 className="logo-text">ElectroGoods</h3>
            <div className="nav-items">
                <NavLink exact to="/" className="nav-links" activeClassName="active">
                    Home
                </NavLink>
                <NavLink exact to="/about" className="nav-links" activeClassName="active">
                    About
                </NavLink>
                <NavLink exact to="/contact" className="nav-links" activeClassName="active">
                    Contact
                </NavLink>
                <NavLink exact to="/products" className="nav-links" activeClassName="active">
                    Products
                </NavLink>
                <NavLink exact to="/users" className="nav-links" activeClassName="active">
                    Users
                </NavLink>
                <NavLink exact to="/laptops" className="nav-links" activeClassName="active">
                    Laptops
                </NavLink>
                <NavLink exact to="/desktops" className="nav-links" activeClassName="active">
                    Desktops
                </NavLink>
                <NavLink exact to="/phones" className="nav-links" activeClassName="active">
                    Phones
                </NavLink>
                <NavLink exact to="/orders" className="nav-links" activeClassName="active">
                    Orders
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
