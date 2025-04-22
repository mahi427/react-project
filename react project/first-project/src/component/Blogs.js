import React from "react";
import { blog } from "../Data";
const Blogs = () => {
  return (
    <>
      <section className="blogs" id="blogs">
        <h1 className="heading">
          our <span>blogs</span>
        </h1>
        <div className="box-container">
          {blog.map((item, index) => (
            <div className="box" key={index}>
              <div className="image">
                <img src={item.img} alt="" />
              </div>
              <div className="content">
                <a href="#" className="title">
                  tasty and refreshing spices
                </a>
                <span>by mahi / 31st dec, 2024</span>
                <p>hjvbwjhbfhwjefbjWFEUIWFHNWKJ</p>
                <a href="#" className="btn">
                  read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blogs;
