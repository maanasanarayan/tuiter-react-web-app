import React from "react";

const PostDetailItem = ({
  post = {
    _id: 1,
    profileIcon: "./../images/owner.jpg",
    userName: "Elon Musk",
    handle: "elonmusk",
    time: "23h",
    postContent: {
      title: "Amazing show about @Inspiration4x mission!",
      image: "./../../images/inspiration4.jpg",
      contentTitle:
        "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
      content:
        "From training to launch to landing, this all-access docuseries rides along with the inspiration4 crew on the first all-civilian orbital space ...",
      link: "netflix.com",
    },
    comments: "4.2K",
    retweets: "3.5K",
    likes: "35.5K",
  },
}) => {
  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col-1 p-0">
          <img
            src={post.profileIcon}
            className="rounded-circle"
            height="40px"
            width="40px"
          />
        </div>
        <div className="col-11">
          <div className="wd-author">
            <span>
              {" "}
              <strong>
                {post.userName} <i class="bi bi-patch-check-fill me-2"></i>
              </strong>
            </span>
            <span className="text-secondary">
              @{post.handle} • {post.time}
            </span>
          </div>
          <div className="wd-title">{post.postContent.title}</div>
          <div className="wd-content rounded mt-2">
            <img
              src={post.postContent.image}
              className="border border-secondary w-100 h-100 rounded"
            />

            <div className="wd-image-content p-2">
              <div>{post.postContent.contentTitle}</div>
              <div className="text-secondary">{post.postContent.content}</div>
              <div className="text-secondary">
                <i className="fa-solid fa-link"></i> {post.postContent.link}
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-3">
              <a href="#" className="text-secondary text-decoration-none">
                <i class="bi bi-chat me-2"></i>
                <span className="wd-action-count">{post.comments}</span>
              </a>
            </div>
            <div className="col-3">
              <a href="#" className="text-secondary text-decoration-none">
                <i class="bi bi-arrow-repeat me-2"></i>
                <span className="wd-action-count">{post.retweets}</span>
              </a>
            </div>
            <div className="col-3">
              <a href="#" className="text-secondary text-decoration-none">
                <i class="bi bi-heart me-2"></i>
                <span className="wd-action-count">{post.likes}</span>
              </a>
            </div>
            <div className="col-3">
              <a href="#" className="text-secondary">
                <i class="bi bi-send me-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostDetailItem;
