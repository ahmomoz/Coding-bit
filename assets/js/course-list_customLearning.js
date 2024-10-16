import { courseRender } from '../js/courses.js';

const customLearningCourseCard = document.querySelector('.customLearningCourse-card-wrap');
const customLearningCourseList = [
  {
    courseName: 'CSS 毛玻璃製作效果',
    img: 'course-14.png',
    teacher: '卡斯伯 Casper',
    star: '4.0',
    totalDuration: '8分16秒',
    purchaseCount: '1,100',
    courseCategory: '客製化學習需求教學影片'
  },
  {
    courseName: 'clip-path繪製不規則圖形',
    img: 'course-16.png',
    teacher: '卡斯伯 Casper',
    star: '4.8',
    totalDuration: '7分12秒',
    purchaseCount: '48',
    courseCategory: '客製化學習需求教學影片'
  },
  {
    courseName: '背景漸層製作',
    img: 'course-1.png',
    teacher: 'Eric Lin',
    star: '4.3',
    totalDuration: '7分50秒',
    purchaseCount: '430',
    courseCategory: '客製化學習需求教學影片'
  },
  {
    courseName: '圖片懸停放大效果',
    img: 'course-4.png',
    teacher: 'Sophie Chen',
    star: '4.6',
    totalDuration: '5分45秒',
    purchaseCount: '770',
    courseCategory: '客製化學習需求教學影片'
  },
  {
    courseName: '表格渲染技巧',
    img: 'course-15.png',
    teacher: '卡斯伯 Casper',
    star: '4.2',
    totalDuration: '5分30秒',
    purchaseCount: '402',
    courseCategory: '客製化學習需求教學影片'
  },
  {
    courseName: 'CSS 字體陰影效果',
    img: 'course-6.png',
    teacher: 'Lily Zhang',
    star: '4.5',
    totalDuration: '6分40秒',
    purchaseCount: '950',
    courseCategory: '客製化學習需求教學影片'
  },
  {
    courseName: '使用 Grid 進行快速網頁佈局',
    img: 'course-8.png',
    teacher: 'Lily Zhang',
    star: '4.5',
    totalDuration: '10分05秒',
    purchaseCount: '950',
    courseCategory: '客製化學習需求教學影片'
  },
  {
    courseName: 'SVG 動畫入門',
    img: 'course-10.png',
    teacher: 'Sophie Chen',
    star: '4.7',
    totalDuration: '6分40秒',
    purchaseCount: '625',
    courseCategory: '客製化學習需求教學影片'
  },
  {
    courseName: 'CSS 製作打字效果',
    img: 'course-11.png',
    teacher: '卡斯伯 Casper',
    star: '4.6',
    totalDuration: '4分50秒',
    purchaseCount: '715',
    courseCategory: '客製化學習需求教學影片'
  },
  {
    courseName: 'JS 動態倒數計時器',
    img: 'course-3.png',
    teacher: 'Leo Chen',
    star: '4.8',
    totalDuration: '9分30秒',
    purchaseCount: '980',
    courseCategory: '客製化學習需求教學影片'
  },
  {
    courseName: 'CSS 製作圓形進度條',
    img: 'course-13.png',
    teacher: 'Vivian Wu',
    star: '4.6',
    totalDuration: '8分45秒',
    purchaseCount: '750',
    courseCategory: '客製化學習需求教學影片'
  },
  {
    courseName: '製作浮動的社群分享按鈕',
    img: 'course-9.png',
    teacher: 'Kevin Tsai',
    star: '4.5',
    totalDuration: '7分15秒',
    purchaseCount: '670',
    courseCategory: '客製化學習需求教學影片'
  }
];

if (customLearningCourseCard) {
  const customLearningCourseRenderData = () => {
    courseRender(customLearningCourseCard, customLearningCourseList);
  };

  customLearningCourseRenderData();
} else {
  console.error('course-card-wrap element not found');
}