export function courseRender(courseCard, courseList) {
  let str='';

  courseList.forEach(item => {
    str += `
      <div class="col-md-6 col-xl-4">
        <a href="#" class="course-card card-column">
          <div class="card gradient-border img-hover-enlarge p-lg-6 p-4 h-100">
            <div class="overflow-hidden img-wrapper rounded position-relative">
              <img
                src="https://raw.githubusercontent.com/ahmomoz/Coding-bit/refs/heads/main/assets/images/course/${item.img}"
                class="card-img-top cover-img rounded"
                alt="course-image">
            </div>
            <span class="course-category-tag opacity-75 position-absolute">${item.courseCategory}</span>
            <div class="card-body p-0 mt-3 mt-lg-4 f-column-between">
              <div>
                <h3 class="card-title fs-6 fs-lg-5">${item.courseName}</h3>
                <p class="card-text fs-7 fs-lg-6 mt-1 mt-lg-2">${item.teacher}</p>
              </div>
              <div class="f-between-center">
                <div class="f-align-center mt-1 mt-lg-2">
                  <div class="f-center">
                    <span class="material-symbols-outlined fs-5 me-1">
                      schedule
                    </span>
                    <p class="fs-7 fs-lg-6">
                      ${item.totalDuration}
                    </p>
                  </div>
                  <div class="f-center ms-2">
                    <span class="material-symbols-outlined fs-5 me-1">
                      group
                    </span>
                    <p class="fs-7 fs-lg-6">
                      ${item.purchaseCount}
                    </p>
                  </div>
                </div>
                <p class="f-center text-brand-03 fs-7 fs-lg-6">
                  <span class="material-symbols-outlined icon-fill text-brand-01 fs-6 fs-lg-5 me-1">
                    kid_star
                  </span>
                  ${item.star}
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    `
    courseCard.innerHTML = str;
  });
}