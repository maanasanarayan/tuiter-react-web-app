import WhoToFollowListItem from "./WhoToFollowListItem.js";
import whos from "./who.js";

const WhoToFollowList = () => {
  return `
    <ul class="list-group">
    <li class="list-group-item fw-bold">Who to follow</li>
    ${whos.map((who) => WhoToFollowListItem(who)).join("")}
    </ul>
    `;
};

export default WhoToFollowList;
