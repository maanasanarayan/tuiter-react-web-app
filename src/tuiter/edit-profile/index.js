import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateProfile } from "./../reducers/profile-reducer";

const EditProfile = () => {
  const user = useSelector((state) => state.user);

  const [editingBDay, setEditingBDay] = useState(false);
  const [name, setName] = useState(user.firstName + " " + user.lastName);
  const [bio, setBio] = useState(user.bio);
  const [location, setLocation] = useState(user.location);
  const [website, setWebsite] = useState(user.website);
  const [dateOfBirth, setDateOfBirth] = useState(user.dateOfBirth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const saveProfile = () => {
    let fName = name.split(" ")[0];
    let lName = name.split(" ")[1];
    dispatch(
      updateProfile({
        ...user,
        firstName: fName,
        lastName: lName,
        bio: bio,
        location: location,
        website: website,
        dateOfBirth: dateOfBirth,
      })
    );
    navigate("/tuiter/profile");
  };

  return (
    <>
      <div className="row">
        <div className="col-1">
          <Link to="/tuiter/profile">
            <i class="text-dark bi bi-x-lg"></i>
          </Link>
        </div>
        <div className="col-9">
          <strong>Edit profile</strong>
        </div>
        <div className="col-2">
          <button
            className="btn btn-dark rounded-pill py-1 w-100"
            onClick={saveProfile}
          >
            Save
          </button>
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
            style={{ bottom: "-58px" }}
          ></img>
        </div>
      </div>
      <div className="row mt-5 pt-4">
        <form>
          <div className="form-group border border-secondary rounded p-2 mt-2">
            <small>
              <label for="name" className="text-secondary text-small">
                Name
              </label>
            </small>
            <input
              className="form-control border-0 p-0"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group border border-secondary rounded p-2 mt-3">
            <small>
              <label for="bio" className="text-secondary text-small">
                Bio
              </label>
            </small>
            <textarea
              className="form-control border-0 p-0"
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group border border-secondary rounded p-2 mt-3">
            <small>
              <label for="location" className="text-secondary text-small">
                Location
              </label>
            </small>
            <input
              className="form-control border-0 p-0"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="form-group border border-secondary rounded p-2 mt-3">
            <small>
              <label for="website" className="text-secondary text-small">
                Website
              </label>
            </small>
            <input
              className="form-control border-0 p-0"
              id="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          {!editingBDay && (
            <div className="form-group p-2 mt-3">
              <small>
                <label for="birthdate" className="text-secondary text-small">
                  Birth date
                </label>
                <a
                  className="ms-2"
                  onClick={() => {
                    setEditingBDay(true);
                  }}
                >
                  Edit
                </a>
              </small>
              <div>{dateOfBirth}</div>
            </div>
          )}
          {editingBDay && (
            <div className="form-group border border-secondary rounded p-2 mt-3">
              <small>
                <label for="birthdate" className="text-secondary text-small">
                  Birth date
                </label>
              </small>
              <input
                className="form-control border-0 p-0"
                id="birthdate"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default EditProfile;
