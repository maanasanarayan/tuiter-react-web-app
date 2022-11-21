import React from "react";
import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";
import { deleteTuitThunk } from "../../services/tuits-thunks";

const TuitItem = ({ post }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };

  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col-1 p-0">
          <img
            src={"../../../images/" + post.image}
            className="rounded-circle"
            height="40px"
            width="40px"
            alt=""
          />
        </div>
        <div className="col-11">
          <i
            className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(post._id)}
          ></i>
          <div className="wd-author">
            <span>
              {" "}
              <strong>
                {post.username}{" "}
                <i class="bi bi-patch-check-fill text-primary me-2"></i>
              </strong>
            </span>
            <span className="text-secondary">
              {post.handle} • {post.time}
            </span>
          </div>
          <div className="wd-image-content">{post.tuit}</div>
          <TuitStats tuit={post} />
        </div>
      </div>
    </div>
  );
};
export default TuitItem;
