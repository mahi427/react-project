import React from "react";
import { review } from "../Data";
import qouteImage from "../assets/images/qoute-Image.jpeg";
const Review = () => {
  return (
    <section className="review" id="review">
      <h1 className="heading">
        cutomer's <span>Review</span>
      </h1>
      <div className="box-container">
        {review.map((item, index) => (
          <div className="box">
            <img src={qouteImage} alt="" className="qoute" />
            <p>
              egfvegwgfvejfggeyhfvhavfgyewjfygewyfef ufwttwugkfmvwefgwefwiyrk
              hjwvvywefyiggfyiwfufhwhUVGIUyeke vhjergyviegvbhjwvghw vygvbhwejbwe
              gfwevfgwhecweygvhwejuwk
              vfeywyfhvWJFKYIwkhbfkwjFFJERFUVJGGEUJVGFUEJ
            </p>
            <img src={item.img} alt="" className="user" />
            <h3>rahul goenka</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
