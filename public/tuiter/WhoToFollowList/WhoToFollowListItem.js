const WhoToFollowListItem = (who) => {
  return `
    <li class="list-group-item">
    <div class="row">
      <div class="col-2 p-0">
        <img
          src="${who.avatarIcon}"
          class="mt-2 rounded-circle"
          width="50px"
        />
      </div>
      <div class="col-6">
        <div class="fw-bold text-nowrap">
        ${who.userName} <i class="fas fa-check-circle"></i>
        </div>
        <div class="text-secondary">@${who.handle}</div>
      </div>
      <div class="col-4">
        <button class="btn btn-primary rounded-pill w-100 mt-2">
          Follow
        </button>
      </div>
    </div>
  </li>
    `;
};

export default WhoToFollowListItem;
