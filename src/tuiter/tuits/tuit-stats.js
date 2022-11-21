import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();

  const likeHandler = () => {
    const updatedTuit = {
      ...tuit,
      likes: tuit.likes + 1,
    };
    dispatch(updateTuitThunk(updatedTuit));
  };

  const dislikeHandler = () => {
    const updatedTuit = {
      ...tuit,
      dislikes: tuit.dislikes + 1,
    };
    dispatch(updateTuitThunk(updatedTuit));
  };

  return (
    <div className="row mt-2">
      <div className="col-2">
        <i className="bi bi-chat me-2"></i>
        <span className="wd-action-count">{tuit.replies}</span>
      </div>
      <div className="col-2">
        <i className="bi bi-arrow-repeat me-2"></i>
        <span className="wd-action-count">{tuit.retuits}</span>
      </div>
      <div className="col-3">
        <i
          onClick={likeHandler}
          className="bi bi-heart-fill me-2 text-danger"
        ></i>
        <span className="wd-action-count">{tuit.likes}</span>
      </div>
      <div className="col-3">
        <i onClick={dislikeHandler} className="bi bi-hand-thumbs-down"></i>
        <span className="wd-action-count">{tuit.dislikes}</span>
      </div>
      <div className="col-2">
        <i className="bi bi-send me-2"></i>
      </div>
    </div>
  );
};
export default TuitStats;
