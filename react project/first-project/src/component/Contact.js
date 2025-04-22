import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <h1 className="heading">
          contact<span>us</span>
        </h1>
        <div className="row">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.6154915297507!2d75.56206117560438!3d31.341990474296093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5bfb40d14205%3A0x9315f2a4296f9348!2sWebdox%20Computer%20Institute!5e0!3m2!1sen!2sin!4v1735638671733!5m2!1sen!2sin"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
          ></iframe> */}
          <form>
            <h3>get in touch</h3>
            <div className="inputBox">
              <span className="fas fa-user"></span>
              <input type="text" placeholder="name" />
            </div>

            <div className="inputBox">
              <span className="fas fa-envelope"></span>
              <input type="email" placeholder="email" />
            </div>

            <div className="inputBox">
              <span className="fas fa-phone"></span>
              <input type="number" placeholder="number" />
            </div>
            <input type="submit" value="contact now" className="btn" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
