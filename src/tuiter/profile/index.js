import React from "react";
import "./index.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileComponent = () => {
  const user = useSelector((state) => {
    console.log("State on PRofile page: " + JSON.stringify(state.user));
    return state.user;
  });

  return (
    <>
      <div className="row">
        <div className="col-1 pt-2">
          <strong>
            <Link to="/tuiter/home">
              <i class="bi bi-arrow-left p-2 text-dark"></i>
            </Link>
          </strong>
        </div>
        <div className="col-11">
          <strong>
            <div className="wd-owner font-weight-bold">
              {user.firstName} {user.lastName}
            </div>
          </strong>
          <div className="text-muted fs-6">{user.tuitCount} Tuits</div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12">
          <img
            className="wd-background-image"
            height="250px"
            src={user.bannerPicture}
            alt=""
          ></img>
        </div>
      </div>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-2 position-relative">
          <img
            src={user.profilePicture}
            className="rounded-circle border border-2 border-light position-absolute wd-profile-image"
            width="120px"
            height="120px"
            alt=""
          ></img>
        </div>
        <div className="col-5"></div>
        <div className="col-3">
          <Link
            to="/tuiter/edit-profile"
            className="btn btn-outline-secondary mt-2 rounded-pill"
          >
            Edit Profile
          </Link>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row p-2 mt-2">
        <strong>
          <div>
            {user.firstName} {user.lastName}
          </div>
        </strong>
        <div className="text-secondary">@{user.handle}</div>
        <div className="mt-2">{user.bio}</div>
      </div>
      <div className="row mt-2 text-secondary">
        <div className="col-4 ps-4">
          <i class="bi bi-geo-alt me-2"></i>
          <span>{user.location}</span>
        </div>
        <div className="col-4">
          <i class="bi bi-balloon me-2"></i>
          <span>Born {user.dateOfBirth}</span>
        </div>
        <div className="col-4 ps-4">
          <i class="bi bi-calendar3 me-2"></i>
          <span>Joined {user.dateJoined}</span>
        </div>
      </div>
      <div className="row mt-2 ps-2">
        <div className="col-3">
          <strong>{user.followingCount}</strong> Following
        </div>
        <div className="col-3">
          <strong>{user.followersCount}</strong> Followers
        </div>
      </div>
    </>
  );
};

export default ProfileComponent;
