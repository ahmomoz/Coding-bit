const courseCard = document.querySelector('.course-card-wrap');

const courseRender = () => {
  let str='';
  let courseList = [
    {
      courseName: 'Python 基礎入門',
      img: 'course-1.png',
      teacher: 'Anna Wu',
      star: '4.0'
    },
    {
      courseName: 'Web 開發實戰',
      img: 'course-2.png',
      teacher: 'Peter Fan',
      star: '4.0'
    },
    {
      courseName: '數據分析技巧',
      img: 'course-3.png',
      teacher: 'Neko Meow',
      star: '4.0'
    },
    {
      courseName: '移動應用開發',
      img: 'course-4.png',
      teacher: 'momomo',
      star: '4.0'
    },
    {
      courseName: '機器學習導論',
      img: 'course-5.png',
      teacher: 'Tina Chen',
      star: '4.0'
    },
    {
      courseName: '網絡安全基礎',
      img: 'course-6.png',
      teacher: 'Anna Wu',
      star: '4.0'
    },
    {
      courseName: '雲計算應用',
      img: 'course-7.png',
      teacher: 'momomo',
      star: '4.0'
    },
    {
      courseName: 'UI/UX 設計原則',
      img: 'course-8.png',
      teacher: 'Tina Chen',
      star: '4.0'
    },
    {
      courseName: '區塊鏈技術探索',
      img: 'course-9.png',
      teacher: 'Anna Wu',
      star: '4.0'
    }
  ];

  courseList.forEach(item => {
    str += `
      <div class="col-md-6 col-xl-4">
        <a href="#" class="course-card card-column">
          <div class="card gradient-border p-lg-6 p-4 h-100">
            <div class="overflow-hidden img-hover-enlarge rounded">
              <img
                src="../assets/images/course/${item.img}"
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
const courseRenderData = () => {
  courseRender();
};

courseRenderData();