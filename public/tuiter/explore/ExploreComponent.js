import PostSummaryList from "./../PostSummaryList/index.js";

const ExploreComponent = () => {
  return `
    <div class="row">
        <div class="col-11">
        <div class="position-relative">
            <input
            type="text"
            placeholder="Search Tuiter"
            class="form-control rounded-pill ps-5 wd-input-height"
            />

            <i class="fas fa-search position-absolute wd-search-icon"></i>
        </div>
        </div>
        <div class="col-1">
        <i class="fa-cog fas fs-5 mt-1 text-primary"></i>
        </div>
    </div>

    <ul class="nav nav-tabs mt-2">
        <li class="nav-item">
        <a class="nav-link active" href="#">For you</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Trending</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">News</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Sports</a>
        </li>
        <li
        class="nav-item d-block d-xl-block d-lg-block d-md-block d-sm-none"
        >
        <a class="nav-link" href="#">Entertainment</a>
        </li>
    </ul>

    <div class="position-relative">
        <img src="./../../images/starship.jpg" class="w-100 mt-2" />
        <h2 class="position-absolute text-white bottom-0 ms-2">
        SpaceX's Starship
        </h2>
    </div>

    ${PostSummaryList()}
    `;
};

export default ExploreComponent;
