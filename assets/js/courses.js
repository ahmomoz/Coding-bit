export function courseRender(courseCard, courseList) {
  let str = '';

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

// 影片列表 chapter-list
export function chapterListRender(dom, videos) {
  let emptyStr = '';
  videos.forEach(video => {
    const { chapter, title, duration, viewCount } = video;
    const chapterStr = `
    <li class="py-4 d-flex justify-content-between chapter-item">
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

// 講師其他影片 other-videos
export function otherVideosRender(dom, videos) {
  let emptyStr = '';
  videos.forEach(video => {
    const { imageUrl, title, viewCount } = video;
    const otherStr = `
      <li class="d-flex py-3 py-4 position-relative">
        <img class="rounded-2 me-4 other-video-image" src="${imageUrl}" alt="影片縮圖">
        <div class="f-column-between py-2">
          <h6 class="fs-6 other-video-title">${title}</h6>
          <div class="f-align-center me-6">
            <span class="view-count me-1 material-symbols-outlined eyes-icon">visibility</span>
            <data value="${viewCount}" class="data-view-count fs-7">${viewCount}</data>
          </div>
        </div>
      </li>`;
    emptyStr += otherStr;
  })
  dom.innerHTML = emptyStr;
}

// 相關影片 related-videos
export function relatedVideosRender(dom, videos) {
  let emptyStr = '';
  videos.forEach(video => {
    const { imageUrl, title, viewCount, author } = video;
    const relatedStr = `
      <li class="d-flex py-3 py-4 position-relative">
        <img class="rounded-2 me-4 related-video-image" src="${imageUrl}" alt="影片縮圖">
        <div class="f-between-center py-2">
          <h6 class="fs-6 related-video-title">${title}</h6>
          <div class="f-align-center me-6">
            <span>${author}</span>
            <span class="view-count me-1 material-symbols-outlined eyes-icon">visibility</span>
            <data value="${viewCount}" class="data-view-count fs-7">${viewCount}</data>
          </div>
        </div>
      </li>`;
    emptyStr += relatedStr;
  })
  dom.innerHTML = emptyStr;
}
