const PostSummaryItem = (post) => {
  return `
  <li class="list-group-item">
    <div class="me-0 ms-0 p-2 row">
              <div class="col-9 ps-0">
                <div class="text-secondary">${post.topic}</div>
                <div class="fw-bold">
                  ${post.userName} <i class="fas fa-check-circle"></i
                  ><span class="fw-normal text-secondary"> - ${post.time}</span>
                </div>
                <div class="fw-bold">
                  ${post.title}
                </div>
              </div>
              <div class="col-3">
                <img
                  src="${post.image}"
                  width="100px"
                  height="100px"
                  alt="React JS"
                  class="float-end mt-2 rounded-3"
                />
              </div>
            </div>
            </li>
    `;
};

export default PostSummaryItem;
