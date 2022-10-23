import React from "react";
import postDetails from "./post-details.json";
import PostDetailItem from "./post-detail-item";

const HomeComponent = () => {
  return (
    <>
      <div className="list-group">
        {postDetails.map((post) => (
          <PostDetailItem key={post._id} post={post} />
        ))}
      </div>
    </>
  );
};
export default HomeComponent;
