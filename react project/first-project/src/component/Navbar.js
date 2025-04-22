import React, { useRef } from "react";
import Logo from "../assets/images/logo.png";
import { cart } from "../Data";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const searchRef = useRef();
  const cartRef = useRef();
  const navbarRef = useRef();
  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
    cartRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };

  const cartHandler = () => {
    cartRef.current.classList.toggle("active");
  };

  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
  };

  return (
    <>
      <i className="fa-solid fa-magnifying-glass"></i>
      <header className="header">
        <Link to="#" className="logo">
          <img src={Logo} alt="" />
        </Link>
        <nav className="navbar" ref={navbarRef}>
          <Link to="#home">home</Link>
          <Link to="#about">about</Link>
          <Link to="#products">products</Link>
          <Link to="#review">review</Link>
          <Link to="#contact">contact</Link>
          <Link to="#blog">blog</Link>
        </nav>
        <div className="icons">
          <div className="fas fa-search" onClick={searchHandler}></div>
          <div className="fas fa-shopping-cart" onClick={cartHandler}></div>
          <div
            className="fas fa-bars"
            id="menu-btn"
            onClick={navbarHandler}
          ></div>
        </div>
        <div className="search-form" ref={searchRef}>
          <input type="search" placeholder="search here..." id="search-box" />
          <label htmlFor="search-box " className="fas fa-search"></label>
        </div>
        <div className="cart-items-container " ref={cartRef}>
          {cart.map((item, index) => (
            <div className="cart-item">
              <span className="fas-fa-times"></span>
              <img src={item.img} alt="" />
              <div className="content">
                <h3>cart item 01</h3>
                <div className="price">$15.99</div>
              </div>
            </div>
          ))}
          <Link className="btn" to="#">
            checkout now
          </Link>
        </div>
      </header>
    </>
  );
};
export default Navbar;
