import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const paths = pathname.split("/");
  const active = paths[2];
  return (
    <div>
      <div className="list-group">
        <a className="list-group-item">
          <i class="bi bi-twitter"></i>
        </a>
        <Link
          to="/tuiter/home"
          className={`list-group-item ${active === "home" ? "active" : ""}`}
        >
          <i class="bi bi-house-door-fill me-2"></i>
          Home
        </Link>
        <Link
          to="/tuiter/explore"
          className={`list-group-item ${active === "explore" ? "active" : ""}`}
        >
          <i class="bi bi-hash me-2"></i>
          Explore
        </Link>
        <Link
          to="/tuiter/home"
          className={`list-group-item ${
            active === "notifications" ? "active" : ""
          }`}
        >
          <i class="bi bi-bell-fill me-2"></i>
          Notifications
        </Link>
        <Link
          to="/tuiter/home"
          className={`list-group-item ${active === "messages" ? "active" : ""}`}
        >
          <i class="bi bi-envelope-fill me-2"></i>
          Messages
        </Link>
        <Link
          to="/tuiter/home"
          className={`list-group-item ${
            active === "bookmarks" ? "active" : ""
          }`}
        >
          <i class="bi bi-bookmark-fill me-2"></i>
          Bookmarks
        </Link>
        <Link
          to="/tuiter/home"
          className={`list-group-item ${active === "lists" ? "active" : ""}`}
        >
          <i class="bi bi-list-ul me-2"></i>
          Lists
        </Link>
        <Link
          to="/tuiter/profile"
          className={`list-group-item ${active === "profile" ? "active" : ""}`}
        >
          <i class="bi bi-person-fill me-2"></i>
          Profile
        </Link>
        <Link
          to="/tuiter/home"
          className={`list-group-item ${active === "more" ? "active" : ""}`}
        >
          <i class="bi bi-three-dots me-2"></i>
          More
        </Link>
        <Link to="/" className="list-group-item">
          <i class="bi bi-book-half me-2"></i>
          Labs
        </Link>
      </div>
      <div class="d-grid mt-2">
        <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">
          Tuit
        </a>
      </div>
    </div>
  );
};
export default NavigationSidebar;
