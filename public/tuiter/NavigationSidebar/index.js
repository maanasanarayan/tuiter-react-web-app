const NavigationSidebar = () => {
  return `
      <div class="list-group">
        <a class="list-group-item" href="/">
          <i class="fab fa-twitter"></i></a>
          <a
              href="./../home.html"
              class="list-group-item list-group-item-action"
            >
              <i class="fas fa-home"></i
              ><span class="d-xl-inline d-lg-none d-md-none d-sm-none d-xs-none">
                Home</span
              ></a
            >
            <a
              href="./../explore/index.html"
              class="list-group-item list-group-item-action active"
            >
              <i class="fas fa-hashtag"></i
              ><span class="d-xl-inline d-lg-none d-md-none d-sm-none">
                Explore</span
              ></a
            >
            <a
              href="./../notifications.html"
              class="list-group-item list-group-item-action"
            >
              <i class="fas fa-bell"></i
              ><span class="d-xl-inline d-lg-none d-md-none d-sm-none">
                Notifications</span
              ></a
            >
            <a
              href="./../messages.html"
              class="list-group-item list-group-item-action"
            >
              <i class="fas fa-envelope"></i
              ><span class="d-xl-inline d-lg-none d-md-none d-sm-none">
                Messages</span
              ></a
            >
            <a
              href="./../bookmarks/index.html"
              class="list-group-item list-group-item-action"
              ><i class="fas fa-bookmark"></i
              ><span class="d-xl-inline d-lg-none d-md-none d-sm-none">
                Bookmarks</span
              ></a
            >
            <a
              href="./../lists.html"
              class="list-group-item list-group-item-action"
              ><i class="fas fa-list"></i
              ><span class="d-xl-inline d-lg-none d-md-none d-sm-none">
                Lists</span
              ></a
            >
            <a
              href="./../profile.html"
              class="list-group-item list-group-item-action"
              ><i class="fas fa-user"></i
              ><span class="d-xl-inline d-lg-none d-md-none d-sm-none">
                Profile</span
              ></a
            >
            <a
              href="./../more.html"
              class="list-group-item list-group-item-action"
            >
              <span class="position-relative"
                ><i class="fas fa-circle"></i
                ><i
                  class="fas fa-ellipsis-h position-absolute wd-more-icon text-white"
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
