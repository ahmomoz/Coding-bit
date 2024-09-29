function o(a,t){let s="";t.forEach(e=>{s+=`
      <div class="col-md-6 col-xl-4">
        <a href="#" class="course-card card-column">
          <div class="card gradient-border img-hover-enlarge p-lg-6 p-4 h-100">
            <div class="overflow-hidden img-wrapper rounded">
              <img
                src="https://raw.githubusercontent.com/ahmomoz/Coding-bit/refs/heads/main/assets/images/course/${e.img}"
                class="card-img-top cover-img rounded"
                alt="course-image">
            </div>
            <div class="card-body p-0 mt-3 mt-lg-4 f-column-between">
              <div>
                <h3 class="card-title fs-6 fs-lg-5">${e.courseName}</h3>
                <p class="card-text fs-7 fs-lg-6 mt-1 mt-lg-2">${e.teacher}</p>
              </div>
              <div class="f-between-center">
                <div class="f-align-center mt-1 mt-lg-2">
                  <div class="f-center">
                    <span class="material-symbols-outlined fs-5 me-1">
                      schedule
                    </span>
                    <p class="fs-7 fs-lg-6">
                      ${e.totalDuration}
                    </p>
                  </div>
                  <div class="f-center ms-2">
                    <span class="material-symbols-outlined fs-5 me-1">
                      group
                    </span>
                    <p class="fs-7 fs-lg-6">
                      ${e.purchaseCount}
                    </p>
                  </div>
                </div>
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
    `,a.innerHTML=s})}const r=document.querySelector(".course-card-wrap"),c=[{courseName:"Python 基礎入門",img:"course-1.png",teacher:"Anna Wu",star:"4.0",totalDuration:"36小時",purchaseCount:"1,100"},{courseName:"Web 開發實戰",img:"course-2.png",teacher:"Peter Fan",star:"4.0",totalDuration:"3.2小時",purchaseCount:"402"},{courseName:"數據分析技巧",img:"course-3.png",teacher:"Neko Meow",star:"4.0",totalDuration:"1.2小時",purchaseCount:"48"},{courseName:"移動應用開發",img:"course-4.png",teacher:"momomo",star:"4.0",totalDuration:"26小時",purchaseCount:"798"},{courseName:"機器學習導論",img:"course-5.png",teacher:"Tina Chen",star:"4.0",totalDuration:"2.8小時",purchaseCount:"39"},{courseName:"網絡安全基礎",img:"course-6.png",teacher:"Anna Wu",star:"4.0",totalDuration:"1.8小時",purchaseCount:"168"},{courseName:"雲計算應用",img:"course-7.png",teacher:"momomo",star:"4.0",totalDuration:"13小時",purchaseCount:"349"},{courseName:"UI/UX 設計原則",img:"course-8.png",teacher:"Tina Chen",star:"4.0",totalDuration:"3小時",purchaseCount:"1,025"},{courseName:"區塊鏈技術探索",img:"course-9.png",teacher:"Anna Wu",star:"4.0",totalDuration:"7小時",purchaseCount:"225"}];r?o(r,c):console.error("course-card-wrap element not found");
