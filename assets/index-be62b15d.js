import"./bootstrap.min-e8ca3a79.js";function o(r,c){let s="";c.forEach(e=>{s+=`
      <div class="col-md-6 col-xl-4">
        <a href="#" class="course-card card-column">
          <div class="card gradient-border p-lg-6 p-4 h-100">
            <div class="overflow-hidden img-hover-enlarge rounded">
              <img
                src="https://raw.githubusercontent.com/ahmomoz/Coding-bit/refs/heads/main/assets/images/course/${e.img}"
                class="card-img-top rounded"
                alt="course-image">
            </div>
            <div class="card-body p-0 mt-3 mt-lg-4 f-column-between">
              <h3 class="card-title fs-6 fs-lg-5">${e.courseName}</h3>
              <div class="f-between-center mt-1 mt-lg-2">
                <p class="card-text fs-7 fs-lg-6">${e.teacher}</p>
                <p class="f-center text-brand-03 fs-7 fs-lg-6">
                  <span class="material-symbols-outlined icon-fill text-brand-01 fs-6 fs-lg-5 me-1">
                    kid_star
                  </span>
                  ${e.star}
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    `,r.innerHTML=s})}const a=document.querySelector(".course-card-wrap"),t=[{courseName:"Python 基礎入門",img:"course-1.png",teacher:"Anna Wu",star:"4.0"},{courseName:"Web 開發實戰",img:"course-2.png",teacher:"Peter Fan",star:"4.0"},{courseName:"數據分析技巧",img:"course-3.png",teacher:"Neko Meow",star:"4.0"},{courseName:"移動應用開發",img:"course-4.png",teacher:"momomo",star:"4.0"},{courseName:"機器學習導論",img:"course-5.png",teacher:"Tina Chen",star:"4.0"},{courseName:"網絡安全基礎",img:"course-6.png",teacher:"Anna Wu",star:"4.0"},{courseName:"雲計算應用",img:"course-7.png",teacher:"momomo",star:"4.0"},{courseName:"UI/UX 設計原則",img:"course-8.png",teacher:"Tina Chen",star:"4.0"},{courseName:"區塊鏈技術探索",img:"course-9.png",teacher:"Anna Wu",star:"4.0"}];a?o(a,t):console.error("course-card-wrap element not found");
