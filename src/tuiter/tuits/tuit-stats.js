import React from "react";

const TuitStats = ({ post }) => {
  return (
    <div className="row mt-2">
      <div className="col-3">
        <a href="#" className="text-secondary text-decoration-none">
          <i className="bi bi-chat me-2"></i>
          <span className="wd-action-count">{post.replies}</span>
        </a>
      </div>
      <div className="col-3">
        <a href="#" className="text-secondary text-decoration-none">
          <i className="bi bi-arrow-repeat me-2"></i>
          <span className="wd-action-count">{post.retuits}</span>
        </a>
      </div>
      <div className="col-3">
        <a href="#" className="text-secondary text-decoration-none">
          {!post.liked && <i className="bi bi-heart me-2"></i>}
          {post.liked && <i className="bi bi-heart-fill me-2 text-danger"></i>}
          <span className="wd-action-count">{post.likes}</span>
        </a>
      </div>
      <div className="col-3">
        <a href="#" className="text-secondary">
          <i className="bi bi-send me-2"></i>
        </a>
      </div>
    </div>
  );
};
export default TuitStats;
