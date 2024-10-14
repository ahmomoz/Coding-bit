import { courseRender } from '../js/courses.js';

const courseCard = document.querySelector('.course-card-wrap');
const courseList = [
  {
    courseName: 'React 進階開發技巧',
    img: 'course-17.png',
    teacher: '卡斯伯Casper',
    star: '4.0',
    totalDuration: '36小時',
    purchaseCount: '12,345',
    courseCategory: '主題式課程影片'
  },
  {
    courseName: 'Web 開發實戰',
    img: 'course-2.png',
    teacher: 'Peter Fan',
    star: '4.0',
    totalDuration: '3.2小時',
    purchaseCount: '402',
    courseCategory: '主題式課程影片'
  },
  {
    courseName: '數據分析技巧',
    img: 'course-3.png',
    teacher: 'Neko Meow',
    star: '4.0',
    totalDuration: '1.2小時',
    purchaseCount: '48',
    courseCategory: '主題式課程影片'
  },
  {
    courseName: '移動應用開發',
    img: 'course-4.png',
    teacher: 'momomo',
    star: '4.0',
    totalDuration: '26小時',
    purchaseCount: '798',
    courseCategory: '主題式課程影片'
  },
  {
    courseName: '機器學習導論',
    img: 'course-5.png',
    teacher: 'Tina Chen',
    star: '4.0',
    totalDuration: '2.8小時',
    purchaseCount: '39',
    courseCategory: '主題式課程影片'
  },
  {
    courseName: '網路安全基礎',
    img: 'course-6.png',
    teacher: 'Anna Wu',
    star: '4.0',
    totalDuration: '1.8小時',
    purchaseCount: '168',
    courseCategory: '主題式課程影片'
  },
  {
    courseName: '雲計算應用',
    img: 'course-7.png',
    teacher: 'momomo',
    star: '4.0',
    totalDuration: '13小時',
    purchaseCount: '349',
    courseCategory: '主題式課程影片'
  },
  {
    courseName: 'UI/UX 設計原則',
    img: 'course-8.png',
    teacher: 'Tina Chen',
    star: '4.0',
    totalDuration: '3小時',
    purchaseCount: '1,025',
    courseCategory: '主題式課程影片'
  },
  {
    courseName: '區塊鏈技術探索',
    img: 'course-9.png',
    teacher: 'Anna Wu',
    star: '4.0',
    totalDuration: '7小時',
    purchaseCount: '225',
    courseCategory: '主題式課程影片'
  }
];

if (courseCard) {
  const courseRenderData = () => {
    courseRender(courseCard, courseList);
  };

  courseRenderData();
} else {
  console.error('course-card-wrap element not found');
}
