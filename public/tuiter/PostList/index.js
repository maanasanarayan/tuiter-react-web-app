import PostItem from "./PostItem.js";
import posts from "./posts.js";

const PostList = () => {
  return `
        <div>
        ${posts.map((post) => PostItem(post)).join("")}        
        </div>
    `;
};

export default PostList;
