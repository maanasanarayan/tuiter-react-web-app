const PostItem = (post) => {
  return `
  <div class="row border-bottom border-secondary p-2">
  <div class="col-1 p-0">
    <img src="${post.profileIcon}" class="rounded-circle" height="40px" width="40px" />
  </div>
  <div class="col-11">
    <div class="wd-author">
      <span class="font-weight-bold"> ${post.userName}</span>
      <span class="text-secondary">@${post.handle} • ${post.time}</span>
    </div>
    <div class="wd-title">${post.postContent.title}</div>
    <div class="wd-content border border-secondary rounded mt-2">
      <img
        src="${post.postContent.image}"
        class="border border-secondary w-100 h-100 rounded-top"
      />

      <div class="wd-image-content p-2">
        <div>${post.postContent.contentTitle}</div>
        <div class="text-secondary">
        ${post.postContent.content}
        </div>
        <div class="text-secondary">
          <i class="fa-solid fa-link"></i>  ${post.postContent.link}
        </div>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-3">
        <a href="#" class="text-secondary text-decoration-none"
          ><i class="fa-regular fa-comment"></i>
          <span class="wd-action-count">${post.comments}</span></a
        >
      </div>
      <div class="col-3">
        <a href="#" class="text-secondary text-decoration-none"
          ><i class="fa-solid fa-retweet"></i>
          <span class="wd-action-count">${post.retweets}</span></a
        >
      </div>
      <div class="col-3">
        <a href="#" class="text-secondary text-decoration-none">
          <i class="fa-regular fa-heart"></i>
          <span class="wd-action-count">${post.likes}</span>
        </a>
      </div>
      <div class="col-3">
        <a href="#" class="text-secondary"
          ><i class="fa-sharp fa-solid fa-share-from-square"></i>
        </a>
      </div>
    </div>
  </div>
</div>

    `;
};

export default PostItem;
