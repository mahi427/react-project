import React from "react";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="box-container">
          <div className="share">
            <a href="#" className="fab fa-facebook"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
            <a href="#" className="fab fa-pinterest"></a>
          </div>
          <div className="footerNav">
            <a href="#">Home</a>
            <a href="#">about us</a>
            <a href="#">menu</a>
            <a href="#">Products</a>
            <a href="#">Review</a>
            <a href="#">Contact</a>
            <a href="#">Blogs</a>
          </div>
          <div className="credit">
            created by<span>mehak_arora</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
