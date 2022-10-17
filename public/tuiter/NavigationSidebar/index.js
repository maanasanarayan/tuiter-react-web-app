const NavigationSidebar = (active) => {
  let home = "",
    explore = "",
    notifications = "",
    messages = "",
    bookmarks = "",
    lists = "",
    profile = "",
    more = "";
  if (active == "home") home = "active";
  else if (active == "explore") explore = "active";
  else if (active == "notifications") notifications = "active";
  else if (active == "messages") messages = "active";
  else if (active == "bookmarks") bookmarks = "active";
  else if (active == "lists") lists = "active";
  else if (active == "profile") profile = "active";
  else if (active == "more") more = "active";

  return `
      <div class="list-group">
        <a class="list-group-item" href="/">
          <i class="fab fa-twitter"></i></a>
          <a
              href="./../HomeScreen/index.html"
              class="wd-home list-group-item list-group-item-action ${home}"
            >
              <i class="fas fa-home"></i
              ><span class="d-xl-inline d-lg-none d-md-none d-sm-none d-xs-none">
                Home</span
              ></a
            >
            <a
              href="./../explore/index.html"
              class="wd-explore list-group-item list-group-item-action ${explore}"
            >
              <i class="fas fa-hashtag"></i
              ><span class="d-xl-inline d-lg-none d-md-none d-sm-none">
                Explore</span
              ></a
            >
            <a
              href="./../notifications.html"
              class="wd-notifications list-group-item list-group-item-action"
            >
              <i class="fas fa-bell"></i
              ><span class="d-xl-inline d-lg-none d-md-none d-sm-none">
                Notifications</span
              ></a
            >
            <a
              href="./../messages.html"
              class="wd-messages list-group-item list-group-item-action"
            >
              <i class="fas fa-envelope"></i
              ><span class="d-xl-inline d-lg-none d-md-none d-sm-none">
                Messages</span
              ></a
            >
            <a
              href="./../bookmarks/index.html"
              class="wd-bookmarks list-group-item list-group-item-action"
              ><i class="fas fa-bookmark"></i
              ><span class="d-xl-inline d-lg-none d-md-none d-sm-none">
                Bookmarks</span
              ></a
            >
            <a
              href="./../lists.html"
              class="wd-lists list-group-item list-group-item-action"
              ><i class="fas fa-list"></i
              ><span class="d-xl-inline d-lg-none d-md-none d-sm-none">
                Lists</span
              ></a
            >
            <a
              href="./../profile.html"
              class="wd-profile list-group-item list-group-item-action"
              ><i class="fas fa-user"></i
              ><span class="d-xl-inline d-lg-none d-md-none d-sm-none">
                Profile</span
              ></a
            >
            <a
              href="./../more.html"
              class="wd-more list-group-item list-group-item-action"
            >
              <span class="position-relative"
                ><i class="fas fa-circle"></i
                ><i
                  class="fas fa-ellipsis-h position-absolute wd-more-icon text-black"
                ></i
              ></span>
              <span class="d-xl-inline d-lg-none d-md-none d-sm-none">
                More</span
              ></a
            >
      </div>
      <div class="d-grid mt-2">
        <a href="tweet.html"
           class="btn btn-primary btn-block rounded-pill">
           Tweet</a>
      </div>
    `;
};
export default NavigationSidebar;
