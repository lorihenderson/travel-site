import React from 'react';
// import { Link } from 'react-router-dom';
import { slide as Menu } from "react-burger-menu";

export default function Navbar() {
  // const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <Menu>
      <a className="menu-item" href="/"> Home </a>
      <a className="menu-item" href="/currencyconverter"> Currency Converter </a>
      <a className="menu-item" href="/attractions"> Attractions </a>
      <a className="menu-item" href="/bookings"> Bookings </a>
      <a className="menu-item" href="/weather"> Weather </a>
      {/* <a className="menu-item" href="/foodanddrink"> Food and Drink </a> */}
    </Menu>
    // <nav className="navbar">
    //   <h1> Welcome to the navbar </h1>
    //   <div className="links">
    //     <Link to="/"> Home </Link>
    //     <Link to="/currencyconverter"> Currency Converter </Link>
    //     <Link to="/attractions"> Attractions </Link>
    //     <Link to="/bookings"> Bookings </Link>
    //     <Link to="/weather"> Weather </Link>
    //   </div>
    // </nav>
  )
};
