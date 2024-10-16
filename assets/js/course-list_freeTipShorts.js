import { courseRender } from '../js/courses.js';

const freeTipShortsCourseCard = document.querySelector('.freeTipShortsCourse-card-wrap');
const freeTipShortsCourseList = [
  {
    courseName: 'CSS 動態背景效果',
    img: 'course-11.png',
    teacher: 'Alice Liu',
    star: '4.7',
    totalDuration: '5分55秒',
    purchaseCount: '980',
    courseCategory: '免費影片'
  },
  {
    courseName: 'JS 實現圖片懸停效果',
    img: 'course-12.png',
    teacher: 'David Lee',
    star: '4.8',
    totalDuration: '6分20秒',
    purchaseCount: '1,050',
    courseCategory: '免費影片'
  },
  {
    courseName: '用 Flexbox 建立響應式網格',
    img: 'course-13.png',
    teacher: 'Maggie Huang',
    star: '4.6',
    totalDuration: '7分45秒',
    purchaseCount: '720',
    courseCategory: '免費影片'
  },
  {
    courseName: 'CSS 文字陰影特效',
    img: 'course-14.png',
    teacher: 'Leo Chen',
    star: '4.9',
    totalDuration: '4分30秒',
    purchaseCount: '860',
    courseCategory: '免費影片'
  },
  {
    courseName: 'JS 建立自訂提示框',
    img: 'course-15.png',
    teacher: 'Vivian Wu',
    star: '4.8',
    totalDuration: '9分15秒',
    purchaseCount: '1,200',
    courseCategory: '免費影片'
  },
  {
    courseName: 'CSS 製作滾動條樣式',
    img: 'course-16.png',
    teacher: 'Kevin Tsai',
    star: '4.5',
    totalDuration: '8分50秒',
    purchaseCount: '640',
    courseCategory: '免費影片'
  },
  {
    courseName: 'CSS 製作卡片翻轉效果',
    img: 'course-7.png',
    teacher: 'Alice Liu',
    star: '4.6',
    totalDuration: '6分10秒',
    purchaseCount: '590',
    courseCategory: '免費影片'
  },
  {
    courseName: 'JS 自動輪播圖片功能',
    img: 'course-8.png',
    teacher: 'David Lee',
    star: '4.8',
    totalDuration: '7分05秒',
    purchaseCount: '1,110',
    courseCategory: '免費影片'
  },
  {
    courseName: 'CSS 實現卡片懸浮陰影效果',
    img: 'course-9.png',
    teacher: 'Maggie Huang',
    star: '4.7',
    totalDuration: '5分40秒',
    purchaseCount: '820',
    courseCategory: '免費影片'
  },
  {
    courseName: 'JS 建立彈出式視窗',
    img: 'course-10.png',
    teacher: 'Leo Chen',
    star: '4.9',
    totalDuration: '6分50秒',
    purchaseCount: '1,320',
    courseCategory: '免費影片'
  },
  {
    courseName: '用 Grid 建立響應式布局',
    img: 'course-3.png',
    teacher: 'Vivian Wu',
    star: '4.7',
    totalDuration: '8分25秒',
    purchaseCount: '940',
    courseCategory: '免費影片'
  },
  {
    courseName: 'CSS 製作動態載入動畫',
    img: 'course-4.png',
    teacher: 'Kevin Tsai',
    star: '4.5',
    totalDuration: '7分55秒',
    purchaseCount: '780',
    courseCategory: '免費影片'
  }
  
];

if (freeTipShortsCourseCard) {
  const freeTipShortsCourseRenderData = () => {
    courseRender(freeTipShortsCourseCard, freeTipShortsCourseList);
  };

  freeTipShortsCourseRenderData();
} else {
  console.error('course-card-wrap element not found');
}