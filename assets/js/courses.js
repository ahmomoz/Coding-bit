export function courseRender(courseCard, courseList) {
  let str = '';

  courseList.forEach(item => {
    str += `
      <div class="col-md-6 col-xl-4">
        <a href="#" class="course-card card-column">
          <div class="card gradient-border p-lg-6 p-4 h-100">
            <div class="overflow-hidden img-hover-enlarge rounded">
              <img
                src="https://raw.githubusercontent.com/ahmomoz/Coding-bit/refs/heads/main/assets/images/course/${item.img}"
                class="card-img-top rounded"
                alt="course-image">
            </div>
            <div class="card-body p-0 mt-3 mt-lg-4 f-column-between">
              <h3 class="card-title fs-6 fs-lg-5">${item.courseName}</h3>
              <div class="f-between-center mt-1 mt-lg-2">
                <p class="card-text fs-7 fs-lg-6">${item.teacher}</p>
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

// 影片列表 chapter-list
export function chapterListRender(dom, videos) {
  let emptyStr = '';
  videos.forEach(video => {
    const { chapter, title, duration, viewCount } = video;
    const chapterStr = `
    <li class="p-4 d-flex justify-content-between chapter-item">
      <span class="material-symbols-outlined player-icon me-2">play_circle</span>
      <div class="flex-grow-1">
        <div class="d-flex align-items-center justify-content-between mb-1">
          <span class="fs-7 chapter-contents">${chapter}</span>
          <time class="video-duration fs-7 rounded-1 px-2 py-1">${duration}</time>
        </div>
        <h6 class="chapter-item-title mb-2">${title}</h6>
        <div class="d-flex">
          <span class="material-symbols-outlined fs-6 eyes-icon">visibility</span>
          <data class="chapter-view-count fs-7" value="${viewCount}">${viewCount}</data>
        </div>
      </div>
    </li>`;
    emptyStr += chapterStr;
  })
  dom.innerHTML = emptyStr;
}